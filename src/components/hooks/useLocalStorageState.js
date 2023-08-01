import { useState, useEffect } from "react";

// defaultVal = when the key dosen't exist, defaultVal will shown
export default function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localstorage (or default)
  // this one would be an generic hook, not like input/ Todo/ toggle State etc(don't have to commit a initialVal)
  const [state, setState] = useState(() => {
    let val;
    // when try dosen't work,
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      // then catch returns the defaultVal, whatever the user gives
      val = defaultVal;
    }
    // but the return should be in this block
    return val;
  });

  // useful ex) darkmode/ language preferences etc.. (whenever it updates)
  // in the case of example above replace the darkmode/ language preference the key
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  // use useEffect to update localstorage when state changes
  return [state, setState];
}

// the Components, that use useLocalStorageState has to be like this:
// const [todos, setTodos] = useLocalStorageState("todos", []);
