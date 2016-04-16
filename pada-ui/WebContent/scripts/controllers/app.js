var padaApp = angular.module('padaApp', ['ngRoute','smart-table','ui.bootstrap']);

padaApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
	    .when('/', {
	        templateUrl : 'views/ingredients.html',
	        controller: 'ingredientsController'
	    })    
	    .when('/products', {
            templateUrl : 'views/products.html',
            controller: 'productsController'
        });
});

