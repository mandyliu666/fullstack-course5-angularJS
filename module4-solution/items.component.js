(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: '/module4-solution/itemslist.template.html',
		bindings: {
			items: '<'
		}
	})
})();