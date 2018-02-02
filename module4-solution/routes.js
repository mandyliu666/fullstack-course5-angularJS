(function () {
	'use restrict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/fullstack-course5-angularJS/module4-solution/home.template.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: '/fullstack-course5-angularJS/module4-solution/categories.template.html',
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
		.state('categories.items', {
			url: '/items/{categoryId}',
			templateUrl: '/fullstack-course5-angularJS/module4-solution/items.template.html',
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