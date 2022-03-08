import React, { Component } from "react";
import "./MultipleChoiceApp.css";
import { quizData } from "../../Consts";
import QuestionList from "./QuestionList";

export default class MultipleChoiceApp extends Component {
    state = {
        quizNo: 0,
        result: 0,
        isDone: false,
    };

    goNextHandler = (isCorrect) => {
        let { quizNo, result } = this.state;
        if (isCorrect) {
            this.setState({ result: result + 1 });
        }
        if (quizNo < quizData.length - 1) this.setState({ quizNo: quizNo + 1 });
        else this.setState({ isDone: true });
    };
    render() {
        let { quizNo, isDone, result } = this.state;

        return (
            <div className="quiz-container">
                <div className="quiz-body">
                    <QuestionList
                        quizData={quizData}
                        quizNo={quizNo}
                        goNextHandler={this.goNextHandler}
                        isDone={isDone}
                        result={result}
                    />
                </div>
            </div>
        );
    }
}
