import React, { useContext } from "react";
import { toDoContext } from "./providers/toDoProvider";
import ToDo from "./toDo";
import ToDoForm from "./toDoForm";
const ToDoList = (props) => {
  const { addToDo, todoOpen } = useContext(toDoContext);

  return (
    <div className={todoOpen ? "todo" : "todo-hidden"}>
      <h1>Tasks</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo />
    </div>
  );
};
export default ToDoList;
