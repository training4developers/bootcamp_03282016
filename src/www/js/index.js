"use strict";

import $ from 'jquery';
import widgetActions from "./actions/widgets";
import widgetStore from "./stores/widgets";
import UnorderedList from "./components/unorderedList";

$(function() {
	var ul1 = new UnorderedList(document.querySelector("#first-list"), widgetStore);
	var ul2 = new UnorderedList(document.querySelector("#second-list"), widgetStore);
	widgetActions.refresh();
});

setTimeout(function() {

	console.log("calling insert...");
	widgetActions.insert("New Widget");

}, 2000);








//console.dir(actions);
//console.dir(dispatcher);