(function () {
	'use restrict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['MenuDataService', 'categories'];
	function CategoriesController (MenuDataService, categories) {
		var ctgrs = this;

		ctgrs.allCategories = categories.data;
	}
})();