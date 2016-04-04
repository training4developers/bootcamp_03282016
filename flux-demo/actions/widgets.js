"use strict";

import actions from "../actions";
import dispatcher from "../dispatcher";

export default {
	refresh: function() {
		dispatcher.dispatch({
			type: actions.REFRESH_WIDGETS,
			widgets: ["widget 1", "widget 2", "widget 3", "widget 4"]
		});
	}
};