'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$http.get('phones/phones.json').success(function (data) {
			$scope.phones = data;
			//	$scope.phones = data.splice(0, 10);
		});

		$scope.orderProp = 'age';
		$scope.name = 'arse';
	}
]);

phonecatControllers.controller('PhoneDetailCtrl', [
	'$scope',
	'$routeParams',
	function ($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
	}
]);