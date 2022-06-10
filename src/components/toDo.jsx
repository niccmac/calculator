import React, { useState, useContext } from "react";
import ToDoForm from "./toDoForm";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { toDoContext } from "./providers/toDoProvider";

const ToDo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const { deleteToDo, completeToDo, allToDo } = useContext(toDoContext);
  const mapMe = allToDo;
  console.log(allToDo);

  let taskList;
  if (Array.isArray(mapMe)) {
    taskList = mapMe.map((task, index) => {
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
