(function () {
	'use restrict';

	angualr.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItemsDirective);

	function foundItemsDirective () {
		var ddo = {
			scope: {
				templateUrl: 'foundItemsList.html'
				items: '<',
				onRemove: '&'
			},
			controller: 'foundItemsDirectiveController as list'
			bindToController: true
		}
		return ddo;
	}

	function foundItemsDirectiveController () {
		var items = this;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var menu = this;
		menu.found = MenuSearchService.getMatchedMenuItems(searchTerm);
		menu.removeItem = function (index) {
			menu.found.splice(index, 1); 
		}
	}

	function MenuSearchService () {
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {
			return $http(
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			)
			.then(
				function (result) {
					var foundItems = [];
					for(item in result["menu_items"]) {
						if(item["description"].indexOf(searchTerm) !== -1) {
							foundItems.push(item);
						}
					}
					return foundItems;
				}
			);
		}
	}
}();