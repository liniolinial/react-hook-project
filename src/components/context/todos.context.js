// todos
// all methods to interact w/ todos
// in this case all the TodoApp Methods are universal corresponded.
import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
import { renderIntoDocument } from "react-dom/test-utils";
const defaultTodos = [
  {
    id: 1,
    task: "Mow the lawn using goats",
    completed: false,
  },
  {
    id: 2,
    task: "Release lady bugs into garden",
    completed: true,
  },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  // syntax some.Provider
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}

// Problem of updating data passed via context:
// by editing, deleting, toggling should TodoForm not re-render
// these should be a independent thing.
// editing, deleting and toggling doesn't updating or changing the new data in this case, rather working with same data.
// It should be re-renderIntoDocument, just by adding or changinge the datas.

// Solution: useReducer! : feature3
