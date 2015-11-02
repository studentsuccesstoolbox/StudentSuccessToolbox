/**
 * Services for validation and showing any errors in a modal. 
 * Checks that the activity time does not exceed 168.
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool2App').factory('errorModalService',function($modal){
   var obj= {};
   
   obj.checkTimeValues = function (totalTime) {
        if(totalTime > 168){
            var modalInstance = $modal.open({
                  templateUrl: 'app/views/partials/modals/errorModal.html',
                  controller: function($scope, $modalInstance,totalTime){
                      $scope.totalTime = totalTime;
                      //$scope.interpretFeedback = interpretFeedback[0];
                      $scope.ok = function(){
                          $modalInstance.close();
                      };
                      $scope.cancel = function(){
                          $modalInstance.dismiss();
                      };
                  },
                  resolve: {
                      totalTime: function() {
                        return totalTime;
                      }
                  }
              });
            return false;
        }else{
            return true;
        }
    };
    
    return obj;
    
});