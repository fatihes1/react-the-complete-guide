const redux = require("redux");

// Always need Old State and Dispatch Action | return new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Store want to know Reducer, so it can call Reducer that update state with new snapshot
// Store also want to know Initial State or set state parameter with default value
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// We need to dispatch action to update state, trigger Reducer
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
