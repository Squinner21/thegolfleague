(function () {
	'use strict';
	angular
		.module('golfleague.core')
		.directive('topNav', [topNav] );
	
	function topNav() {
		return {
			restrict: 'E',
			templateUrl: 'app/core/topNav/topNav.html',
			controller: TopNavController,
			controllerAs: 'topNav'
		};
		
		function TopNavController() {
			
		}
	}
	
})();