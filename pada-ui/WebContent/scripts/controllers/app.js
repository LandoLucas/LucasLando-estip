var padaApp = angular.module('padaApp', ['ngRoute','smart-table','ui.bootstrap','restClient'], function($routeProvider, $locationProvider) {
 
	$routeProvider
//		.when('/', {
//        	templateUrl : '/pada-ui/index.html',
//        	controller: 'indexController'
//		})
	    .when('/ingredients', {
	        templateUrl : '/pada-ui/views/ingredients.html',
	        controller: 'ingredientsController'
	    })    
	    .when('/products', {
            templateUrl : '/pada-ui/views/products.html',
            controller: 'productsController'
        })
        .when('/clients', {
            templateUrl : '/pada-ui/views/clients.html',
            controller: 'clientController'
        })
        .otherwise( { redirectTo: '/'} );

    
//    $locationProvider.html5Mode(true);
});



