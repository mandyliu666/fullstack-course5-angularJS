(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'categories.template.html',
		bindings: {
			categories: '<'
		}
	})
})();