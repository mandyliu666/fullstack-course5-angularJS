(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'categorieslist.template.html',
		bindings: {
			categories: '<'
		}
	})
})();