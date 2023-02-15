import React from "react";
import ReactDOM from "react-dom/client";

// We have to import these to redux components
// So we can provide the store with all the App components
import { Provider } from "react-redux";

// Redux store below
// import store from "./store";

// Redux-toolkit store below
import store from "./store/tool-kit";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
