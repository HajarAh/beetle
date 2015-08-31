
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

myApp.controller('registerController',function($scope){
});

myApp.controller('loginController',function($scope){
});

myApp.controller('reportController',function($scope){
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
        .when('/registerForm', {
            templateUrl: 'registerForm.html',
            controller: 'registerController'
        })
        .when('/loginForm', {
            templateUrl: 'loginForm.html',
            controller: 'loginController'
        })
        .when('/reportBug', {
            templateUrl: 'reportBug.html',
            controller: 'reportController'
        })
		.otherwise({
            redirectTo: '/'
        });
    }
]);

myApp.filter('uniqueProduct', function () {

return function(items){

    var _items=[];
    if(!items) return _items;

    for (var i = 0;i< items.length; i++) {
        if(_items.indexOf(items[i].product)==-1){

            _items.push(items[i].product);
        }
    };
    return _items;
}

});
myApp.filter('uniqueStatus', function () {

return function(items){

    var _items=[];
    if(!items) return _items;

    for (var i = 0;i< items.length; i++) {
        if(_items.indexOf(items[i].status)==-1){

            _items.push(items[i].status);
        }
    };
    return _items;
}

});
myApp.filter('uniqueVersion', function () {

return function(items){

    var _items=[];
    if(!items) return _items;

    for (var i = 0;i< items.length; i++) {
        if(_items.indexOf(items[i].version)==-1){

            _items.push(items[i].version);
        }
    };
    return _items;
}

});
myApp.filter('uniqueForecast', function () {

return function(items){

    var _items=[];
    if(!items) return _items;

    for (var i = 0;i< items.length; i++) {
        if(_items.indexOf(items[i].forecast)==-1){

            _items.push(items[i].forecast);
        }
    };
    return _items;
}

});
