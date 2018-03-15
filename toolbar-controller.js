
'use strict';
angular.module('activitiModeler')
    .controller('ToolbarController', ['$scope', '$http', '$modal', '$q', '$rootScope', '$translate', '$location','$timeout', function ($scope, $http, $modal, $q, $rootScope, $translate, $location,$timeout) {

        fm.undo = function(){
            const services = { 
                $scope, 
                $rootScope, 
                $http, 
                $modal, 
                $q, 
                $translate
            }
            KISBPM.TOOLBAR.ACTIONS.undo(services)
        }

        /* 这个promise还可以then多次？还是说这个只是这个controller的editorFactory? */
    	$scope.editorFactory.promise.then(function () {
    		$scope.items = KISBPM.TOOLBAR_CONFIG.items;
    	});
        
        //secondaryItems是什么鬼
        $scope.secondaryItems = KISBPM.TOOLBAR_CONFIG.secondaryItems;

        //how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
        // Call configurable click handler (From http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string)
        var executeFunctionByName = function(functionName, context /*, args */) {
            //context就是window
            //至于services(scope\rootScope这些)不在函数参数列表，在arguments里面
            var args = Array.prototype.slice.call(arguments).splice(2);//services对象 (第三个参数)
            

            var namespaces = functionName.split(".");
            var func = namespaces.pop();
            for(var i = 0; i < namespaces.length; i++) {
                context = context[namespaces[i]];
            }
            return context[func].apply(this, args);
        };

        // Click handler for toolbar buttons
        $scope.toolbarButtonClicked = function(buttonIndex) {

            // Default behaviour
            var buttonClicked = $scope.items[buttonIndex];
            var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
            
            //这个services貌似没用啊
            executeFunctionByName(buttonClicked.action, window, services);

            // Other events
            var event = {
                type : KISBPM.eventBus.EVENT_TYPE_TOOLBAR_BUTTON_CLICKED,
                toolbarItem : buttonClicked
            };
            KISBPM.eventBus.dispatch(event.type, event);
        };
        
        // Click handler for secondary toolbar buttons
        $scope.toolbarSecondaryButtonClicked = function(buttonIndex) {
            var buttonClicked = $scope.secondaryItems[buttonIndex];
            var services = { '$scope' : $scope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate, '$location': $location};
            executeFunctionByName(buttonClicked.action, window, services);
        };
        
        /* Key bindings */
        Mousetrap.bind(['command+z', 'ctrl+z'], function(e) {
        	var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
        	KISBPM.TOOLBAR.ACTIONS.undo(services);
            return false;
        });
        
        Mousetrap.bind(['command+y', 'ctrl+y'], function(e) {
        	var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
        	KISBPM.TOOLBAR.ACTIONS.redo(services);
            return false;
        });
        
        Mousetrap.bind(['command+c', 'ctrl+c'], function(e) {
        	var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
        	KISBPM.TOOLBAR.ACTIONS.copy(services);
            return false;
        });
        
        Mousetrap.bind(['command+v', 'ctrl+v'], function(e) {
        	var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
        	KISBPM.TOOLBAR.ACTIONS.paste(services);
            return false;
        });
        
        Mousetrap.bind(['del'], function(e) {
        	var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal, '$q' : $q, '$translate' : $translate};
        	KISBPM.TOOLBAR.ACTIONS.deleteItem(services);
            return false;
        });

        /* Undo logic */

        $scope.undoStack = [];
        $scope.redoStack = [];


        $scope.editorFactory.promise.then(function() {

            /* my event */
            /* 
                这里是每次移动sequence flow之后要做判断，是否满足条件，所有的userTask不能超过一个outgoing，
                这里比较麻烦
            */
            /* 不知道为什么，会触发两次，而且事件对象是一模一样的*/
            window.eventObj = {};//为什么一定要用window才可以，用scope和局部变量每次都会被覆盖
            $scope.editor.registerOnEvent(ORYX.CONFIG.EVENT_DRAGDOCKER_DOCKED, function(event) {
                
                if(window.eventObj != event){
                    window.eventObj = event

                    if(event.target._stencil._jsonStencil.title == 'User task'){
                        var branchCounter=0;
                        event.target.outgoing.forEach(function(el){
                                branchCounter+=1;
                        });
                        
                        if(branchCounter>=2){
                            /* 还是运行顺序冲突的问题，EVENT_EXECUTE_COMMANDS比EVENT_DRAGDOCKER_DOCKED要后触发，所以会出现问题，当前动作还没被写进stack就执行undo了 */
                            $timeout(function() {
                                alert('审批节点分支不能大于1');
                                var services = { '$scope' : $scope, '$rootScope' : $rootScope, '$http' : $http, '$modal' : $modal};
                                KISBPM.TOOLBAR.ACTIONS.undo(services);
                            }, 100);
                        }
                    }              
                } 
                // if(event.target._stencil._jsonStencil.title == 'Exclusive gateway'){
                // }
            })



            // Catch all command that are executed and store them on the respective stacks
            $scope.editor.registerOnEvent(ORYX.CONFIG.EVENT_EXECUTE_COMMANDS, function( evt ){

                // If the event has commands
                if( !evt.commands ){ return; }
                // debugger
                $scope.undoStack.push( evt.commands );
                $scope.redoStack = [];
                
                for(var i = 0; i < $scope.items.length; i++) 
        		{
                    var item = $scope.items[i];
                    if (item.action === 'KISBPM.TOOLBAR.ACTIONS.undo')
                    {
                    	item.enabled = true;
                    }
                    else if (item.action === 'KISBPM.TOOLBAR.ACTIONS.redo')
                    {
                    	item.enabled = false;
                    }
        		}

                // Update
                $scope.editor.getCanvas().update();
                $scope.editor.updateSelection();

            });

        });
        
        // Handle enable/disable toolbar buttons 
        $scope.editorFactory.promise.then(function() {
        	$scope.editor.registerOnEvent(ORYX.CONFIG.EVENT_SELECTION_CHANGED, function( evt ){
        		var elements = evt.elements;
        		
        		for(var i = 0; i < $scope.items.length; i++) 
        		{
                    var item = $scope.items[i];
                    if (item.enabledAction && item.enabledAction === 'element')
                    {
                    	var minLength = 1;
                    	if(item.minSelectionCount) {
                    		minLength = item.minSelectionCount;
                    	}
                    	if (elements.length >= minLength && !item.enabled) {
                    		$scope.safeApply(function () {
                    			item.enabled = true;
                            });
                    	}
                    	else if (elements.length == 0 && item.enabled) {
                    		$scope.safeApply(function () {
                    			item.enabled = false;
                            });
                    	}
                    }
                }
        	});
        	
        });

    }]);