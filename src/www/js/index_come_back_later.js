"use strict";

import $ from "jquery";
import { createStore } from "redux";

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
	let mainElement = $("main");
	let tpl = "<input type='text'><button>Increment</button>";
	mainElement.empty().append(tpl);
	mainElement.find("input").val(store.getState().counter);
	mainElement.find("button").on("click", function() {
		store.dispatch(actionIncrement());
	});
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
