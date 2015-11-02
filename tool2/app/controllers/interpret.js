/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool2App').controller('interpretController', function($scope,calculateFreeTimeService) {
    ///$scope.pageClass = pageTransition;
    
    $scope.activityItems = activityItems;

    calculateFreeTimeService.calculateTime($scope);
    
    for(var i = 0; i < interpretFeedback.length; i++){
        if($scope.freeTime >= interpretFeedback[i].greaterThen){
            $scope.interpretFeedback = interpretFeedback[i];
        }
    }
});

