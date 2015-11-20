/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sharedControllers').controller('defaultController', function($scope,$modal,$location,$rootScope) {
    
    $scope.isTouchDevice = isTouchDevice();
    
    $scope.persona = ($rootScope.personas != undefined)?$rootScope.personas:{'index':0};
 
    $scope.setPersona = function(index){
        console.log(index);
        $scope.persona.index = index;
    };
        
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
    
    $scope.setLocation = function(newLocation){
        console.log('test');
        $location = newLocation;
    }
  
    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openModal = function(template,size,local) {
        var templateDir = '../shared/views/partials/modals/';
        if(local){
            templateDir = 'app/views/partials/modals/';
        }
        $modal.open({
            templateUrl: template?templateDir+template:templateDir+'errorModal.html',
            windowTemplateUrl : '../shared/views/partials/modalWindow.html',
            size: size,
            controller: function($scope, $modalInstance,iconCls){
		$scope.iconCls = iconCls;
  
                $scope.ok = function(){
                    $modalInstance.close();
                };
                $scope.cancel = function(event){
                    if(event){
                        event.preventDefault();
                    }
                    $modalInstance.dismiss();
                };
            },
            //Used to pass in values from current scope
            resolve: {
                iconCls: function(){
                        return $scope.iconCls;
                }
            }
        });
        
        return false;
    };
    
});