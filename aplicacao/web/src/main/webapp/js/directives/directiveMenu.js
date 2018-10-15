(function(){

    var myMenu = function(){
        return{
            restrict: 'AE',
            templateUrl: 'page/include/menuLateral.html'
        }
    };
    angular.module('myApp')
        .directive('myMenu', myMenu)
})()