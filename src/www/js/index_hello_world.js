"use strict";

import React from "react";
import ReactDOM from "react-dom";

React.DOM.h1 = (props, children) => {
	return React.createElement("h1", props, children);
};

var h1Component = React.DOM.h1(null, "Hello World!");
// var h1Component = React.createElement("h1", null, "Hello World!");

ReactDOM.render(
	h1Component,
	document.querySelector("main"));
