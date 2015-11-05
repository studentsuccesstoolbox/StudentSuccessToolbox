/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstExampleApp').controller('exampleController', function($scope,$modal) {
    
    $scope.iconCls = 'fa-exclamation'
    
    $scope.example1 = 24;
    
    $scope.example2 = 50;
    
    //Slider Hours translate
    $scope.translate = function(value){
        return value+' ';
    };
    
    /**
     * Chart config
     */
    $scope.labels = ['label 1','label 2','label 3','label 4','label 6','label 7'];
    $scope.data = [200,300,100,50,150,230];

    $scope.colours = ['#084988','#56a0e2','#4580b6','#3889d4','#296ba9','#7eb9ed'];
    $scope.radarData = [$scope.data];
    $scope.chartOptions = {scaleShowLabels : false};
    
    $scope.series = ['Series A'];
    
    $scope.chartColours= [{
        fillColor: 'rgba(249, 160, 41, 0.2)',
        strokeColor: 'rgba(8, 167, 205, 0.8)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        pointStrokeColor: "#fff",
        pointHighlightFill: 'rgba(249, 160, 41, 1.0)',
        pointHighlightStroke: "rgba(220,220,220,1)",
    }];

    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openExampleModal = function(size,errorModal) {
        $modal.open({
            templateUrl: errorModal?'app/views/partials/modals/errorModal.html':'app/views/partials/modals/exampleModal.html',
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
    };
    
});