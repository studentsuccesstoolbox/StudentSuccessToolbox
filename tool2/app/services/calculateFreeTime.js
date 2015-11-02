/**
 * Calculates how much free time is remaining and
 * updates the chart values
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool2App').factory('calculateFreeTimeService',function(errorModalService){
   var obj= {};
    
    obj.calculateTime = function ($scope) {
        var totalTime = 0, newChartData=[];
        for(var i=0; i < $scope.activityItems.length; i++){
            var activityItem = $scope.activityItems[i], time = 0;
            time = activityItem.modelValue;
            totalTime += time;
            newChartData.push(time);
        }
    
        var freeTime = 168 - totalTime;
        newChartData.push(freeTime);
        
        $scope.freeTime = freeTime;
        $scope.freeTimeLimited = (freeTime > 0)?freeTime:0;
        $scope.totalTime = totalTime;
        
        errorModalService.checkTimeValues(totalTime);
        
        $scope.data = newChartData;
        //$scope.$apply();
    };
    
    return obj;
    
});

