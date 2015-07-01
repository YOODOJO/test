'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
		{
			'name': 'Nexus S',
			'snippet': 'Fast just got faster with Nexus S.',
			'age': 2
		},
		{
			'name': 'Motorola XOOM™ with Wi-Fi',
			'snippet': 'The Next, Next Generation tablet.',
			'age': 3
		},
		{
			'name': 'MOTOROLA XOOM™',
			'snippet': 'The Next, Next Generation tablet.',
			'age': 1
		}
	];
	$scope.orderProp = 'age';

	$scope.name = 'arse';

	$scope.indices = [0,1,2,3,4,5,6,7];
});