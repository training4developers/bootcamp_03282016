"use strict";

import express from "express";

export default function(config) {

	let app = express();

	// http://localhost:8080/libs/jquery/dist/jquery.js

	app.use("/libs", express.static("./node_modules"));

	app.use(express.static(config.webServer.folder));

	app.listen(config.webServer.port, (err) => {

		if (err) {
			console.log(err);
			return;
		}

		console.log(`web server started on port ${config.webServer.port}`);

	});

}
