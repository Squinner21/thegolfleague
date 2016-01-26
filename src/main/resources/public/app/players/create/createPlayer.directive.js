(function () {

	angular.module('golfleague.players')
	.directive('createPlayer', [createPlayer]);
	
	function createPlayer() {
		return {
			controller: CreatePlayerController,
			controllerAs: 'createPlayer'
		}
	}
	
	function CreatePlayerController() {
		
	}

})();