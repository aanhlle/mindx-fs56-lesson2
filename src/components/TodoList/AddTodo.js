import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTodo.css";
class AddTodo extends React.Component {
    state = {
        content: "",
    };
    onChangeHandler = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (!this.state.content) return;
        const newTodo = {
            id: uuidv4(),
            content: this.state.content,
            isCompleted: false,
        };
        this.props.onAddNewTodo(newTodo);
        this.setState({
            content: "",
        });
    };
    render() {
        return (
            <div className="addTodo-container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-10">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="border-0 border-bottom bg-transparent text-white"
                                    name="content"
                                    value={this.state.content}
                                    aria-describedby="helpId"
                                    placeholder="Add new todo"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary">
                                ADD
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;
