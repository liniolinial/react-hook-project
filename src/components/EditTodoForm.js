import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);
  console.log("EDIT FORM RENDER!!");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
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
