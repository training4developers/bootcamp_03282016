"use strict";

import $ from "jquery";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import CounterDemo from "./components/counter.jsx";

const actionIncrement = () => {
	return { type: "INCREMENT"};
};

const actionDecrement = () => {
	return { type: "DECREMENT"};
};

const reducer = (state, action) => {

	if (typeof state === "undefined") {
		state = {
			counter: 0
		};
	}

	if (!action) {
		return state;
	}

	switch(action.type) {
		case "INCREMENT":
			return Object.assign({}, state, { counter: state.counter + 1 });
		case "DECREMENT":
			return Object.assign({}, state, { counter: state.counter - 1 });
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(render);

function render() {

	ReactDOM.render(
		React.createElement(
			CounterDemo,
			{
				counter: store.getState().counter,
				onClick: () => { store.dispatch(actionIncrement()); }
			}),
			document.querySelector("main"));
}

$(function() {
	render();
});





// function testIncrement() {
//
// 	const beginState = { counter: 1 };
// 	const afterState = { counter: 2 };
//
// 	deepFreeze(beginState);
//
// 	expect(reducer(beginState, actionIncrement()))
// 		.toEqual(afterState);
// }
//
// function testDecrement() {
//
// 	const beginState = { counter: 2 };
// 	const afterState = { counter: 1 };
//
// 	deepFreeze(beginState);
//
// 	expect(reducer(beginState, actionDecrement()))
// 		.toEqual(afterState);
// }
//
// testIncrement();
// testDecrement();
// console.log("tests passed");
