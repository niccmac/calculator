import { ClassNames } from "@emotion/react";
import React, { useContext, useState } from "react";
import { toDoContext } from "./providers/toDoProvider";
import ToDo from "./toDo";
import ToDoForm from "./toDoForm";
const ToDoList = (props) => {
  const { addToDo } = useContext(toDoContext);

  return (
    <div className="todo">
      <h1>Tasks</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo />
    </div>
  );
};
export default ToDoList;
