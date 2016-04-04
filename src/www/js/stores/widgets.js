"use strict";

import {
	EventEmitter
} from "events";

import actions from "../actions";
import dispatcher from "../dispatcher";

const CHANGE_EVENT = "change";

let _widgets = [];

class WidgetStore extends EventEmitter {

	constructor() {
		super();
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(changeHandler) {
		this.on(CHANGE_EVENT, changeHandler);
	}

	removeChangeListener(changeHandler) {
		this.removeListener(CHANGE_EVENT, changeHandler);
	}

	getAll() {
		return _widgets;
	}

}

const widgetStore = new WidgetStore();
export default widgetStore;

dispatcher.register(function(action) {

	switch (action.type) {
		case actions.WIDGETS_REFRESH:
			_widgets = action.widgets;
			widgetStore.emitChange();
			break;
		case actions.WIDGETS_INSERT:
			_widgets = action.widgets;
			widgetStore.emitChange();
			break;
		default:
			// no operation
			break;
	}

});