(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'items.template.html',
		bindings: {
			items: '<'
		}
	})
})();