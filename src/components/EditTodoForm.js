import React from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";

// props Destructuring
export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  // useInputState(initialVal) -> replaced by task
  // initially, the task will shown
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        // these are the hooks
        e.preventDefault();
        editTodo(id, value);
        reset();
        // just a parameter from EditTodoForm function
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
        autoFocus
      />
    </form>
  );
}
