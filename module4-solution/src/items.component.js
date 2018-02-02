(function () {
	'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/template/itemslist.template.html',
		bindings: {
			items: '<'
		}
	});
})();