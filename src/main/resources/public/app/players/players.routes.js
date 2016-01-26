(function () {
	'use strict';
	angular.module('golfleague.players')
	.run(appRun);
	
	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
	        {
	        	state: 'players',
	        	config: {
	        		url: '/players',
	        		templateUrl: '/app/players/players.html'
	        	}
	        },
	        {
	        	
	        	state: 'createPlayer',
	        	config: {
	        		url: '/createPlayer',
	        		templateUrl: '/app/players/create/createPlayer.html'
	        	}
	       
		    }
	    ];
	}
})();