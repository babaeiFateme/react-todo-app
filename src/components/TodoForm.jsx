import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");
    // const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert("insert your task");
            return;
        }
        props.addTodoHandler(input);
        setInput("");
    };

    return (
        <form
            className="form max-w-[600] flex gap-3  "
            onSubmit={submitHandler}
        >
            <input
                className="w-full font-['JosefinSans'] font-medium text-xl outline-none sm:pl-2  lg:pl-4 shadow-[-5px 6px 28px rgba(0, 0, 0, 0.12)] bg-grayMain  backdrop-blur-[3px]  rounded-[20px] "
                type="text"
                value={input}
                onChange={changeHandler}
                placeholder={props.edit ? "update to do ...." : "add to do"}
            />
            <button type="submit" className="  btn-submit">
                {props.edit ? "update" : "+"}
            </button>
        </form>
    );
};

export default TodoForm;
