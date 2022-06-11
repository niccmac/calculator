import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, Input, Card } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const currentRef = useRef(null);
  useEffect(() => {
    currentRef.current.focus();
  });
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input,
      isComplete: false,
    });
    setInput("");
  };
  return (
    <Card className="todo-form">
      <form>
        {props.edit ? (
          <>
            {" "}
            <TextField
              inputRef={currentRef}
              type="text"
              placeholder="Update task..."
              value={input}
              name="text"
              className="todo-input edit"
              onChange={inputHandler}
              fullWidth
              label="Update task"
              variant="outlined"
            />
            <Button
              className="todo-button edit"
              variant="outlined"
              type="submit"
              onClick={submitHandler}
            >
              Update
            </Button>
          </>
        ) : (
          <>
            {" "}
            <TextField
              inputRef={currentRef}
              type="text"
              placeholder="Add a task..."
              value={input}
              name="text"
              className="todo-input"
              onChange={inputHandler}
              fullWidth
              label="Enter task"
              variant="outlined"
            />
            <Button
              className="todo-button"
              variant="outlined"
              type="submit"
              onClick={submitHandler}
            >
              Add Task
            </Button>
          </>
        )}
      </form>
    </Card>
  );
};
export default ToDoForm;
