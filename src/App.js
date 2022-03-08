import React, { Component } from "react";
import SmartPhoneApp from "./components/SmartPhoneStore/SmartPhoneApp";
import TodoList from "./components/TodoList/TodoApp";

export default class App extends Component {
    render() {
        return <TodoList />;
    }
}
