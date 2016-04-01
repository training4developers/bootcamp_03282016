"use strict";

import mongoose from "mongoose";

export default mongoose.model("account", mongoose.Schema({
	acctNum: String,
	name: String,
	balance: Number,
	opened: Date,
	owner: String
}));
