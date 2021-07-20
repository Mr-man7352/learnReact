import React from "react";
import ReactDOM from "react-dom";

let name = "Manish";

let luckyNumber = Math.floor(Math.random() * 10 + 1);

ReactDOM.render(
  <div>
    <h1>Hi {name}</h1>
    <p> your {luckyNumber} </p>
    pthsiias
  </div>,
  document.getElementById("root")
);
