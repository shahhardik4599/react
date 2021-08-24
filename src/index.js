var React = require("react");
var ReactDOM = require("react-dom");

const name = "Hardik";
const no = 10;

ReactDOM.render(
  <div>
    <h1>Hello {name} </h1>
    <p>Your fav number is {no}</p>
  </div>,
  document.getElementById("root")
);
