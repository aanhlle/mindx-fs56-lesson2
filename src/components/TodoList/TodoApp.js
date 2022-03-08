import React, { Component } from "react";
import AddTodo from "./AddTodo";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

class TodoApp extends Component {
    state = {
        todos: [],
        filterTodos: [],
        isFilter: false,
    };

    onAddNewTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos],
        });
    };

    onCheckHandler = (id) => {
        this.setState(({ todos, filterTodos }) => {
            return {
                todos: todos.map((todo) => {
                    if (todo.id === id)
                        return { ...todo, isCompleted: !todo.isCompleted };
                    else return todo;
                }),
                filterTodos: filterTodos.map((todo) => {
                    if (todo.id === id)
                        return { ...todo, isCompleted: !todo.isCompleted };
                    else return todo;
                }),
            };
        });
    };

    onFilterTodos = (str) => {
        if (!str.trim()) {
            this.setState({ filterTodos: [], isFilter: false });
            return;
        }
        let compareStr = str.toLowerCase();

        this.setState((state) => {
            let filterTodos = state.todos.filter((el) => {
                let lowerStr = el.content.toLowerCase();
                return lowerStr.includes(compareStr);
            });

            return { filterTodos: filterTodos, isFilter: true };
        });
    };

    onEditSubmit = (id, editContent) => {
        this.setState(({ todos, filterTodos }) => {
            return {
                todos: todos.map((todo) => {
                    if (todo.id === id)
                        return { ...todo, content: editContent };
                    else return todo;
                }),
                filterTodos: filterTodos.map((todo) => {
                    if (todo.id === id)
                        return { ...todo, content: editContent };
                    else return todo;
                }),
            };
        });
    };

    render() {
        const { todos, filterTodos, isFilter } = this.state;
        return (
            <div className="todo-wrapper">
                <div className="todo-container">
                    <TodoFilter
                        todos={todos}
                        onfilterTodos={this.onFilterTodos}
                    />

                    <TodoList
                        todos={todos}
                        filterTodos={filterTodos}
                        isFilter={isFilter}
                        onCheckHandler={this.onCheckHandler}
                        onEditSubmit={this.onEditSubmit}
                    />
                    <AddTodo onAddNewTodo={this.onAddNewTodo} />
                </div>
            </div>
        );
    }
}
export default TodoApp;
