padaApp.controller('productsController', function($scope, $http, $location) {
	
	$scope.saveProduct = function(){
		
		var data = {
			name: $scope.name,
			price: $scope.price
		};
		
		var header = {'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8'};
		
		$http(
		{
			method : 'POST',
			url : "http://localhost:8080/pada-server/rest/products/save",
			data : data,
			headers: header,
			transformRequest : function(obj) {
				var str = [];
				for ( var p in obj)
					str.push(encodeURIComponent(p) + "="
							+ encodeURIComponent(obj[p]));
				return str.join("&");
			}
		}
		).success(function(response) {
			$scope.response = response;
			$scope.result = "product saved ok";
			
			$scope.findProduct();
			
		}).error(function(response){
			$scope.result = "error saving product";
			console.log("error!!!");
			console.log(response);
		});
		
	};
	
	$scope.findProduct = function(){
		
		$http(
    			{
    				method : 'GET',
    				url : "http://localhost:8080/pada-server/rest/products/product/" + 1, //ID hardocodeado para probar
    				headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8'},
    				transformRequest : function(obj) {
    					var str = [];
    					for ( var p in obj)
    						str.push(encodeURIComponent(p) + "="
    								+ encodeURIComponent(obj[p]));
    					return str.join("&");
    				}
    			}
    			).success(function(response) {
    				console.log(response);
    				
    				$scope.nameFromServer = response.name;
    				$scope.priceFromServer = response.price.amount;
    				
    			}).error(function(response){
    				console.log("error!!!");
    				console.log(response);
    			});
		
	};
	
	
});	