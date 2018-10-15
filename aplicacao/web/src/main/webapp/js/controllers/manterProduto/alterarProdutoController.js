angular.module('myApp').controller('alterarProdutoController', function ($scope, $http, $state, $stateParams, config) {
			$scope.BASE_URL = config.baseUrl;
          
            $scope.produtoAlterar = {
                codigoBarra: '',
        	    nome: '',
        	    descricao: '',
        	    quantidade: '',
        	    categoria: ''
            };
            
            $scope.mensagem = {
                    mensagemInformacaoSalvaSucesso:"<div  class='alert alert-success' style='width:900px;'><span><b>Informações armazenadas com sucesso.</b></span></div>",
                    mensagemErroAlteracao:"<div  class='alert alert-danger' style='width:900px;'><span><b>Erro na alteração do produto.</b></span></div>"
            }; 
                        
            $http.get($scope.BASE_URL+'/getProdutoById/' + $stateParams.idProduto).then(function (result) {
            	$scope.produtoAlterar = result.data['object'];
               
            });
          
            $scope.validarAlteracao = function () {
                var msg = 'O(s) ';
                var validacao = true;

               if($scope.produtoAlterar.nome == ''){
                    validacao = false;    
                    msg = msg + 'Nome do produto';
               }

               if($scope.produtoAlterar.descricao == ''){
                    if(!validacao){msg=msg+', '}    
                    msg = msg + ' Descrição';
                    validacao = false;    
                }

                if($scope.produtoAlterar.quantidade == null){
                    if(!validacao){msg=msg+', '}    
                    msg = msg + ' Quantidade';
                    validacao = false;    
                }

                if($scope.produtoAlterar.categoria == null){
                    if(!validacao){msg=msg+', '}    
                    msg = msg + ' Categoria';
                    validacao = false;    
                }

                msg=msg+' é (são) de preenchimento obrigatório.';
                   if(!validacao){
                        document.getElementById('divMensagem').innerHTML="<div  class='alert alert-danger' style='width:900px;'><span><b>"+msg+"</b></span></div>";
                        return false;
                   }else{
                        return true;
                   }
             }
      
            $scope.alterarProduto = function () {
                
                if(!$scope.validarAlteracao()){
                    return;
                }

                $http.post($scope.BASE_URL+'/alterarProduto', $scope.produtoAlterar).then(function (result) {
                	//0 ==> Alteração com sucesso
                    //-1 ==> Erro na alteração
                 	
                     if(result.data.codigo == '0'){
                    	 limpar();
                     	 document.getElementById('divMensagem').innerHTML=$scope.mensagem.mensagemInformacaoSalvaSucesso;
                     }else{
                     	 document.getElementById('divMensagem').innerHTML=$scope.mensagem.mensagemErroAlteracao;
                     }
               });
           };

           $scope.voltar = function () {
                 $state.go('consultarProduto');
            };
        
             limpar = function(){
            	 $scope.produtoAlterar = {
                         codigoBarra: '',
                 	     nome: '',
                 	     descricao: '',
                 	     quantidade: '',
                 	     categoria: ''
                     };
             };
});