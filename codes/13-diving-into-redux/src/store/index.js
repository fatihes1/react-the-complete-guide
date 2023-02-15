import { createStore } from "redux";

// Create an initial state for the reducer
const initialState = { counter: 0, showCounter: true };

// Create a reducer for counter
const counterReducer = (state = initialState, action) => {
  // Handle different actions & and return new (different) state snapshot

  // NEVER MUTATE THE STATE DIRECTLY LIKE BELOW
  // state.counter++;

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.step,
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
      break;
    default:
      // If no action is matched, return the current state
      return state;
  }

  // IF CONDITIONAL STATEMENTS

  // if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1,
  //   };
  // }
  // if (action.type === "INCREASE") {
  //   return {
  //     counter: state.counter + action.step,
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1,
  //   };
  // }
  // // If no action is matched, return the current state
  // return state;
};

// Create central data store
// createStore function takes a reducer as an argument
const store = createStore(counterReducer);

// Export the store
export default store;

// After exporting the store, we can import it in the App.js or index.js file
// So we can provide the store to the Provider component
