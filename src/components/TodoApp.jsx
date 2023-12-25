import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        console.log(input);
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const completeTodo = (id) => {
        console.log(id);
        const index = todos.findIndex((todo) => todo.id === id);
        console.log(index);
        //clone :Do Not Mutate
        const selectedTodo = { ...todos[index] };
        console.log(selectedTodo);
        console.log(selectedTodo.isComplete);
        selectedTodo.isComplete = !selectedTodo.isComplete;
        //clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        console.log(id);
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const updateTodo = (id, newValue) => {
        const index = todos.findIndex((todo) => todo.id === id);

        //clone :Do Not Mutate
        const selectedTodo = { ...todos[index] };

        selectedTodo.text = newValue;
        //clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    };

    return (
        <div className="">
            <div className="max-w-[600px] mt-20 p-2 sm:p-10 card mx-auto ">
                <TodoForm addTodoHandler={addTodoHandler} />
                <div
                    className={` card  ${todos.length > 0 ? "mt-3  p-3 " : ""} ${
                        todos.length > 3 ? "h-[250px] overflow-y-scroll " : ""
                    }  `}
                >
                    <TodoList
                        todos={todos}
                        onComplete={completeTodo}
                        onDelete={removeTodo}
                        onUpdateTodo={updateTodo}
                    />
                </div>
            </div>
        </div>
    );
};
export default TodoApp;
