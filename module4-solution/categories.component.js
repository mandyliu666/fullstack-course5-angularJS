(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: '/module4-solution/categorieslist.template.html',
		bindings: {
			categories: '<'
		}
	})
})();