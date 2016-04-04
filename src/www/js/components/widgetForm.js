"use strict";

import $ from "jquery";

export default class {

	constructor(parentElement, widgetActions) {
		this.parentElement = parentElement;
		this.widgetActions = widgetActions;
	}

	render() {

		var tpl = `
			<form><div>
				<label>Widget Name: <input name="widget-name" value=''></label>
			</div><button type='button'>Add Widget</button></form>
		`;

		$(this.parentElement).append(tpl);

		$(this.parentElement).find("button").on("click", () => {
			var widgetNameInput = $(this.parentElement).find("[name='widget-name']");
			this.widgetActions.insert(widgetNameInput.val());
			widgetNameInput.val("");
		});

	}


}