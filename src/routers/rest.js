"use strict";

import System from "../systemjs";
import path from "path";
import express from "express";
import {
	toCollectionName as pluralize
} from "mongoose/lib/utils";

export default function(modelName) {

	const collectionName = pluralize(modelName);
	const router = express.Router();

	return System.import(path.join(__dirname, `../mongoose/${collectionName}`)).then((DataModel) => {

		// collection uri
		router.route("/" + collectionName)
			.get(function(req, res) {
				DataModel.find({}, function(err, results) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(results);
				});
			})
			.post(function(req, res) {

				var t = new DataModel(req.body);
				t.save(function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(result);
				});
			});

		// element uri
		router.route("/" + collectionName + "/:id")
			.get(function(req, res) {
				DataModel.findById(req.params.id,
					function(err, result) {
						if (err) {
							res.status(500).json(err);
							return;
						}
						res.json(result);
					});
			})
			.put(function(req, res) {
				DataModel.findByIdAndUpdate(req.params.id,
					req.body,
					function(err) {
						if (err) {
							res.status(500).json(err);
							return;
						}
						res.json(req.body);
					});
			})
			.delete(function(req, res) {
				DataModel.findByIdAndRemove(req.params.id,
					function(err, result) {
						if (err) {
							res.status(500).json(err);
							return;
						}
						res.json(result);
					});
			});

		return router;

	});

}
