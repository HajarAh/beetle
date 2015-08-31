
var myApp= angular.module('myApp', ['ngRoute']);

myApp.controller('mainController',['$scope','$http',
    function($scope,$http){
        $http.get('bugs.json')
        .success(function(data) {
            $scope.bugs = data;
        })
        .error(function(data) {
            alert('Erreur de téléchargement des bugs!');
        });
    }
]);

myApp.controller('singlebugController',['$scope','$http',
    function($scope,$http){
        $http.get('bugs.json')
        .success(function(data) {
            $scope.bugs = data;
        })
        .error(function(data) {
            alert('Erreur de téléchargement des bugs!');
        });
    }
]);

myApp.controller('testController',function($scope){
});

myApp.config(['$routeProvider',
    function($routeProvider) { 
        
        $routeProvider
        .when('/', {
            templateUrl: 'bugList.html',
            controller: 'mainController'
        })
        .when('/bugDetails', {
            templateUrl: 'singlebug.html',
            controller: 'singlebugController'
        })
		.otherwise({
            redirectTo: '/'
        });
    }
]);

myApp.filter('unique', function () {
    return function (items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {

                    var resolveSearch = function(object, keyString){
                        if(typeof object == 'undefined'){
                            return object;
                        }
                        var values = keyString.split(".");
                        var firstValue = values[0];
                        keyString = keyString.replace(firstValue + ".", "");
                        if(values.length > 1){
                            return resolveSearch(object[firstValue], keyString);
                        } else {
                            return object[firstValue];
                        }
                    }

                    return resolveSearch(item, filterOn);
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    if(typeof item != 'undefined'){
                        newItems.push(item);
                    }
                }

            });
            items = newItems;
        }
        return items;
    };
});