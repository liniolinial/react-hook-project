import { useState, useEffect } from "react";

import React from "react";

// defaultVal = when the key dosen't exist, defaultVal would be shown
export default function useLocalStorageState(key, defaultVal) {
    // make piece of state, based off of value in localstorage
    // this one would be an generic hook, not like input/ Todo/ toggle State etc(not commit)
const [state, setState]= useState()
    // useEffect to update localstorage when state changes
  return (

  );
}
