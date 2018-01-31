(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('categoriesList', {
		templateUrl: 'categories.template.html',
		bindings: {
			categories: '<'
		}
	})
})();