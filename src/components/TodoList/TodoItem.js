import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
    state = {
        isEdit: false,
        editContent: this.props.todo.content,
    };

    onChangeHandler = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onEditHandler = () => {
        this.setState({ isEdit: !this.state.isEdit });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const { id } = this.props.todo;
        const { editContent } = this.state;
        //if (this.state.isEdit) return;
        this.props.onEditSubmit(id, editContent);
        this.setState({ isEdit: !this.state.isEdit });
    };

    render() {
        const { todo, onCheckHandler } = this.props;
        const { isEdit, editContent } = this.state;
        const { id, content, isCompleted } = todo;

        const input = (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    className="border-0 border-bottom bg-transparent text-white"
                    name="editContent"
                    value={editContent}
                    aria-describedby="helpId"
                    onChange={this.onChangeHandler}
                />
            </form>
        );

        let status = isCompleted
            ? "d-inline-block completed"
            : "d-inline-block";

        return (
            <div>
                <div className={status}>{isEdit ? input : content}</div>
                <div className="float-end">
                    <i
                        className="fa fa-edit"
                        type="submit"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Click to edit"
                        onClick={() => {
                            if (isCompleted) return;
                            this.onEditHandler(id);
                        }}
                        onSubmit={this.onSubmitHandler}
                    />
                    <i
                        className="fa fa-check-circle"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark as done"
                        onClick={() => {
                            if (isEdit) {
                                alert("please finish editing first!");
                                return;
                            }
                            onCheckHandler(id);
                        }}
                    />
                </div>
            </div>
        );
    }
}
export default TodoItem;
