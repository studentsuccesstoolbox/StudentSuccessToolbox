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
    
    for(var i = 0; i < tool2InterpretFeedback.length; i++){
        if($scope.freeTime >= tool2InterpretFeedback[i].greaterThen){
            $scope.tool2InterpretFeedback = tool2InterpretFeedback[i];
        }
    }
});

