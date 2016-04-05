"use strict";

import $ from "jquery";
import widgetActions from "./actions/widgets";
import widgetStore from "./stores/widgets";
import UnorderedList from "./components/unorderedList";
import WidgetForm from "./components/widgetForm";

$(function() {
	new UnorderedList(document.querySelector("#first-list"), widgetStore);
	new UnorderedList(document.querySelector("#second-list"), widgetStore);
	var widgetForm = new WidgetForm(document.querySelector("#widget-form"), widgetActions);
	widgetForm.render();
	widgetActions.refresh();
});

setTimeout(function() {

	console.log("calling insert...");
	widgetActions.insert("New Widget");

}, 2000);








//console.dir(actions);
//console.dir(dispatcher);