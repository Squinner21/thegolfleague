(function () {
	'use strict';
	angular.module('golfleague.core')
	.run(appRun);
	
	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
	        {
	        	state: 'home',
	        	config: {
	        		url: '/home',
	        		templateUrl: '/app/core/home.html'
	        	}
	       
		        }];
	}

})();