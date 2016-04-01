export default {
	import: function(moduleName) {
		return new Promise(function(resolve) {
			resolve(require(moduleName).default);
		});
	}
};
