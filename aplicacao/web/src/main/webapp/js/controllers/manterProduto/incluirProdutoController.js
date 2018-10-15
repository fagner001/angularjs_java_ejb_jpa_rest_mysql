angular.module('myApp').controller('incluirProdutoController', function ($scope, $http, $state, $stateParams, config) {
			$scope.BASE_URL = config.baseUrl;
          
            $scope.produtoIncluir = {
                codigoBarra: '',
        	    nome: '',
        	    descricao: '',
        	    quantidade: '',
        	    categoria: ''
            };
            
            $scope.mensagem = {
                    mensagemInformacaoSalvaSucesso:"<div  class='alert alert-success' style='width:900px;'><span><b>Informações armazenadas com sucesso.</b></span></div>",
                    mensagemErroInclusao:"<div  class='alert alert-danger' style='width:900px;'><span><b>Erro na inclusão do produto.</b></span></div>"
            }; 
          
            $scope.validarInclusao = function () {
                var msg = 'O(s) Campos ';
                var validacao = true;

               if($scope.produtoIncluir.nome == ''){
                    validacao = false;    
                    msg = msg + 'Nome';
               }

               if($scope.produtoIncluir.descricao == ''){
                    if(!validacao){msg=msg+', '}    
                    msg = msg + ' Descrição';
                    validacao = false;    
                }

                if($scope.produtoIncluir.quantidade == null){
                    if(!validacao){msg=msg+', '}    
                    msg = msg + ' Quantidade';
                    validacao = false;    
                }

                if($scope.produtoIncluir.categoria == null){
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
      
            $scope.cadastrarProduto = function () {
                
                if(!$scope.validarInclusao()){
                    return;
                }

                $http.post($scope.BASE_URL+'/incluirProduto', $scope.produtoIncluir).then(function (result) {
                	//0 ==> Inclusão com sucesso
                    //-1 ==> Erro na inclusão
                 	
                     if(result.data.codigo == '0'){
                    	 limpar();
                     	document.getElementById('divMensagem').innerHTML=$scope.mensagem.mensagemInformacaoSalvaSucesso;
                     }else{
                     	document.getElementById('divMensagem').innerHTML=$scope.mensagem.mensagemErroInclusao;
                     }
               });
           };

           $scope.voltar = function () {
                 $state.go('consultarProduto');
            };
        
             limpar = function(){
            	 $scope.produtoIncluir = {
                         codigoBarra: '',
                 	     nome: '',
                 	     descricao: '',
                 	     quantidade: '',
                 	     categoria: ''
                     };
             };
});