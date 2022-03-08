import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class QuestionList extends Component {
    state = {
        choice: "",
        // isChecked: false  attempting to fix the radio bug after submit each question
    };

    onSubmitHandler = (e) => {
        e.preventDefault();

        let { quizData, quizNo, goNextHandler, isDone } = this.props;
        let { choice } = this.state;
        if (!choice && !isDone) {
            alert("please choose an answer!");
            return;
        }

        let result = quizData[quizNo].correct === choice ? true : false;
        goNextHandler(result);
        this.setState({ choice: "" });
    };

    onChangeHandler = (e) => {
        this.setState({
            choice: e.target.id,
        });
        // this.setState({
        //     checked: true;
        // })
    };

    //should use another way to restart, time rush again
    onRestartHandler = () => {
        window.location.reload();
    };

    render() {
        let { quizData, quizNo, isDone, result } = this.props;
        let { isChecked } = this.state;
        // quizData choices abcd are at same level with question and answer, so a map() is not really convenient.
        // time rush chose brute force...
        return (
            <form onSubmit={this.onSubmitHandler}>
                {isDone ? (
                    <h3 className="m-3 p-3">
                        You got {result}/{quizData.length} questions correct!
                    </h3>
                ) : (
                    <div className="m-3">
                        <h2>{quizData[quizNo].question}</h2>
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="answer"
                                    id="a"
                                    onChange={this.onChangeHandler}
                                    checked={isChecked}
                                ></input>
                                <label htmlFor="a">{quizData[quizNo].a}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="answer"
                                    id="b"
                                    onChange={this.onChangeHandler}
                                    checked={isChecked}
                                ></input>
                                <label htmlFor="b">{quizData[quizNo].b}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="answer"
                                    id="c"
                                    onChange={this.onChangeHandler}
                                    checked={isChecked}
                                ></input>
                                <label htmlFor="c">{quizData[quizNo].c}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="answer"
                                    id="d"
                                    onChange={this.onChangeHandler}
                                    checked={isChecked}
                                ></input>
                                <label htmlFor="d">{quizData[quizNo].d}</label>
                            </li>
                        </ul>
                    </div>
                )}
                {isDone ? (
                    <button onClick={this.onRestartHandler}>Restart</button>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </form>
        );
    }
}
