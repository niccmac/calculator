import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: uuidv4(),
    //   text: input,
    // });
    setInput("");
  };
  return (
    <>
      <form className="todo-form">
        <TextField
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
