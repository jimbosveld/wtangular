'use strict';

// PAGE CONTROLLERS //

angular.module('myApp.controllers', [])

.controller('MyCtrl1', [

  function() {}
  ])
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
.controller('wocosLijst', ['$scope', function ($scope) {
  $scope.woningcorporaties = [
  {naam:"Ymere",},
  {naam:"Rochdale"}
  ]
}]);


// SEARCH MODULE & SCOPE //



// WOCO CONTROLLERS OPHALEN JSON //

function WocoCtrlYmere($scope, $http) {
  $scope.url = "https://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/stichting_ymere/data.json";
  $scope.gegevens = [];
  $scope.HandleWocosYmere = function(data, status) {
    $scope.gegevens = data;
  }
  $scope.fetch = function() {
    $http.get($scope.url).success($scope.HandleWocosYmere);
  }
  $scope.fetch();
}

function WocoCtrlRochdale($scope, $http) {
  $scope.url = "https://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/woningstichting_rochdale/data.json";
  $scope.gegevens = [];
  $scope.HandleWocosRochdale = function(data, status) {
    $scope.gegevens = data;
  }
  $scope.fetch = function() {
    $http.get($scope.url).success($scope.HandleWocosRochdale);
  }
  $scope.fetch();
}

function WocoCtrlKey($scope, $http) {
  $scope.url = "https://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/woonstichting_de_key/data.json";
  $scope.gegevens = [];
  $scope.HandleWocosRochdale = function(data, status) {
    $scope.gegevens = data;
  }
  $scope.fetch = function() {
    $http.get($scope.url).success($scope.HandleWocosRochdale);
  }
  $scope.fetch();
}

function WocoCtrlStadgenoot($scope, $http) {
  $scope.url = "https://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/stadgenoot/data.json";
  $scope.gegevens = [];
  $scope.HandleWocosRochdale = function(data, status) {
    $scope.gegevens = data;
  }
  $scope.fetch = function() {
    $http.get($scope.url).success($scope.HandleWocosRochdale);
  }
  $scope.fetch();
}

function WocoCtrlEigenHaard($scope, $http) {
  $scope.url = "https://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/woningstichting_eigen_haard/data.json";
  $scope.gegevens = [];
  $scope.HandleWocosRochdale = function(data, status) {
    $scope.gegevens = data;
  }
  $scope.fetch = function() {
    $http.get($scope.url).success($scope.HandleWocosRochdale);
  }
  $scope.fetch();
}

