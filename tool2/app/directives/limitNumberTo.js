/* 
 * Directive to limit the number entered into a input box.
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool2App').directive("limitNumberTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function() {
                var currentValue = elem.val();
                console.log(currentValue);
                if (angular.isNumber(currentValue)){
                    if(currentValue > limit){
                         currentValue = limit;
                    }else if (this.value < 0){
                        currentValue = 0;
                    }
                }else{
                    currentValue = 0;
                }
                                
                if( scope.onChange !== currentValue ) {
                    scope.$apply(function() {
                        scope.onChange = currentValue;
                    });
                }
                console.log(currentValue);
                //return false;
            });
        }
    }
}]);

