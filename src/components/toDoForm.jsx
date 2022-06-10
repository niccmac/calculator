import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, Input } from "@mui/material";
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
    <>
      <form className="todo-form">
        {props.edit ? (
          <>
            {" "}
            <Input
              inputRef={currentRef}
              type="text"
              placeholder="Update task..."
              value={input}
              name="text"
              className="todo-input edit"
              onChange={inputHandler}
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
            <Input
              inputRef={currentRef}
              type="text"
              placeholder="Add a task..."
              value={input}
              name="text"
              className="todo-input"
              onChange={inputHandler}
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
    </>
  );
};
export default ToDoForm;
