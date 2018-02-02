(function () {
	'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'src/template/categorieslist.template.html',
		bindings: {
			category: '<'
		}
	});
})();