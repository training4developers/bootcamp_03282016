"use strict";

import widgetActions from "./actions/widgets";
import widgetStore from "./stores/widgets";

widgetStore.addChangeListener(function() {

	console.dir(widgetStore.getAll());

});

widgetActions.refresh();




//console.dir(actions);
//console.dir(dispatcher);