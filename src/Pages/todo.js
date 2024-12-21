import { useState } from "react";
import { AddTodo } from "../component/addtodo";

import { DragAndDrop_2 } from "../component/DragAndDrop";

export const Todo = () => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleAddTodo = (obj) => {
    const updatedTodos = [...todo, obj];
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const updateTodoStatus = (id, newStatus) => {
    const updatedTodos = todo.map((el) =>
      el.id === id ? { ...el, status: newStatus } : el
    );
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const handleDelete = (id) => {
    const updatedTodo = todo.filter((el) => el.id !== id);
    updateTodoStatus(id, null);
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
  };

  return (
    <>
      <h1 style={{textAlign:"center"}}>Kanban Task Management</h1>
      <AddTodo handleAddTodo={handleAddTodo} />

      <DragAndDrop_2
        todo={todo}
        updateTodoStatus={updateTodoStatus}
        handleDelete={handleDelete}
      ></DragAndDrop_2>
    </>
  );
};
