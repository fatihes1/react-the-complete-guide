import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";

// import ProductsProvider from "./context/products-context";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });
//
// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

import configureStore from "./hooks-store/products-store";
configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </ProductsProvider>
);
