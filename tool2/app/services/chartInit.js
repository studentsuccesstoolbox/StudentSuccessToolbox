/**
 * Initializes the Chart. 
 * @TODO: Not sure if using a services for this is the best approach
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool2App').factory('chartInit',function(){
   var obj= {};
   
   obj.initChart = function ($scope) {
       //Sets default values for chart and slider 
        var labels = [], chartData = [], colours = [];
        for(var i=0; i < $scope.activityItems.length; i++){
            var activityItem = $scope.activityItems[i];

            labels.push(activityItem.header);
            chartData.push(activityItem.modelValue);
            colours.push('#'+activityItem.hexColor);
        }

        //Set Free time default and push onto chart data.
        $scope.freeTime = 168;
        labels.push('Free Time');
        chartData.push($scope.freeTime);
        colours.push('#FFBC59');

        //Sets scope data from Chart
        $scope.labels = labels;
        $scope.data = chartData;
        $scope.colours = colours;
   };
    
    return obj;
    
});

