import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TodoItem from "../TodoItem/TodoItem";

// add the props (these are written in Parent Component as a function) as a argument in function
// = Destructuring Props
export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  // without if condition, the empty paper template is visible, when the localStorage is empty (not nice to see them)
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <>
              <TodoItem
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}>
                {/* id, task, completed pass props manually with todo. It can be replaced by {...todo} */}
                {/* id={todo.id}
                task={todo.task}
                completed={todo.completed}   -> {...todo} */}
                {/* all these values are object/ props, so it could be also in TodoItem destructured. */}
              </TodoItem>
              {/* Boolean Condition */}
              {idx < todos.length - 1 && <Divider />}
              {/* = {idx < todos.length - 1 ? <Divider /> : ""} */}
            </>
          ))}
        </List>
      </Paper>
    );
  // without return null; it may have Error. For
  return null;
}
