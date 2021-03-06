(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/template/home.template.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: 'src/template/categories.template.html',
			controller: 'CategoriesController as ctgrController',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories()
					.then(function (response) {
						return response.data;
					});
				}]
			}
		})
		.state('items', {
			url: '/items/{category}',
			templateUrl: 'src/template/items.template.html',
			controller: 'ItemsController as itmController',
			resolve: {
				items: ['$stateParams', 'MenuDataService', 
				function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.category)
					.then(function (response) {
						return response.data.menu_items;
					});
				}]
			}
		})
	}
})();