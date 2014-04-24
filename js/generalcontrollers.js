'use strict';

// PAGE CONTROLLERS //

angular.module('myApp.controllers', ['ngTable'])
    .controller('HomeCtrl', [
        function() {}
    ])
    .controller('VoorWieCtrl', ['$scope', '$http',
        function($scope, $http) {
            $scope.oneAtATime = true;
            $http.get('/json/voorwie.json').success(function(data) {
                $scope.cards = data;
            })
        }
    ])
    .controller('timeLineCtrl', ['$scope', '$firebase',
        function($scope, $firebase) {
            var ref = new Firebase("https://glaring-fire-5859.firebaseio.com");
            $scope.posts = $firebase(ref);
            $scope.addPost = function() {
                $scope.posts.$add({
                    title: $scope.newTitle,
                    text: $scope.newPost,
                    time: $scope.newTime
                })
                $scope.newTitle = "";
                $scope.newPost = "";
                $scope.newTime = "";
            }
            $scope.postRemove = function(key) {
                $scope.posts.$remove(key);
            }
        }
    ])
    .controller('AuthCtrl', [
        '$scope', '$rootScope', '$firebaseAuth',
        function($scope, $rootScope, $firebaseAuth) {
            var ref = new Firebase('https://glaring-fire-5859.firebaseio.com/');
            $rootScope.auth = $firebaseAuth(ref);
            $scope.signIn = function() {
                $rootScope.auth.$login('password', {
                    email: $scope.email,
                    password: $scope.password
                }).then(function(user) {
                    $rootScope.alert.message = '';
                }, function(error) {
                    if (error = 'INVALID_EMAIL') {
                        console.log('email invalid or not signed up');
                        $rootScope.alert.message = 'deze gegevens zijn niet bekend';
                    } else if (error = 'INVALID_PASSWORD') {
                        console.log('wrong password!');
                    } else {
                        console.log(error);
                    }
                });
            }
            $scope.signUp = function() {
                $rootScope.auth.$createUser($scope.email, $scope.password, function(error, user) {
                    if (!error) {
                        $rootScope.alert.message = '';
                    } else {
                        $rootScope.alert.class = 'danger';
                        $rootScope.alert.message = 'The username and password combination you entered is invalid.';
                    }
                });
            }
        }
    ])
    .controller('AlertCtrl', [
        '$scope', '$rootScope',
        function($scope, $rootScope) {
            $rootScope.alert = {};
        }
    ])
    .controller('OverOnsCtrl', ['$scope', '$http',
        function($scope, $http) {
            $http.get('/json/overons.json').success(function(data) {
                $scope.images = data;
            })
        }
    ])
    .controller('matchIds', function($rootScope, $scope,  allWocoRepository, getWocoUrl, wocoRepository){
        allWocoRepository.getAllWocos().success(function(data){
            $scope.gegevensAllWocos = data;
        });
        wocoRepository.getAverages().success(function(data){
            $scope.gegevensRankedWocos = data;
        })
        $scope.setId = function (corporatie){
            $scope.selectedCorporatieObject = null;
            $scope.specificUrl = null;
            $scope.specificCorporatieObject = null;
            $scope.selectedCorporatie = corporatie;
            for (var i=0;i<$scope.gegevensRankedWocos.length;i++) {
                if ($scope.gegevensRankedWocos[i].id === $scope.selectedCorporatie.id){
                    $scope.selectedCorporatieObject = $scope.gegevensRankedWocos[i];
                    $scope.selectedCorporatieObjectId = $scope.gegevensRankedWocos[i].id;
                }
                else {}
            };
            getWocoUrl.setUrl($scope.selectedCorporatieObjectId).success(function(data){
                $scope.specificCorporatieObject = data;

            });
        }
    })
