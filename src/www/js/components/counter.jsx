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
		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			counter: nextProps.counter
		});

	}

	onClick() {
		this.props.onClick();
	}

	onChange(e) {
		this.setState({
			counter: e.target.value
		});
	}

	render() {
		console.log(this.props.counter);
		return <div>
			<h1>Counter Demo!</h1>
			<span>Counter: <input type='text' value={this.state.counter} onChange={this.onChange} /></span>
			<button onClick={this.onClick}>Increment</button>
		</div>;
	}

}
