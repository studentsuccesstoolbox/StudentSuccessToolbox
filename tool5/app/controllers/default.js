/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool5App').controller('tool5DefaultController', function($scope,$modal,$controller) {
    
    angular.extend(this, $controller('defaultController', {$scope: $scope}));
    
    $scope.persona = tool5Personas;
    
});