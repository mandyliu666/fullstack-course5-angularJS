(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController (categories) {
		var ctgrs = this;

		ctgrs.categories = categories;
	}
})();