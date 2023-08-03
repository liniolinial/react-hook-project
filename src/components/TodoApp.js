import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import { TodosProvider } from "./context/todos.context";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export default function TodoApp() {
  // this Logic moves into Context
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } =useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa",
      }}
      elevation={0}>
      <AppBar color='primary' postition='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "5rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            {/* stop passing the props in TodoForm and TodoList */}
            {/* useContext is used in TodoForm, TodoList, TodoItem, because of that I don't need to import useContext */}
            {/* <TodoForm addTodo={addTodo} />
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              /> */}
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

// useReduce: console.log for Problem Situation
// in TodoForm and EditTodoForm
