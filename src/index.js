import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

var today = new Date();
var time = today.getHours();
var string = null;

const customStyle = {
  color: ""
};

if (time > 0 && time < 12) {
  string = "Morning";
  customStyle.color = "red";
} else if (time > 12 && time < 6) {
  string = "Afternoon";
  customStyle.color = "red";
} else {
  string = "Evening";
  customStyle.color = "red";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {string}
  </h1>,
  document.getElementById("root")
);
