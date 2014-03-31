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
    ]).controller('VoorWieCtrl', ['$scope',
        function($scope) {
            $scope.showTextLong = false;
            $scope.oneAtATime = true;
            $scope.cards = [{
                "title": "Corporaties",
                "text": "Weet je hoe tevreden jouw huurders zijn? Samen met Woontevreden wordt dit duidelijk.",
                "textLong":"Woontevreden biedt iedere corporatie kosteloos een rapportage aan. Hierin kun je zien hoe jouw corporatie presteert ten opzichte van andere corporaties en op de verschillende onderdelen van het onderzoek. Om toegang te krijgen tot deze rapportage vragen wij je onderstaand formulier in te vullen. Wij nemen daarna contact met je op. Door je bewoners te stimuleren deel te nemen aan het onderzoek van Woontevreden verhoog je de respons en daarmee de betrouwbaarheid van de cijfers. De eenvoudigste manier is jouw bewoners op te roepen tot het invullen van de vragenlijst. Daarnaast bieden wij woningcorporaties de mogelijkheid om hun bewoners gericht aan te schrijven. Als je hier interesse in hebt neem dan contact met ons op."

            }, {
                "title": "Commissies",
                "text": "Weet je hoe tevreden de bewoners zijn van jouw buurt? Woontevreden brengt dit voor je in kaart.",
                "textLong":"Inzicht in de resultaten van je eigen bewonerscommissie en die van vele andere bewonerscommissies maakt snel duidelijk waar de grootste verbeteringen gewenst zijn. Door een bundeling van de krachten van verschillende bewonerscommissies kun je vervolgens een gelijkwaardige dialoog voeren met jouw corporatie. Als je wil meedoen als bewonerscommissie, roep dan je bewoners op naar deze website te gaan en de vragenlijst in te vullen. Je kunt je ook als bewonerscommissie bij ons aanmelden en dan doen we samen het onderzoek. Meer weten over een samenwerking met Woontevreden? Zie de brochure Bewonerscommissies."

            }, {
                "title": "Bewoners",
                "text": "Wil jij ook jouw woonsituatie en die van je buurt verbeteren? Doe dan nu mee aan het onderzoek.",
                "textLong":"Is jouw woning goed onderhouden? Zijn er voldoende voorzieningen in de wijk? Voel je je veilig in je woonomgeving? Woontevreden doet onderzoek en gebruikt jouw antwoorden om de persoonlijke woonsituatie en de kwaliteit van de buurt te verbeteren. Dit doen wij door de resultaten op deze website te plaatsen. Zo zijn de prestaties van alle corporaties vergelijkbaar en kunnen zij gericht verbeteren. Hoe meer bewoners mee doen aan het onderzoek hoe groter het resultaat van Woontevreden. Ga daarom nu naar de vragenlijst en/of deel het onderzoek via social media."

            }, {
                "title": "Gemeenten",
                "text": "Wil je inzicht in de prestaties van de woningcorporatie in jouw gemeente? Samen met Woontevreden regel je dit.",
                "textLong":"Goede volkshuisvesting en leefbare wijken. Dat is de gezamenlijke doelstelling van gemeentes én corporaties. Inzicht in de woonsituatie van huurders van woningcorporaties is daarvoor essentieel. Woontevreden zorgt met haar onderzoek voor dit inzicht. Daarmee willen we een betere samenwerking tussen gemeentes, corporaties en bewoners faciliteren. Wij denken met Woontevreden een zinvolle bijdrage te leveren aan de transparantie, informatievoorziening en verantwoording in de corporatiesector. Als je supporter wordt, plaatst Woontevreden de naam van de gemeente op de website ter ondersteuning van het initiatief."

            }];
        }
    ]).controller('timeLineCtrl', ['$scope',
      function($scope){
        $scope.posts = [{
          "title" : "Pilot 2 van start",
          "text"  : "De inschrijving voor de tweede pilot is geopend! Schrijf je snel met je bewonerscommissie in op www.woontevreden.nl. Inschrijven kan tot en met 30 april, dus wees er snel bij! Zelf de vragenlijst invullen kan natuurlijk ook. Ga daarvoor naar www.woontevreden.nl/vragenlijst.",
          "time"  : "1 april"
        }, {
          "title" : "Nieuwe partners Woontevreden",
          "text"  : "Lorem ipsum Elit culpa consequat ullamco consectetur anim in in laborum nulla Ut consequat veniam velit sit ea eiusmod nulla reprehenderit eiusmod elit dolor est velit tempor enim laborum commodo cillum cillum in.",
          "time"  : "12 maart"
        },{
          "title" : "Pilot 1 afgerond",
          "text"  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "time"  : "31 november"
        }]
      }
    ])


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
