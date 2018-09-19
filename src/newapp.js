import React from "react";
import ReactDOM from "react-dom";

const hello= React.createElement("p", {}, "hello world");
ReactDOM.render(hello, document.getElementById("hello"));
