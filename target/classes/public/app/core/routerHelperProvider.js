 /**
  * This provider helps configure states across files during the run phase
  * 
  * Source: {@link https://github.com/johnpapa/angular-styleguide#routing}
  * */
 
(function() {
    'use strict';
 
    angular
        .module('golfleague.core')
        .provider('routerHelper', routerHelperProvider);
 
    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        this.$get = RouterHelper;
 
        /* @ngInject */
        function RouterHelper($state) {
            var hasOtherwise = false;
 
            return {
                configureStates: configureStates,
                getStates: getStates
            };
 
            /*--------------------*/
 
            /**
             * @param {object} states - contains properties {string} state and {object} config
             * @param {string} otherwisePath - optional parameter
             */
            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }
 
            function getStates() {
                return $state.get();
            }
        }
    }
})();