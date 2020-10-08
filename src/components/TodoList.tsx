import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../models/TodoItem";
import "./TodoList.scss";
const classnames = require("classnames");

TodoList.propTypes = {
    todoItems: PropTypes.array,
    filter: PropTypes.string,
    changeState: PropTypes.func,
    delete: PropTypes.func,
};

TodoList.defaultProps = {
    TodoItem: [],
    filter: "all",
    changeState: null,
    delete: null,
};

interface PropType {
    todoItems: TodoItem[];
    filter?: string;
    changeState: Function;
    deleteItem: Function;
}

export default function TodoList(prop: PropType) {
    const { todoItems, changeState, deleteItem, filter } = prop;

    return (
        <div className="todo-list">
            {todoItems?.map(
                (item) =>
                    (filter === "all" ||
                        (filter === "done" && item.completed === true) ||
                        (filter === "active" && item.completed === false)) && (
                        <div
                            key={item.id}
                            className={classnames("item", { active: item.completed })}
                        >
                            <input
                                type="checkbox"
                                onChange={() => changeState(item.id)}
                                checked={item.completed}
                            ></input>
                            <label>{item.title}</label>
                            {item.completed && (
                                <i className="far fa-trash" onClick={() => deleteItem(item.id)}></i>
                            )}
                        </div>
                    )
            )}
        </div>
    );
}
