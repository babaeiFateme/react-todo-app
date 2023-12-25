import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onEdit, onUpdateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: "",
        isCompleted: false,
    });

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id, newValue);
        setEdit({ id: null, text: "" });
    };

    const renderTodoList = () => {
        return todos.map((todo) => {
            return (
                <div className="">
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onComplete={() => onComplete(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                        onEdit={() => setEdit(todo)}
                    />
                </div>
            );
        });
    };
    return (
        <div>
            {edit.id ? (
                <TodoForm addTodoHandler={editTodo} edit={edit} />
            ) : (
                renderTodoList()
            )}
        </div>
    );
};

export default TodoList;
