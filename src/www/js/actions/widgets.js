"use strict";

import actions from "../actions";
import dispatcher from "../dispatcher";

var widgets = ["widget 1", "widget 2", "widget 3", "widget 4"];

export default {

	refresh: function() {

		dispatcher.dispatch({
			type: actions.WIDGETS_REFRESH,
			widgets: widgets
		});

	},

	insert: function(newWidget) {

		widgets.push(newWidget);

		dispatcher.dispatch({
			type: actions.WIDGETS_REFRESH,
			widgets: widgets
		});

	}



};