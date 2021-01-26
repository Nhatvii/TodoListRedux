import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./Components/TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer/rootReducer";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
