/* 
 * Controller for Free Time Page
 *
 * @author Paul Schweppe
 */

angular.module('sstTool2App').controller('freeTimeController',function($scope,$rootScope,$modal,errorModalService,calculateFreeTimeService,chartInit,$location) {

    //Activity Data Object. See /app/data/activityItems.js
    $scope.activityItems = activityItems;

    //Init Chart
    chartInit.initChart($scope);
    
    //Calculates the current free time.
    calculateFreeTimeService.calculateTime($scope);
    
    //Slider End Event: Updates the results
    $scope.$on("slideEnded", function() {
        calculateFreeTimeService.calculateTime($scope);
        $scope.$apply();
    });
    
    //Slider Hours translate
    $scope.translate = function(value){
        return value+' ';
    };
    
    //Next Button Action: Validate free time before opening interpret page
    $scope.openInterpret = function() {
        if(errorModalService.checkTimeValues($scope.totalTime)){
             $location.path('interpret'); 
        }
    };
    
    //Reset Button Action: Reset all sliders values and results 
    $scope.reset = function(){
         for(var i = 0; i < activityItems.length; i++){
             activityItems[i].modelValue = 0;
         }
         calculateFreeTimeService.calculateTime($scope);
    };
    
    //Day slider options: See /app/data/advanceItems.js
    $scope.advanceItems = advanceItems;
    
    //Modal for activities to select by day
    $scope.openDaysModal = function(index) {

        var modalInstance = $modal.open({
            templateUrl: 'app/views/partials/modals/daysSelectorModal.html',
            windowTemplateUrl : 'app/views/partials/modalWindow.html',
            controller: function($scope, $modalInstance,advanceItems,currentAcivity){
                $scope.advanceItems = advanceItems;
		$scope.currentActivity = currentAcivity;
                //Format slider hover
                $scope.formatHours = function(value){
                      return value;
                };
                //Ok Button
                $scope.ok = function(){
                    $modalInstance.close($scope.advanceItems);
                };
                //Slide end event
                $scope.$on("slideEnded", function() {
                     var totalHours = 0;
                     for(var i = 0; i < $scope.advanceItems.length; i++ ){
                         totalHours += $scope.advanceItems[i].modelValue;
                     }
                    //Update  Slider
                    activityItems[index].modelDaysValue = totalHours;
                    $scope.$apply();
                });
                //Cancel Button
                $scope.cancel = function(event){
                    if(event){
                        event.preventDefault();
                    }
                    $modalInstance.dismiss();
                };
				
                //Slider End Event: updates the results
                $scope.$on("slideEnded", function() {
                        $scope.$apply();
                });
            },
            resolve: {
                advanceItems: function() {
                    return $scope.advanceItems;
                },
                currentAcivity: function(){
                    //Reset days to Zero
                    $scope.activityItems[index].modelDaysValue = 0;
                    return $scope.activityItems[index];
                }
            }
        });
        //On modal close set value to slider
        modalInstance.result.then(function(advanceItems){
            //Calculate total hours
            var totalHours = 0;
            for(var i = 0; i < advanceItems.length; i++ ){
                 totalHours += advanceItems[i].modelValue;
            }

            //Update  Slider
            activityItems[index].modelValue = totalHours;

            //Update Results and charts
            calculateFreeTimeService.calculateTime($scope);
        });

        modalInstance.rendered.then(function(){
            console.log('test');

            setTimeout(function(){ $rootScope.$broadcast('rzSliderForceRender'); }, 3);
           //$rootScope.$broadcast('rzSliderForceRender');//Force refresh sliders on render. Otherwise bullets are aligned at left side.
        });
    };
    
    $scope.openDefinitionModal = function(index) {
        
        var modalInstance = $modal.open({
            templateUrl: 'app/views/partials/modals/definitionModal.html',
            windowTemplateUrl : 'app/views/partials/modalWindow.html',
            controller: function($scope, $modalInstance,currentAcivity){
		$scope.currentActivity = currentAcivity;
  
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
            resolve: {
                currentAcivity: function(){
                        return $scope.activityItems[index];
                }
            }
        });
    };

});


