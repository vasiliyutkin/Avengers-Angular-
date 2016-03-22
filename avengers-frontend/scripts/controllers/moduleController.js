(function() {
    "use strict";

    angular.module('mainMod')
        .controller('moduleCtrl', moduleCtrl);

    function moduleCtrl(avengersUrl, ImgUrl, teamUrl, favsUrl, $scope, $location, $resource) {
        $scope.imagesResource = $resource(ImgUrl + ':id', {
            id: '@id'
        });
        $scope.avengersResource = $resource(avengersUrl + ':id', {
            id: '@id'
        });
        $scope.teamResource = $resource(teamUrl + ':id', {
            id: '@id'
        });
        $scope.favsResource = $resource(favsUrl + ':id', {
            id: '@id'
        });

        /**************************************************
                    Data arrays from REST
        **************************************************/

        $scope.imagesResource.query().$promise.then(function(data) {
            $scope.imgSource = data;
        });
        $scope.avengersResource.query().$promise.then(function(data) {
            $scope.avengers = data;
        });
        $scope.teamResource.query().$promise.then(function(data) {
            $scope.team = data;
        });
        $scope.favsResource.query().$promise.then(function(data) {
            $scope.favs = data;
        });

        /******************************************************
                            App's functions section
        ******************************************************/

        $scope.resetTeam = resetTeam;
        $scope.resetFavs = resetFavs;
        $scope.addItem = addItem;
        $scope.addToSquad = addToSquad;
        $scope.addToFavorites = addToFavorites;
        $scope.deleteFromTeam = deleteFromTeam;
        $scope.deleteFromFavs = deleteFromFavs;

        /*********************************************
                        Func Declarations
        *********************************************/

        function resetTeam() {
            for (var i = 0; i < $scope.team.length; i++) {
                $scope.team[i].$delete()
                    .then(function() {
                        $scope.team = [];
                        $location.path('/');
                    })
            }
            humane.log('Your Team is Disbanded');
        };

        function resetFavs() {
            for (var i = 0; i < $scope.favs.length; i++) {
                $scope.favs[i].$delete()
                    .then(function() {
                        $scope.favs = [];
                        $location.path('/');
                    })
            }
            humane.log('Your FAVS list is empty now');
        };

        function addItem(hero) {
            for (var i = 0; i < $scope.team.length; i++) {
                if (hero.name.toLowerCase() === $scope.team[i].name.toLowerCase() && hero.nickname.toLowerCase() === $scope.team[i].nickname.toLowerCase()) {
                    humane.log('You have already ' + $scope.team[i].nickname + ' in your team, pay more attentiveness')
                    return false;
                }
            }
            new $scope.teamResource(hero).$save().then(function(newHero) {
                $scope.team.push(newHero);
                $location.path('/team')
                humane.log('You have added ' + $scope.team[i].nickname + ' in your team!')
            })
        };

        function addToSquad(index) {
            delete $scope.avengers[index].id;
            for (var i = 0; i < $scope.team.length; i++) {
                if ($scope.avengers[index].name.toLowerCase() === $scope.team[i].name.toLowerCase()) {
                    humane.log('You already have ' + $scope.team[i].nickname + ' in your squad')
                    return false;
                }
            }
            new $scope.teamResource($scope.avengers[index]).$save()
                .then(function(newHero) {
                    $scope.team.push(newHero);
                    humane.log(newHero.nickname + ' have added to your team')
                })
        };

        function addToFavorites(index) {
            delete $scope.avengers[index].id;
            for (var i = 0; i < $scope.favs.length; i++) {
                if ($scope.avengers[index].name.toLowerCase() === $scope.favs[i].name.toLowerCase()) {
                    humane.log($scope.team[i].nickname + ' already in your Favourites, check it out!')
                    return false;
                }
            }
            new $scope.favsResource($scope.avengers[index]).$save()
                .then(function(newHero) {
                    $scope.favs.push(newHero);
                    humane.log(newHero.nickname + ' have added to your Favs')
                })
        };

        function deleteFromTeam(index) {
            humane.log($scope.team[index].nickname + ' removed from Team');
            $scope.team[index].$delete()
                .then(function() {
                    $scope.team.splice(index, 1);
                    if ($scope.team.length === 0) {
                        humane.log('Your Team list is empty now');
                        $location.path('/')
                    }
                })
        };

        function deleteFromFavs(index) {
            humane.log($scope.favs[index].nickname + ' removed from Favs');
            $scope.favs[index].$delete()
                .then(function() {
                    $scope.favs.splice(index, 1);
                    if ($scope.favs.length === 0) {
                        humane.log('Your Favs list is empty now');
                        $location.path('/')
                    }
                })
        };
    };
})();
