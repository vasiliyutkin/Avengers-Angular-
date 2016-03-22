(function() {
    "use strict";

    angular.module('mainMod')
        .directive('navigation', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/navigation.html'
            }
        })
        .directive('mainContent', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/main-content.html'
            }
        })
        .directive('gallery', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/start.html'
            }
        })
        .directive('heroSquad', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/squad.html'
            }
        })
        .directive('addHero', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/add.html'
            }
        })
        .directive('myTeam', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/team.html'
            }
        })
        .directive('myFavourites', function() {
            return {
                restrict: 'E',
                controller: 'moduleCtrl',
                templateUrl: '/views/favs.html'
            }
        })
})();
