import React, { useState } from "react";
import ToDoForm from "./toDoForm";
const ToDoList = (props) => {
  const [allToDo, setAllToDo] = useState([]);
  const addToDo = (todo) => {
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    const newToDos = [...allToDo, todo];
    setAllToDo(newToDos);
  };
  return (
    <>
      <h1>To Do</h1>
      <ToDoForm onSubmit={addToDo} />
    </>
  );
};
export default ToDoList;
