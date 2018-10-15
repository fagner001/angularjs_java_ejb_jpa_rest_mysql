(function(){
        var MyHeader = function () {
          return {
            restrict: 'AE',
            templateUrl: 'page/include/header.html'
          };
        };
        angular.module('myApp')
          .directive('myHeader', MyHeader);
})(); 
