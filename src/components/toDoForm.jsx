import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const ToDoForm = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.input);
  };
  return (
    <>
      <TextField className="todo-form" onSubmit={inputHandler}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          name="text"
          className="todo-input"
        />
      </TextField>
      <Button className="todo-button" variant="outlined" type="submit">
        Add Task
      </Button>
    </>
  );
};
export default ToDoForm;
