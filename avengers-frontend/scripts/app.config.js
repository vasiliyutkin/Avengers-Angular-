(function() {
    "use strict";

    angular.module('mainMod')
        /**********************************
                Constant REST url's
        **********************************/
        .constant('avengersUrl', 'http://localhost:5500/avengers/')
        .constant('teamUrl', 'http://localhost:5500/team/')
        .constant('favsUrl', 'http://localhost:5500/favourites/')
        .constant('ImgUrl', 'http://localhost:5500/images/')
        /**********************************
                app's route config
        **********************************/
        .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('gallery', {
                    url: '/',
                    views: {
                        'main': {
                            template: '<gallery></gallery>',
                            controller: 'moduleCtrl'
                        }
                    }

                })
                .state('squad', {
                    url: '/squad',
                    views: {
                        'main': {
                            template: '<hero-squad></hero-squad>',
                            controller: 'moduleCtrl'
                        }
                    }

                })
                .state('add', {
                    url: '/add',
                    views: {
                        'main': {
                            template: '<add-hero></add-hero>',
                            controller: 'moduleCtrl'
                        }
                    }
                })
                .state('team', {
                    url: '/team',
                    views: {
                        'main': {
                            template: '<my-team></my-team>',
                            controller: 'moduleCtrl'
                        }
                    }
                })
                .state('favs', {
                    url: '/favs',
                    views: {
                        'main': {
                            template: '<my-favourites></my-favourites>',
                            controller: 'moduleCtrl'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/');
        });


})();
