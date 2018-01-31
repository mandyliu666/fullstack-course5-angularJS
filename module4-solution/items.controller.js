(function () {
	'use restrict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items', 'categorySelected'];
	function ItemsController (items, categorySelected) {
		var ctrlr = this;

		ctrlr.categorySelected = categorySelected;
		ctrlr.allItems = items.data.menu_items;
	}
})();