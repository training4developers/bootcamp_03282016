"use strict";

import React from "react";

// export default React.createClass({
//
// 	onClick: function() {
// 		console.dir(this);
// 	},
//
// 	render: function() {
// 		return <div>
// 			<h1>Counter Demo</h1>
// 			<span>Counter: {this.props.counter}</span>
// 			<button onClick={this.onClick}>Increment</button>
// 		</div>;
// 	}
//
// });

export default class extends React.Component {

	constructor(props) {
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.onClick();
	}

	render() {
		return <div>
			<h1>Counter Demo!</h1>
			<span>Counter: {this.props.counter}</span>
			<button onClick={this.onClick}>Increment</button>
		</div>;
	}

}
