(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: '/fullstack-course5-angularJS/module4-solution/categorieslist.template.html',
		bindings: {
			categories: '<'
		}
	})
})();