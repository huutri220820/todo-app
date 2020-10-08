import React from "react";
import "./FormInput.scss";
export default function FormInput(prop: { addTodo: Function }) {
    const { addTodo } = prop;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodo(e.target.input.value);
        // console.log(value.current?.value);
        e.target.input.value = "";
    };

    // let value = useRef<HTMLInputElement>(null);

    return (
        <div className="form-input">
            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" required className="input" name="input"></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg focus:outline-none">
                    Add
                </button>
            </form>
        </div>
    );
}
