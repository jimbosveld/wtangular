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