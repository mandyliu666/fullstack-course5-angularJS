(function () {
	'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: '/fullstack-course5-angularJS/module4-solution/itemslist.template.html',
		bindings: {
			items: '<'
		}
	})
})();