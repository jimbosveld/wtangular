'use strict';

// PAGE CONTROLLERS //

angular.module('myApp.controllers', ['ngTable'])

.controller('stichting_ymereCtrl', [

    function() {}
])
    .controller('woningstichting_rochdaleCtrl', [

        function() {}
    ])
    .controller('woningstichting_eigen_haardCtrl', [

        function() {}
    ])
    .controller('stadgenootCtrl', [

        function() {}
    ])
    .controller('woonstichting_de_keyCtrl', [
        function() {}
    ])
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
            var ref = new Firebase("https://glaring-fire-5859.firebaseio.com/");
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

            // GEBRUIK $scope.signUp() VOOR HET AANMAKEN VAN NIEUWE ACCOUNTS

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

// RANKING CONTROLLER

function RankingCtrl($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporatiecijfers";
    $scope.gegevens = []
    $scope.HandleRanking = function(data, status) {
        $scope.gegevens = data;
        $scope.averageOverall = 0;
        for (var i = 0; i < $scope.gegevens.length; i++) {
            $scope.averageOverall += +$scope.gegevens[i].average / $scope.gegevens.length;

        };
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
            sorting: {
                corporatie: 'desc' // initial sorting
            }
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleRanking);
    }
    $scope.fetch()
}


// WOCO CONTROLLERS//

function WocoCtrlYmere($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporaties/2070/reviews";
    $scope.gegevens = [];
    $scope.HandleWocosYmere = function(data, status) {
        $scope.gegevens = data;
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleWocosYmere);
    }
    $scope.fetch()
}

function WocoCtrlRochdale($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporaties/17/reviews";
    $scope.gegevens = []
    $scope.HandleWocosRochdale = function(data, status) {
        $scope.gegevens = data;
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleWocosRochdale);
    }
    $scope.fetch()
}

function WocoCtrlKey($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporaties/2103/reviews";
    $scope.gegevens = []
    $scope.HandleWocosKey = function(data, status) {
        $scope.gegevens = data;
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleWocosKey);
    }
    $scope.fetch()
}

function WocoCtrlStadgenoot($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporaties/124/reviews";
    $scope.gegevens = []
    $scope.HandleWocosStadgenoot = function(data, status) {
        $scope.gegevens = data;
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleWocosStadgenoot);
    }
    $scope.fetch()
}

function WocoCtrlEigenHaard($scope, $http, ngTableParams, $filter) {
    $scope.url = "http://api.woontevreden.nl/data/corporaties/108/reviews";
    $scope.gegevens = []
    $scope.HandleWocosEigenHaard = function(data, status) {
        $scope.gegevens = data;
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 300,
        }, {
            total: data.length,
            getData: function($defer, params) {
                var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                params.total(orderedData.length);
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    }
    $scope.fetch = function() {
        $http.get($scope.url).success($scope.HandleWocosEigenHaard);
    }
    $scope.fetch()
}

// .controller('WocoCtrl', function($scope, wocoRepository,$filter,ngTableParams) {
//     wocoRepository.getAverages().success(function(data) {
//         $scope.data = data
//         $scope.tableParams = new ngTableParams({
//             page: 1,
//             count: 300,
//             sorting: {
//                 corporatie: 'desc' // initial sorting
//             }
//         }, {
//             total: data.length,
//             getData: function($defer, params) {
//                 var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
//                 var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
//                 params.total(orderedData.length);
//                 $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//             }
//         });
//     });
// })