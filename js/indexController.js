app.controller('indexController', function($scope){
	
	$scope.products = [];

	$scope.addProduct = function(){
		
		var name = document.getElementById("nameproduto");
		var price = document.getElementById("priceproduto");

		$scope.products.push({ nome : nameproduto.value, price : priceproduto.value })
	
		nameproduto.value = "";
		priceproduto.value = "";

	}

});
