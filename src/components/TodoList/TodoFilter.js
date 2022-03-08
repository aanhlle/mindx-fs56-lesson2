import React from "react";

class TodoFilter extends React.Component {
    state = {
        filterStr: "",
    };

    onChangeHandler = (e) => {
        const { value, name } = e.target;

        this.setState(
            {
                ...this.state,
                [name]: value,
            },
            () => this.props.onfilterTodos(this.state.filterStr)
        );
    };

    render() {
        const { filterStr } = this.state;
        return (
            <div className="mb-3">
                <p className="m-0">TodoFilter</p>
                <input
                    type="text"
                    name="filterStr"
                    value={filterStr}
                    className="border-0 border-bottom bg-transparent text-white p-1"
                    style={{
                        outline: "none",
                    }}
                    onChange={this.onChangeHandler}
                />
            </div>
        );
    }
}

export default TodoFilter;
