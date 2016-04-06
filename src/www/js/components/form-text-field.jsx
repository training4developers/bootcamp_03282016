"use strict";

import React from "react";

export default class extends React.Component {

	constructor(props) {
		super();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.fieldValue !== nextProps.fieldValue;
	}

	componentWillUpdate() {
		console.log("text field component will update");
	}

	render() {
		return <div>
			<label>
				{this.props.fieldLabel}:
				<input name={this.props.fieldName} value={this.props.fieldValue} onChange={this.props.fieldChange} />
			</label>
		</div>;
	}

}
