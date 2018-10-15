angular.module('myApp').controller('consultarProdutoController', function ($scope, $http, $state, $stateParams, config) {

    $scope.BASE_URL = config.baseUrl;
                              
        $http.get($scope.BASE_URL+'/getListaProduto').then(function (result) {
        	$scope.listaProduto = result.data['object'];
                         
            if(result.data['object'] == null || result.data['object'].length == 0){
                document.getElementById('divMensagem').innerHTML="<div  class='alert alert-success' style='width:900px;'><span><b>Não existem produtos cadastrados.</b></span></div>";
            }else{
                document.getElementById('divMensagem').innerHTML='';
            }
        });
            
      
        $scope.redirectAlterarProduto = function(id) {
            $state.go('alterarProduto', { idProduto: id });
        };

        $scope.redirectDetalheProduto = function(id) {
            $state.go('detalheProduto', { idProduto: id });
        };
       
        $scope.openModalExclusao = function(id) {
            $scope.idProdutoExclusao = id;
            $scope.exibeModalExclusao = true;
        };
       
        $scope.excluirProduto = function () {
            $http.delete($scope.BASE_URL+'/excluirProduto/' + $scope.idProdutoExclusao).then(function (result) {
                 //Exibo mensagem de sucesso            
                 document.getElementById('divMensagem').innerHTML="<div  class='alert alert-success' style='width:900px;'><span><b>Produto excluído com sucesso.</b></span></div>";
                //Removo o objeto da lista na página
                //para não ter que refazer a busca
                document.getElementById($scope.idProdutoExclusao).remove();
            });
         };
             
             
});