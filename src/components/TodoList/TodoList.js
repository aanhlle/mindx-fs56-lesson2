import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
    todos,
    filterTodos,
    isFilter,
    onCheckHandler,
    onEditSubmit,
}) => {
    let todoArr = isFilter ? filterTodos : todos;
    return (
        <div>
            {todos.length === 0 ? (
                <p>Please add new task</p>
            ) : (
                todoArr.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onCheckHandler={onCheckHandler}
                        onEditSubmit={onEditSubmit}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;
