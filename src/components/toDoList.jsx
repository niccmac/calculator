import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import ToDo from "./toDo";
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
  const completeToDo = (id) => {
    let updatedToDos = allToDo.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setAllToDo([...updatedToDos]);
  };
  return (
    <div className="todo">
      <h1>To Do</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo allTasks={[allToDo]} completeToDo={completeToDo} />
    </div>
  );
};
export default ToDoList;
