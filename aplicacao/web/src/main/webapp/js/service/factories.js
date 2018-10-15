angular.module('factories', [])

	.factory('Alert', function ($rootScope, $timeout, $uibModal, $templateCache, $controller, $http) {
	    var VERSION = '1.0.2';
	
	    var MODAL_ALERT = "./resources/modalalert.html";
	    var MODAL_CONFIRM = "./resources/modalconfirm.html";
	    var MODAL_WARNING = "./resources/modalwarning.html";
	    var MODAL_INPUT = "./resources/modalinput.html";
	
	    var windowTemplate = "template/modal/window.html";
	    var fullWindowTemplate = './resources/fullwindowTemplate.html';
	    var highPrior = false;
	
	    var modalInstance = null;
	    var promise = null;
	    function cancelPromise() {
	        if (promise) {
	            $timeout.cancel(promise);
	            promise = null;
	        }
	    }
	
	
	    return {
	        version: function() {
	            return VERSION;
	        },
	        showModal: function (template,controller,scope,keyboard,backdrop,size,resolve) {
	            var baseTemplate = windowTemplate;
	            if (!size)  baseTemplate = fullWindowTemplate;
	
	            scope.dismissDialog = function() {
	                scope.modal.dismiss();
	            }
	            scope.closeDialog = function() {
	                scope.modal.close();
	            }
	
	            scope.modal = $uibModal.open({
	                windowTemplateUrl: baseTemplate,
	                templateUrl: template,
	                controller: controller,
	                scope: scope,
	                keyboard: keyboard,
	                backdrop: backdrop,
	                size: size,
	                resolve: resolve
	            });
	
	            return scope.modal;
	        },
	        showMessage: function (title,message,force) {
	            if (highPrior) return;
	            if (force && modalInstance) {
	                modalInstance.close();
	                modalInstance = null;
	            }
	            highPrior = force;
	            if (modalInstance) return;
	
	            var scope = $rootScope.$new(true);
	
	            scope.title = title;
	            scope.message = message.split("||");
	
	            var modalInstance = this.showModal(MODAL_ALERT,null,scope,true,true,'lg');
	
	            modalInstance.result.then(function () {
	                modalInstance = null;
	                if (highPrior) highPrior = false;
	            }, function () {
	                modalInstance = null;
	                if (highPrior) highPrior = false;
	            });
	
	        },
	        showConfirm: function (title, message, confirm, deny) {
	
	            if (modalInstance) {
	                modalInstance.close();
	                modalInstance = null;
	            }
	
	            var scope = $rootScope.$new(true);
	
	            scope.title = title;
	            scope.message = message.split("||");
	
	            var modalInstance = this.showModal(MODAL_CONFIRM,null,scope,true,true,'lg');
	
	            modalInstance.result.then(function () {
	                modalInstance = null;
	                if (confirm) confirm();
	            }, function () {
	                modalInstance = null;
	                if (deny) deny();
	            });
	
	        },
	        showInput: function (title, message, defaultvalue, response) {
	
	            if (modalInstance) {
	                modalInstance.close();
	                modalInstance = null;
	            }
	
	            var scope = $rootScope.$new(true);
	
	            scope.title = title;
	            scope.message = message;
	            scope.input = {value:defaultvalue};
	
	            var modalInstance = this.showModal(MODAL_INPUT,null,scope,true,true,'lg');
	
	            modalInstance.result.then(function () {
	                modalInstance = null;
	                if (response) response(scope.input.value);
	            }, function () {
	                modalInstance = null;
	            });
	
	        },
	        showWarning: function (message, delay, timeout) {
	            if (modalInstance) return;
	            var scope = $rootScope.$new(true);
	            var alert = this;
	
	            cancelPromise();
	            promise = $timeout(function () {
	                cancelPromise();
	
	                //scope.title = title;
	                scope.message = message.split("||");
	
	                modalInstance = alert.showModal(MODAL_WARNING,null,scope,false,'static',null);
	
	                if (timeout) {
	                    promise = $timeout(function () {
	                        alert.hideWarning();
	                    }, timeout);
	                }
	            }, delay);
	        },
	        showError: function (error,Error) {
	            if (highPrior) return;
	            if (modalInstance) {
	                modalInstance.close();
	                modalInstance = null;
	            }
	            highPrior = true;
	
	            var scope = $rootScope.$new(true);
	            scope.content = {};
	
	            scope.content.commentMessage = null;
	            scope.content.copyMe = false;
	            scope.content.copyAddress = null;
	            scope.title = "Atenção - Ocorreu um erro";
	            scope.message = [error.message];
	
	            scope.successMessage = null;
	            scope.errorMessage = null;
	
	            if (error && error.error) scope.cause = error.error;
	            if ($rootScope.user) scope.content.copyAddress = $rootScope.user.name;
	            if (error.cause || error.stack) {
	                var moreDetails = "";
	                if (error.cause) moreDetails += "causa:" + error.cause;
	                if (error.stack) moreDetails += "pilha:" + error.stack;
	                scope.moreDetails = moreDetails;
	                scope.stackButton = true;
	                scope.publishButton = true;
	                scope.commentButton = true;
	            }
	
	            scope.dismissDialog = function() {
	                modalInstance.close(true);
	                modalInstance = null;
	            }
	            scope.publish = function($event) {
	
	                var comment = scope.content.commentMessage;
	                var copyMe = scope.content.copyMe;
	                var copyAddress = scope.content.copyAddress;
	
	                if (copyAddress) error.copyaddress = copyAddress;
	                if (comment) error.comment = comment;
	
	                Error.reportError(error, function(success){
	                    scope.successMessage = success;
	                    scope.$apply();
	                },function(fail){
	                    scope.errorMessage = fail;
	                    scope.$apply();
	                });
	            }
	
	            modalInstance = this.showModal(MODAL_ALERT,null,scope,true,'static','lg');
	
	            modalInstance.result.then(function () {
	                modalInstance = null;
	                highPrior = false;
	            }, function () {
	                modalInstance = null;
	                highPrior = false;
	            });
	
	        },
	        hideWarning: function () {
	            cancelPromise();
	            if (modalInstance) modalInstance.close();
	            modalInstance = null;
	        }
	    }
	});