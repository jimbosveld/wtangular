'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase',
  'ngTable',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'fitVids', 
  ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/Context', {templateUrl: 'partials/context.html', controller: 'VoorWieCtrl'});
  $routeProvider.when('/Voorwie', {templateUrl: 'partials/voorwie.html', controller: 'OverOnsCtrl'});
  $routeProvider.when('/OverOns', {templateUrl: 'partials/overons.html', controller: 'OverOnsCtrl'});
  $routeProvider.when('/Dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
  $routeProvider.when('/admin', {templateUrl: 'partials/admin.html', controller: 'AuthCtrl'});
  $routeProvider.when('/zoeken', {templateUrl: 'partials/zoeken.html', controller: 'matchIds'});
  $routeProvider.otherwise({redirectTo: '/Home'});

}]);

