import {
	EventEmitter
} from "events";
import actions from "../actions";
import dispatcher from "../dispatcher";

const EVENT_CHANGE = "change";

let _widgets = [];

class WidgetStore extends EventEmitter {

	constructor() {
		super();
	}

	emitChange() {
		this.emit(EVENT_CHANGE);
	}

	addChangeListener(eventHandler) {
		this.on(EVENT_CHANGE, eventHandler);
	}

	removeChangeListener(eventHandler) {
		this.off(EVENT_CHANGE, eventHandler);
	}

	getAll() {
		return _widgets;
	}

}

const widgetStore = new WidgetStore();

dispatcher.register(function(action) {

	switch (action.type) {
		case actions.REFRESH_WIDGETS:
			_widgets = action.widgets;
			widgetStore.emitChange();
			break;
		default:
			// no operation
			break;
	}

});



export default widgetStore;