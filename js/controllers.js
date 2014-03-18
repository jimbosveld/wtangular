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
    ]);


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

        //CHART.JS

        var ctx = document.getElementById("rankingCtrlChart").getContext("2d");
        var chartData = {
            labels: ["woning", "woonomgeving", "woonsituatie"],
            datasets: [{
                fillColor: "rgba(255, 107, 0, 1)",
                strokeColor: "rgba(220,220,220,1)",
                data: [$scope.gegevens[0].woning, $scope.gegevens[0].omgeving, $scope.gegevens[0].woonsituatie]
            }, {
                fillColor: "RGBA(255, 123, 28, 1)",
                strokeColor: "RGBA(253, 148, 71, 1)",
                data: [$scope.gegevens[1].woning, $scope.gegevens[1].omgeving, $scope.gegevens[1].woonsituatie]
            }, {
                fillColor: "RGBA(255, 139, 56, 1)",
                strokeColor: "RGBA(253, 148, 71, 1)",
                data: [$scope.gegevens[2].woning, $scope.gegevens[2].omgeving, $scope.gegevens[2].woonsituatie]
            }, {
                fillColor: "RGBA(255, 155, 84, 1)",
                strokeColor: "RGBA(253, 148, 71, 1)",
                data: [$scope.gegevens[3].woning, $scope.gegevens[3].omgeving, $scope.gegevens[3].woonsituatie]
            }, {
                fillColor: "RGBA(255, 187, 140, 1)",
                strokeColor: "RGBA(253, 148, 71, 0.5)",
                data: [$scope.gegevens[3].woning, $scope.gegevens[3].omgeving, $scope.gegevens[3].woonsituatie]
            }]
        }
        var options = {
            scaleOverride: false,
            scaleStartValue: 1.0,
            scaleOverlay: true,
        };
        var myNewChart = new Chart(ctx).Bar(chartData)
        new Chart(ctx).Bar(chartData, options);
    }
    //CHART.JS

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

// OVERONS CONTROLLER

function OverOnsCtrl($scope) {
    $scope.images = [{
        "thumbnail": "img/aboutPage/Jorma.png",
        "description": "Ik ben Jorma en ik hou van helikoptertjes"
    }, {
        "thumbnail": "img/aboutPage/Onno.png",
        "description": "Ik ben Onno en ik hou van campertjes"
    }, {
        "thumbnail": "img/aboutPage/Sarah.png",
        "description": "Ik ben Sarah en ik hou van bootjes"
    }, {
        "thumbnail": "img/aboutPage/Jim.png",
        "description": "Ik ben Jim en ik hou van gehaktballetjes"
    }]
}