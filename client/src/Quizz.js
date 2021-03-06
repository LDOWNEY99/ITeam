import React, { Component } from 'react';
import { quizzes, users } from './examples';
import { Link } from 'react-router-dom';
import { HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT  } from './constants.js';

import axios from 'axios';



class Question extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const c = this.props.current;
        const q = this.props.questions[c];
        const bp = c > 0 ? <input type="button" value="Previous questions" onClick={this.props.previousQuestion} /> : null;
        const ba = c < this.props.questions.length - 1 ? <input type="button" value="Next Question" onClick={this.props.nextQuestion} /> : <input type="button" value="See results" onClick={this.props.result} />;

        return (
            <form>
                <div><h1>{q.question}</h1>
                    <h3></h3>
<<<<<<< HEAD
                    {q.txtAnswers.map(txt => <div><button className="checkbox">q</button>{txt}</div>)}
                    {q.imgAnswers.map(img => <div><input type='checkbox' /> <img  src={HTTP_SERVER_PORT_PICTURES + img} /> </div>)}

                    {bp}    {/* Button previous Question */}
                    <input type="button" value="Validate" onClick={(e) => this.props.Validate(e)} />
                    {ba}    {/* Button next Question */}
                    {/* {bv} */}
=======
                    {q.txtAnswers.map(txt => <div><input type='checkbox' className="myAnswers" /> {txt}</div>)}
                    {q.imgAnswers.map(img => <div><input type='checkbox' className="myAnswers" /> <img src={HTTP_SERVER_PORT_PICTURES + img} /> </div>)}
>>>>>>> 142abd4cbdf77738ae5302a8f42f512446762577

                    {bp}
                    <input type="button" value="Validate" onClick={(e) => this.props.validate(e)} />
                    {ba}

                </div>
            </form>
        )
    }
}

class Quizz extends Component {

    constructor(props) {
        super(props);
        let tmp = [];
        this.state = { current: 0, score:0, toValidate : [], quizz : null};
        this.validate = this.validate.bind(this);
        this.loadData();
    }

    async loadData() {
        const quizz = (await axios.get(HTTP_SERVER_PORT + 'quiz/'+this.props.match.params.id)).data;  // We need to wait for the response.
        this.setState({quizz: quizz});
        let tmp = [];
        for(let i = 0; i < quizz.questions.length;i++) {
            
            tmp.push(i);
        }
        this.setState({toValidate : tmp});
      }                
          
    nextQuestion() {
        let newIndex = this.state.current + 1;
        this.setState({ current: newIndex });
    }

    previousQuestion() {
        let newIndex = this.state.current - 1;
        this.setState({ current: newIndex });
    }

<<<<<<< HEAD
<<<<<<< HEAD
   /* calculScore() {
        if(this.question.solution == checkedAnswers) {
            this.prompt.score = this.prompt.score+this.question.points;
=======
    Validate() {
=======
    validate(e) {
>>>>>>> 142abd4cbdf77738ae5302a8f42f512446762577
        let newState = "validated";
        this.setState({ state: newState });
        let tmp = this.state.toValidate.filter(nb => nb != this.state.current);
        this.calculScore(e);
        this.setState({current : this.state.current + 1, toValidate : tmp});
    }

<<<<<<< HEAD
    calculScore() {
        if (/*this.question.solution == checkedAnswers*/ true) {
           // this.prompt.score = this.prompt.score + this.question.points;
>>>>>>> a87042cc9e8d516274552463456bc1024e9a0281
=======
    calculScore(e) {
        let t = document.getElementsByClassName("myAnswers");
        let rep = [];
        for (let i=0; i<t.length;i++)
            if (t[i].checked)
               rep.push(i);
        console.log("rep",rep);
        //        
        const win = (rep.join() == this.state.quizz.questions[this.state.current].solutions.join() )
        if (win == true) {
            let newScore = this.state.score + this.state.quizz.questions[this.state.current].points;
            console.log("newscore",newScore);
            this.setState({
                score: newScore
            })
>>>>>>> 142abd4cbdf77738ae5302a8f42f512446762577
        }
    }*/

    render() {
        if(this.state.quizz==null) {
            return (
                <div>Wait for data</div>
            );
        } else {
            
        }

        console.log(this.state.toValidate);
        if(this.state.toValidate.length > 0 && this.state.current == this.state.quizz.questions.length) {
            return (
                 <div> <h1> You first have to complete every question to see your results</h1> </div>
             );
        }
        if(this.state.current == this.state.quizz.questions.length) {
            return (
                <div> <h1> Your final score is : {this.state.score}</h1> </div>
            );
        }

        return (
            <div>
                <h1> {this.state.quizz.name} </h1>
                <Question
                    current={this.state.current}
                    questions={this.state.quizz.questions}
                    nextQuestion={() => this.nextQuestion()}
                    previousQuestion={() => this.previousQuestion()}
<<<<<<< HEAD
<<<<<<< HEAD
                   /* calculScore={() => this.calculScore()}
                    score={0}*/
=======
                    // calculScore={() => this.calculScore()}
                    score={0}
                    Validate = {this.Validate}
>>>>>>> a87042cc9e8d516274552463456bc1024e9a0281
=======
                    score={0}
                    validate = {this.validate}
>>>>>>> 142abd4cbdf77738ae5302a8f42f512446762577
                />
            </div>
        )
    }
}

export default Quizz;