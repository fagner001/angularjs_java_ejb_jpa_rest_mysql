angular.module('myApp',['ui.router', 'ui.bootstrap', 'ngAnimate'])
/*
	Aqui é montada a navegação por todas as telas definidas no projeto.
	Cada tela é montada como um estado.
	Cada estado é composto de uma página (html) e um controller (js)
	
	de acordo com as necessidades, um estado pode redefinir tambem o cabecalho, o rodape e o menu
*/

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProviderRef = $stateProvider; 
    $stateProvider
   
    .state('/',{
        url: '/',
        templateUrl: 'page/include/principal.html'
    })

    .state('consultarProduto',{
        url: '/consultarProduto',
        templateUrl: 'page/manterProduto/consultarProduto.html',
        controller: 'consultarProdutoController',
        params: {
        	 'idProduto': null,
        	 'mensagem': null
        }
    }) 

    .state('incluirProduto',{
        url: '/incluirProduto',
        templateUrl: 'page/manterProduto/incluirProduto.html',
        controller: 'incluirProdutoController',
        params: {
       	 'mensagem': null
       }
    }) 

    .state('alterarProduto',{
        url: '/alterarProduto',
        templateUrl: 'page/manterProduto/alterarProduto.html',
        controller: 'alterarProdutoController',
        params: {
       	 'idProduto': null,
       	 'mensagem': null
       }
    }) 

    .state('detalheProduto',{
        url: '/detalheProduto',
        templateUrl: 'page/manterProduto/detalheProduto.html',
        controller: 'detalheProdutoController',
        params: {
        	 'idProduto': null
        }
    }) 
       
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

});


