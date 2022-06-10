import React, { useState, useContext } from "react";
import ToDoForm from "./toDoForm";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { toDoContext } from "./providers/toDoProvider";

const ToDo = () => {
  const { deleteToDo, completeToDo, allToDo, editToDo } =
    useContext(toDoContext);
  const mapMe = allToDo;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    editToDo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

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
              setEdit({ id: task.id, value: task.text });
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
