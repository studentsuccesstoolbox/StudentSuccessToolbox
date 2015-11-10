/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool1App').controller('homeController', function($scope) {
    
    $scope.resetQuestionaire = function(){
        angular.module('sstTool1App').removeObject('QNR');
        //questionnaire = questionnaireTool1;
        
        questionnaire = $.extend(true, {}, questionnaireTool1);
        
        //Reset all answers
        /*for (var key in questionnaire) {
            if (questionnaire.hasOwnProperty(key)) {
                var section = questionnaire[key];
                for (var i = 0; i < section.questions.length; i++) {
                    section.questions[i].selected = '';
                }
            }
        }*/
        
    }
});

