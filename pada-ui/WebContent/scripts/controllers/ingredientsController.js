padaApp.controller('ingredientsController', function ($scope,$http,$filter,$modal) {
	
	$scope.ingredientAlreadyExists = function(){
		
		return false;
		
	};
	
	$scope.save = function(){
		
		data = {'name' : $scope.newIng.name,
				'price': $scope.newIng.price,
				'quantity' : $scope.newIng.quantity,
				'brand' : $scope.newIng.brand
		};
		
		var header = {'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8'};
		$http(
				{
					method : 'POST',
					url : "http://localhost:8080/pada-server/rest/ingredients/save",
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
					$scope.displayedCollection.push(data);
					
				}).error(function(response){
					console.log("error!!!");
					console.log(response);
				});
	}
	
	$http(
			{
				method : 'GET',
				url : "http://localhost:8080/pada-server/rest/ingredients/all",
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
				$scope.ingredients = response;
				$scope.displayedCollection = [].concat($scope.ingredients);
				
			}).error(function(response){
				console.log("error!!!");
				console.log(response);
			}); 
});	