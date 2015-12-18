
angular.module('sstTool8App')
    .directive('onlineOrientation', function(){
      return {
        restrict: 'E',
        //scope: false,
        scope: { data: '=data' },
        templateUrl: 'app/views/partials/widgets/onlineOrientation.html',
        controller: function($scope) {
        {

           $scope.addOption = function(questionnaireSection){
                if($scope.addOtherValue){

                    var newOption = {value:$scope.addOtherValue};
                    questionnaireSection.userOptions.push(newOption);
                }
            };

            $scope.deleteOption = function(questionnaireSection,index){
                if(index < questionnaireSection.userOptions.length){
                    questionnaireSection.userOptions.splice(index,1);
                }
            };
        }
        /*compile: function (tElement, tAttrs) {
            // this is link function
            return function (scope) {
                scope.approaches = tAttrs.data;
            };            
        }*/
      }
    };
});


