import React, { useState } from "react";
import ToDoForm from "./toDoForm";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

const ToDo = (allTasks, completeToDo) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  let taskList;
  const mapMe = allTasks.allTasks;
  console.log(mapMe[0]);
  if (Array.isArray(mapMe)) {
    taskList = mapMe[0].map((task, index) => {
      console.log(task);
      return (
        <div
          // className={task[0].isComplete ? "todo-row complete" : "todo-row "}
          key={index}
        >
          <div key={task.id} onClick={() => completeToDo(task.id)}>
            {task.text}
          </div>
          <AiTwotoneEdit
          // className="edit-icon"
          // onClick={() => {
          //   editToDo(todo.id);
          // }}
          />
          <AiTwotoneDelete
          // className="delete-icon"
          // onClick={() => {
          //   setEdit({ id: task.id, value: task.value });
          // }}
          />
        </div>
      );
    });
  }
  return <div>{taskList}</div>;
};
export default ToDo;
