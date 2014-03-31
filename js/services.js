'use strict';

/* Services */

angular.module('myApp.services', []).
factory('wocoRepository', function($http,$routeParams) {
    return {
        getAverages: function() {
            var url = "http://api.woontevreden.nl/data/corporatiecijfers/";
            return $http.get(url);
        }
    }
})
