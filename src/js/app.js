var cf = angular.module('checkfoodApp', []);

cf.controller('menuListController', ['$scope', '$http', function($scope, $http) {
	$http.get("http://checkfood.app/api/menu")
		 .then(function(response) {
		 	$scope.menus = response.data;
		 });
}]);