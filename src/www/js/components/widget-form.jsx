"use strict";

import React from "react";
import FormTextField from "./form-text-field.jsx";

export default class extends React.Component {

	constructor(props) {
		super();
		this.state = {
			widget: Object.assign({}, props.widget)
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.setState({
			widget: Object.assign({}, this.state.widget, { [e.target.name]: e.target.value })
		});
	}

	onClick() {
		console.dir(this.state.widget);
	}

	shouldComponentUpdate(nextProps, nextState) {
		//return true;
		return this.state.widget !== nextState.widget;
	}

	render() {

		var colors = [
			{ code: "red", caption: "Red" },
			{ code: "blue", caption: "Blue" },
			{ code: "periwinkle", caption: "Periwinkle" }
		];

		var options = [];
		for (var i=0; i<colors.length; i++) {
			options.push(<option key={colors[i].code} value={colors[i].code}>{colors[i].caption}</option>);
		}

		return <form>
			<FormTextField fieldLabel='Name' fieldName='name' fieldValue={this.state.widget.name} fieldChange={this.onChange} />
			<div>
				<label>
					Description: <textarea name="description" value={this.state.widget.description} onChange={this.onChange}></textarea>
				</label>
			</div>
			<div>
				<label>
					Color: <select name="color" value={this.state.widget.color} onChange={this.onChange}>
						<option value="">Select One...</option>
						{options}
					</select>
				</label>
			</div>
			<div>
				<label>
					Size: <select name="size" value={this.state.widget.size} onChange={this.onChange}>
						<option value="">Select One...</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					Quantity: <input type="number" name="quantity" value={this.state.widget.quantity} onChange={this.onChange} />
				</label>
			</div>
			<button type="button" onClick={this.onClick}>Save</button>
		</form>;
	}

}
