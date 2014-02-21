'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/info', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/stichting_ymere', {templateUrl: 'partials/stichting_ymere.html', controller: 'stichting_ymereCtrl'});
  $routeProvider.when('/woningstichting_rochdale', {templateUrl: 'partials/woningstichting_rochdale.html', controller: 'woningstichting_rochdaleCtrl'});
  $routeProvider.when('/woningstichting_eigen_haard', {templateUrl: 'partials/woningstichting_eigen_haard.html', controller: 'woningstichting_eigen_haardCtrl'});
  $routeProvider.when('/stadgenoot', {templateUrl: 'partials/stadgenoot.html', controller: 'stadgenootCtrl'});
  $routeProvider.when('/woonstichting_de_key', {templateUrl: 'partials/woonstichting_de_key.html', controller: 'woonstichting_de_keyCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

