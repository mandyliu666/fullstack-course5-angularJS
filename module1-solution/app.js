(function () {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {
  	$scope.lunch = "";
  	$scope.message = "";
  	
  	$scope.displayMessage = function () {
  		var msg = checkLunch($scope.lunch);
  		$scope.message = msg;
  	};

  	function checkLunch (string) {
  		if(string.length == 0) return "Please enter data first";
  		var menu = string.split(',');
  		if(menu.length > 3) {
  			return "Too much!"
  		} else {
  			return "Enjoy!"
  		}
  	};

  }

})();