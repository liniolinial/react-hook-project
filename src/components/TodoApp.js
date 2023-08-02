import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import useLocalStorageState from "./hooks/useLocalStorageState";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export default function TodoApp() {
  // instead of hardcoding id=x , task:y in obj
  // in hook > useLocalStorageState hook
  // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const initialTodos = [{ id: 1, task: "initial task", completed: false }];

  // extract out using Destructuring, all the things that I need
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

  // testing the useLocalStorageState with console.log
  const [mood, setMood] = useLocalStorageState("mood", "happy");

  // Here lists every single functions/methods that would be passed by the child component, but moved in useTodoState (Hook)

  // // without importing customState, you can also add the useState directly in current Component(Parent Component)
  // // in this case: getter function and setter function as a initial State
  // // getter function: prevent Value
  // // setter function: set/ change the Value
  // const [todos, setTodos] = useState(initialTodos);

  // // // useEffect could also in hook
  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  //   // optional Condition: update, when todos changes
  // }, [todos]);
  // // //

  // // display the input Task in TodoForm
  // const addTodo = (newTodoText) => {
  //   setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  //   // arr concatenation:
  //   // add: old values(spread syntax) + new values(arg newTodoText -> task )
  // };

  // // Delete btn
  // const removeTodo = (todoId) => {
  //   // filter out removed todo
  //   // identify with id: just clicked item should be removed
  //   const updatedTodos = todos.filter((todo) => todo.id !== todoId);
  //   // call setTodos with new todos arr: setter function: display updated removed values
  //   setTodos(updatedTodos);
  // };

  // // toggling for checkbox and line-through in TodoItem (general name used here)
  // const toggleTodo = (todoId) => {
  //   const updatedTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  //   );
  //   // call the main updateTodos function in setter function setTodos, to change the value in order
  //   setTodos(updatedTodos);
  // };

  // // Edit btn
  // // editing toggle is in useToggleSate
  // const editTodo = (todoId, newTask) => {
  //   const updatedTodos = todos.map(
  //     (todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo),
  //     // when the id equals, the prevent todo values should be shown in TodoList and the old values should be editable.
  //   );
  //   setTodos(updatedTodos);
  // };

  return (
    <div>
      <h1>Todos</h1>
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
        <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {/* TodoItem is in TodoList: (important) find the Child Component! */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
