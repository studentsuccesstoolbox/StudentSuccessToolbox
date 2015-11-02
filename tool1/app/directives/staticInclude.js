/**
 * Includes a template onto page without creating a new scope.
 * Supports template markers
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool1App').directive('staticInclude', function($http, $templateCache, $compile) {
    return function(scope, element, attrs) {
        var templatePath = attrs.staticInclude;
        var markers = attrs.markers;
 
        $http.get(templatePath, { cache: $templateCache }).success(function(response) {
            if(markers){
                //Run string Replace here because angular is crap
                markers = angular.fromJson(markers)
                for(var key in markers){
                    response = response.replace( new RegExp('{{'+key+'}}', 'g'), markers[key]);
                };
            }
             var contents = element.html(response).contents();
            $compile(contents)(scope);
        });
    };
});

