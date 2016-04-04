import actions from "./actions";
import dispatcher from "./dispatcher";

import widgetsAction from "./actions/widgets";
import widgetsStore from "./stores/widgets";

console.dir(actions);
console.dir(dispatcher);

widgetsStore.addChangeListener(function() {
	console.log("handle action");
	console.log(widgetsStore.getAll());

});

widgetsAction.refresh();