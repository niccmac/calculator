import React, { useState, useContext } from "react";
import ToDoForm from "./toDoForm";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { toDoContext } from "./providers/toDoProvider";

const ToDo = (allTasks) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const mapMe = allTasks.allTasks;
  const { deleteToDo, completeToDo } = useContext(toDoContext);

  let taskList;
  if (Array.isArray(mapMe)) {
    taskList = mapMe[0].map((task, index) => {
      return (
        <div
          // className={task[0].isComplete ? "todo-row complete" : "todo-row "}
          key={index}
        >
          <div key={task.id} onClick={() => completeToDo(task.id)}>
            {task.text}
          </div>
          <AiTwotoneEdit
            className="edit-icon"
            onClick={() => {
              setEdit({ id: task.id, value: task.value });
            }}
          />
          <AiTwotoneDelete
            className="delete-icon"
            onClick={() => {
              deleteToDo(task.id);
            }}
          />
        </div>
      );
    });
  }
  return <div>{taskList}</div>;
};
export default ToDo;
