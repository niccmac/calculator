import React, { useState, useRef, useEffect } from "react";
import { Button, TextField, Input } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");
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
    });
    setInput("");
  };
  return (
    <>
      <form className="todo-form">
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
      </form>
    </>
  );
};
export default ToDoForm;
