import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store.jsx";
import "./App.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  console.error("Element with id 'root' not found");
}
