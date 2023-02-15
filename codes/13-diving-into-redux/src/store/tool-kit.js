import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// Create an initial state for the reducer

// Create central data store
// configureStore function takes a reducer as an object
const store = configureStore({
  // This store only must have one root reducer here
  // reducer: counterSlice.reducer /*{ counter: counterSlice.reducer },*/,

  // We can have multiple reducers
  reducer: { counter: counterReducer, auth: authReducer },
});

// Export the actions
// export const counterActions = counterSlice.actions;
// Export the store
export default store;

// After exporting the store, we can import it in the App.js or index.js file
// So we can provide the store to the Provider component
