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
			templateUrl: 'home.template.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: 'categories.template.html',
			controller: 'CategoriesController',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('categories.items', {
			url: '/items/{categoryId}',
			templateUrl: 'items.template.html',
			controller: 'ItemsController',
			resolve: {
				items: ['$stateParams', 'MenuDataService', 
				function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryId);
				}],
				categorySelected: ['$stateParams', function($stateParams) {
					return $stateParams.categoryId;
				}]
			}
		})
	}
})();