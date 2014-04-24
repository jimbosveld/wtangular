'use strict';

/* Services */

angular.module('myApp.services', []).
    factory('wocoRepository', function($http) {
        return {
            getAverages: function() {
                var url = "http://api.woontevreden.nl/data/corporatiecijfers/";
                return $http.get(url);
            }
        }
    }).
    factory('allWocoRepository', function($http){
        return {
            getAllWocos: function(){
                var url = "http://api.woontevreden.nl/data/corporaties"
                return $http.get(url);
            }
        }
    }).
    factory('getWocoUrl', function($http){
        return {
            setUrl: function(specificUrl){
                var url = "http://api.woontevreden.nl/data/corporaties/" + specificUrl + "/reviews"
                return $http.get(url);
            }
        }

    })
