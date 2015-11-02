/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool1App').controller('interpretController', function($scope,$routeParams,navigateQuestionaireService,$location) {
    
    
    var questionnaireID = $routeParams.qId;
    $scope.questionnaire = questionnaire;

    $scope.sectionWidth = Math.floor((100 / (Object.keys(questionnaire).length + 1)))+'%';

    if(questionnaire.hasOwnProperty(questionnaireID)){
        $scope.q = questionnaire[questionnaireID];
    }
    
    $scope.currentSectionIndex = 0;
    $scope.startingQuestionIndex = 1;
    for (var key in questionnaire) {
        if (questionnaire.hasOwnProperty(key)) {
            if(key == questionnaireID){
                break;
            }
            $scope.currentSectionIndex++;
            $scope.startingQuestionIndex += questionnaire[key].questions.length;
        }
    }
    
    
    //Validate free time before opeing interpret page
    $scope.openNext = function() {
        
        var nextQuestionaireId = navigateQuestionaireService.next(questionnaireID);
        console.log(nextQuestionaireId);
        if(nextQuestionaireId){
            $location.path('questionnaire/'+nextQuestionaireId); 
        }else{
            $location.path('results'); 
        }
        
    };
    
    $scope.goBack = function() {
        $location.path('questionnaire/'+questionnaireID);
    };
    
    $scope.jumpTo = function($index){
         if($index < $scope.currentSectionIndex){
             var questionsID = navigateQuestionaireService.atIndex($index);
             $location.path('questionnaire/'+questionsID); 
         }
    };


});

