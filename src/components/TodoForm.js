import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

// useContext -> we don't need props from TodoForm{addTodo} anymore due to useContext-Provider
export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  // herewith is added addTodo
  const { addTodo } = useContext(TodosContext);
  // every time will TodoForm re-rendered.
  console.log("TODO FORM RENDER!!");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}
