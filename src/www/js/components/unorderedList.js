import $ from "jquery";

export default class {

	constructor(parentElement, dataStore) {
		this.parentElement = parentElement;
		this.props = {
			items: dataStore.getAll()
		};

		dataStore.addChangeListener(() => {
			this.props = {
				items: dataStore.getAll()
			};
			this.render();
		});
	}

	render() {

		if (this.ul) {
			this.ul.remove();
		}

		this.ul = $("<ul>");

		this.props.items.forEach((item) => {
			let li = $("<li>");
			li.text(item);
			this.ul.append(li);
		});

		$(this.parentElement).append(this.ul);

	}


}