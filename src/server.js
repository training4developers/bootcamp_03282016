"use strict";

import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import rest from "./routers/rest";

export default function(config) {

	mongoose.connect(`mongodb://${config.mongoServer.host}:${config.mongoServer.port}/${config.mongoServer.dbName}`);

	let restRouters = [rest("account")];

	return Promise.all(restRouters).then((accountRouter) => {

		let app = express();

		app.use("/api", bodyParser.json());
		app.use("/api", accountRouter);

		app.use("/libs", express.static("./node_modules"));
		app.use(express.static(config.webServer.folder));

		return app;

	}).then((app) => {

		return new Promise((resolve, reject) => {
			app.listen(config.webServer.port, (err) => {
				if (err) {
					reject(err);
					return;
				}
				app.config = config.webServer;
				resolve(app);
			});
		});

	})
	.then((app) => {
		console.log(`web server started on port ${app.config.port}`);
	})
	.catch((err) => {
		console.log(err);
	});

}
