(function () {
	'use restrict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController (items) {
		var ctrlr = this;
		ctrlr.items = items;
	}
})();