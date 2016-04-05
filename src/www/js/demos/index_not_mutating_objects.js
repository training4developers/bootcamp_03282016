"use strict";

let o = {
	fn: "Bob", ln: "Johnson", age: 45,
	address: { street: "123 Oak Lane", city: "Cloudyvale" }
};

//let p = Object.assign({}, o, { age: 46 });

var address = Object.assign({}, o.address, { city: "ValleyView" });

let p = Object.assign({}, o, { age: 46, address: address });

console.dir(p);

console.log(p === o);
