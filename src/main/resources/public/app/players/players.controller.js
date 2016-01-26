(function () {

	angular.module('golfleague.players')
	.directive('players', [players]);
	
	function players() {
		return {
			controller: PlayersController,
			controllerAs: 'players'
		}
	}
	
	function PlayerController() {
		
	}

})();