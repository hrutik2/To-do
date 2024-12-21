import { useEffect, useState } from "react";
import styled from "styled-components";

import { Column } from "./column";



export const DragAndDrop_2 = ({ todo, updateTodoStatus, handleDelete }) => {
  const [todos, setTodos] = useState([]);
  const [progressingTodo, setProgressingTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  useEffect(() => {
    if (Array.isArray(todo)) {
      const toDoList = [];
      const inProgressList = [];
      const doneList = [];

      todo.forEach((el) => {
        if (el.status === "To-do") {
          toDoList.push(el);
        } else if (el.status === "In Progress") {
          inProgressList.push(el);
        } else if (el.status === "Done") {
          doneList.push(el);
        }
      });

      setTodos(toDoList);
      setProgressingTodo(inProgressList);
      setDoneTodo(doneList);
    }
  }, [todo]);

  const moveTodo = (id, newStatus) => {
    updateTodoStatus(id, newStatus);
  };

  return (
    <Container>
      <Column
        title="To-do"
        items={todos}
        moveTodo={moveTodo}
        columnStatus="To-do"
        handleDelete={handleDelete}
      />
      <Column
        title="In Progress"
        items={progressingTodo}
        moveTodo={moveTodo}
        columnStatus="In Progress"
        handleDelete={handleDelete}
      />
      <Column
        title="Done"
        items={doneTodo}
        moveTodo={moveTodo}
        columnStatus="Done"
        handleDelete={handleDelete}
      />
    </Container>
  );
};




const Container = styled.div`
  width: 95%;
  display: flex;
  padding: 20px;
`;

