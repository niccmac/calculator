import React, { useState, useContext } from "react";
import ToDoForm from "./toDoForm";
import {
  Chip,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
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
        <Card
          sx={{ maxWidth: 345 }}
          className={task.isComplete ? "todo-row-complete" : "todo-row "}
          key={index}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" key={task.id}>
              {task.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Chip
              icon={<AiTwotoneEdit className="edit-icon" />}
              onClick={() => {
                setEdit({ id: task.id, value: task.text });
              }}
              label="Edit"
            ></Chip>
            <Chip
              icon={<AiTwotoneDelete className="delete-icon" />}
              onClick={() => {
                deleteToDo(task.id);
              }}
              label="Delete"
            ></Chip>
            <Chip
              icon={<AiTwotoneDelete className="delete-icon" />}
              onClick={() => completeToDo(task.id)}
              label="Complete"
            ></Chip>
          </CardActions>
        </Card>
      );
    });
  }
  return <div>{taskList}</div>;
};
export default ToDo;
