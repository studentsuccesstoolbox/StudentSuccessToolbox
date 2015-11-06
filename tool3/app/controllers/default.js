/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool3App').controller('defaultController', function($scope,$modal) {
    
    $scope.areasViewed = areasViewed; 
    
    $scope.resetAreasViewed = function(){
        $.each( $scope.areasViewed, function( key, value ) {
            value = false;
        });  
    };
    
    
    
    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openModal = function(template,size) {
        
        $modal.open({
            templateUrl: template?'app/views/partials/modals/'+template:'app/views/partials/modals/errorModal.html',
            windowTemplateUrl : 'app/views/partials/modalWindow.html',
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