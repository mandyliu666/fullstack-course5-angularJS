(function () {
	'use restrict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'itemslist.template.html',
		bindings: {
			items: '<'
		}
	})
})();