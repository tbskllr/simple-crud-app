import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Comment from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="board">
    <Comment>Hey Now</Comment>
    <Comment>Bacon</Comment>
    <Comment>Tuna</Comment>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
