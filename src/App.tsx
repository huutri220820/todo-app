import React, { useEffect, useState } from "react";

import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import FormInput from "./components/FormInput";

import TodoItem from "./models/TodoItem";

import "./App.scss";
import { getByText } from "@testing-library/react";

const todoList: TodoItem[] = [
    { id: 1, title: "Công việc chưa làm", completed: false },
    { id: 2, title: "Công việc đã hoàn thành", completed: true },
];

function App() {
    const [todoItems, setTodoItems] = useState(() => {
        let list: TodoItem[] = JSON.parse(
            localStorage.getItem("todoItems") ?? JSON.stringify(todoList)
        );
        return list;
    });

    const [filter, setFilter] = useState("all");

    const changeState = (id: number) => {
        const newTodoItems = todoItems.map(
            (item) => (item.id === id && { ...item, completed: !item.completed }) || item
        );
        setTodoItems(newTodoItems);
        // setTodoItems(
        //     todoItems.map((x) => {
        //         if (id === x.id) return { ...x, completed: !x.completed };
        //         return x;
        //     })
        // );
    };

    const deleteItem = (id: number) => {
        const index = todoItems.findIndex((x) => x.id === id);
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
    };

    const changeFilter = (filter: string) => {
        setFilter(filter);
    };

    const addTodo = (title: string) => {
        let newTodoItems = [...todoItems];
        if (todoItems.length > 0) {
            const lastItem = todoItems[todoItems.length - 1];
            let newTodoItem: TodoItem = { title: title, id: lastItem.id + 1, completed: false };
            newTodoItems.push(newTodoItem);
        } else {
            let newTodoItem: TodoItem = { title: title, id: 1, completed: false };
            newTodoItems.push(newTodoItem);
        }
        console.log(newTodoItems);
        setTodoItems(newTodoItems);
    };

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }, [todoItems]);

    return (
        <div className="container m-auto">
            <div className="content lg:w-2/5 md:w-5/6 m-auto">
                <header className="app-header">
                    <h1 className="justify-center flex text-2xl">TODO APP</h1>
                </header>
                <div className="content">
                    <FilterBar filter={filter} changeFilter={changeFilter}></FilterBar>
                    <FormInput addTodo={addTodo}></FormInput>
                    <TodoList
                        todoItems={todoItems}
                        changeState={changeState}
                        deleteItem={deleteItem}
                        filter={filter}
                    ></TodoList>
                </div>
            </div>
        </div>
    );
}

export default App;
