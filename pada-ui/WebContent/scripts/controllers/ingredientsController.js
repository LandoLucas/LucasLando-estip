padaApp.controller('ingredientsController', function ($scope,$http,$filter,$modal) {
	
	//Valida que un ingrediente siendo tipeado no exista ya en la lista
	$scope.ingredientAlreadyExists = function(){
		
		if($scope.displayedCollection == null || $scope.newIng == null || $scope.newIng.name == null) return false;
		for(var i=0; i < $scope.displayedCollection.length; i++){
			if ($scope.displayedCollection[i].name.toUpperCase() === $scope.newIng.name.toUpperCase()) return true;
		}
		
		return false;
	};
	
	$scope.removeIngredient = function(row){
		console.log(row);	
	}
	
	$scope.save = function(){
		
		data = {'name' : $scope.newIng.name,
				'price': $scope.newIng.price,
				'quantity' : $scope.newIng.quantity,
				'brand' : $scope.newIng.brand,
				'unit' : $scope.newIng.unit
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
					
					$scope.newIngForm.$setPristine();
					$scope.newIng.name = "";
					$scope.newIng.price = "";
					$scope.newIng.quantity = "";
					$scope.newIng.unit = "";
					$scope.newIng.brand = "";
					
					
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
	
	$http(
			{
				method : 'GET',
				url : "http://localhost:8080/pada-server/rest/ingredients/units",
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
				$scope.units = response;
				
			}).error(function(response){
				console.log("error!!!");
				console.log(response);
			}); 
	
});	