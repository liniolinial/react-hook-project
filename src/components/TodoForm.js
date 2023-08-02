import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";

// props -> {addTodo}: props Destructuring
export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      {/* {value} */}
      {/* this value is moved now to form addTodo(). The value would be shown here simultaneously above the input form during the writing input*/}
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
