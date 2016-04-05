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

		this.state = {
			counter: props.counter
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return <div>
			<h1>Counter Demo</h1>
			<span>Counter: {this.state.counter}</span>
			<button onClick={this.onClick}>Increment</button>
		</div>;
	}

}
