var padaApp = angular.module('padaApp', ['ngRoute']);


padaApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
            templateUrl : 'views/products.html',
            controller: 'productsController'
        });
});

