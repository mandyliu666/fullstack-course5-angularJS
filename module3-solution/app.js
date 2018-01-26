(function () {
	'use restrict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', foundItemsDirective);

	function foundItemsDirective () {
		var ddo = {
			templateUrl: 'foundItemsList.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: foundItemsDirectiveController,
			controllerAs: 'list',
			bindToController: true
		};
		return ddo;
	}

	function foundItemsDirectiveController () {

	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var menu = this;
		menu.searchTerm = "";
		menu.found = [];

		menu.getItems = function () {
			MenuSearchService.getMatchedMenuItems(menu.searchTerm)
	        .then(function (response) {
	            menu.found = response;
	        })
		}
		menu.removeItem = function (index) {
			menu.found.splice(index, 1); 
		}
	}

	MenuSearchService.$inject = ['ApiBasePath', '$http'];
	function MenuSearchService (ApiBasePath, $http) {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			})
			.then(function (result) {
				var found = [];
				if(searchTerm.length == 0) return found;
				var items = result.data.menu_items;
				for(var item in items) {
					if(items[item].description.indexOf(searchTerm) !== -1) {
						found.push(items[item]);						
					}
				}
				return found;
			});
		}
	}
})();