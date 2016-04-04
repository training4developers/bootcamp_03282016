"use strict";

import keyMirror from "keymirror";

const actions = keyMirror({
	WIDGETS_REFRESH: null,
	WIDGETS_INSERT: null,
	WIDGETS_UPDATE: null,
	WIDGETS_DELETE: null
});

Object.preventExtensions(actions);


export default actions;