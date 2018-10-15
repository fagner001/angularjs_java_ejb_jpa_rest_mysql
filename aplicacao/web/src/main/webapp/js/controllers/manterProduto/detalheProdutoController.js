angular.module('myApp').controller('detalheProdutoController', function ($scope, $http, $state, $stateParams, config) {
			$scope.BASE_URL = config.baseUrl;
            
            $scope.produtoDetalhe = {};
         
            $http.get($scope.BASE_URL+'/getProdutoById/' + $stateParams.idProduto).then(function (result) {
            	$scope.produtoDetalhe = result.data['object'];
               
            });

            $scope.voltar = function () {
                $state.go('consultarProduto');
            };
});

