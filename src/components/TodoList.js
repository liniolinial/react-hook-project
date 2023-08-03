import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TodoItem from "./TodoItem";
import { TodosContext } from "./context/todos.context";

export default function TodoList() {
  // passing useContext through props
  // through todos obj, included TodosContext all the methods(setterfunctions)
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <React.Fragment key={idx}>
              <TodoItem {...todo} key={todo.id} />
              {/* remove all the props, useContext replace these props */}
              {/* // removeTodo={removeTodo}
                // toggleTodo={toggleTodo}
                // editTodo={editTodo} */}
              {idx < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
