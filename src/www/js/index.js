"use strict";

import React from "react";
import ReactDOM from "react-dom";
import CounterDemo from "./components/counter.jsx";

let c = 0;

ReactDOM.render(
	React.createElement(
		CounterDemo,
		{ counter: c }),
		document.querySelector("main"));

// setInterval(function() {
// 	ReactDOM.render(
// 		React.createElement(
// 			CounterDemo,
// 			{ counter: ++c }),
// 			document.querySelector("main"));
// }, 500);
