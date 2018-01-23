(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.itemList = ShoppingListCheckOffService.getToBuyList();
		toBuy.message = "Everything is bought!";
		toBuy.buyItem = function (item) {
			ShoppingListCheckOffService.removeItemFromBuy(item);
			ShoppingListCheckOffService.addItemToBought(item);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var alreadybought = this;
		alreadybought.itemList = ShoppingListCheckOffService.getAlreadyBoughtList();
		alreadybought.message = "Nothing bought yet.";
	}

	function ShoppingListCheckOffService () {
		var service = this;
		var toBuyList = [ { name: "cookies", quantity: "10" }, { name: "cookies", quantity: "10" } ];
		var alreadyboughtList = [];

		service.addItemToBought = function (item) {
			alreadyboughtList.push(item);
		};

		service.removeItemFromBuy = function (item) {
			var index = toBuyList.indexOf(item);
			toBuyList.splice(index, 1);
		};
		

		service.getToBuyList = function () {
			return toBuyList;
		}

		service.getAlreadyBoughtList = function () {
			return alreadyboughtList;
		}
	}

})();