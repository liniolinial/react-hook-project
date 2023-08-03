import React, { useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import { TodosContext } from "./context/todos.context";

export default function TodoItem({
  id,
  task,
  completed,
  // TodosContext replace these
  // removeTodo,
  // toggleTodo,
  // editTodo,
}) {
  // transfer the props, that will be used in Child Component
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  // editTodo:  without props transferring, use directly with useContext
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px", margin: "0" }}>
      {isEditing ? (
        <EditTodoForm
          // editTodo in EditTodoForm.js
          // editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
