import { useState, useEffect } from "react";

// They defined outside the hook because they are global
// We do not want to re-create them every time the component re-renders
// We do not want that every component has its own copy of these variables
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    // actionIdentifier is the action name
    // and beloved is the action function
    const newState = actions[actionIdentifier](globalState, payload);

    // Merge the new state with the old state
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  // Like useReducer
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
