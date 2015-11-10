/* 
 * Controller for Questionaire
 *
 * @author Paul Schweppe
 */

angular.module('sstTool1App').controller('questionnaireController',function($scope,$routeParams,errorModalService,$location,navigateQuestionaireService) {
    
    var questionsID = $routeParams.qId;
    $scope.questionnaire = questionnaire;
    
    $scope.sectionWidth = Math.floor((100 / (Object.keys(questionnaire).length + 1)))+'%';
    
    if(questionnaire.hasOwnProperty(questionsID)){
        $scope.q = questionnaire[questionsID];
    }  

    $scope.currentSectionIndex = 0;
    $scope.startingQuestionIndex = 1;
    for (var key in questionnaire) {
        if (questionnaire.hasOwnProperty(key)) {
            if(key == questionsID){
                break;
            }
            var section = questionnaire[key];
            $scope.startingQuestionIndex += section.questions.length;
            $scope.currentSectionIndex++;
        }
    }

    $scope.answer = function(question,option){
        question.response = option.answer;
        question.selected = option;
    };
    
    //Validate free time before opeing interpret page
    $scope.openResponse = function() {
        if(errorModalService.checkQuestions($scope.q.questions)){
            //$location.search('qId', questionsID);
             angular.module('sstTool1App').saveObject(questionnaire,'QNR');
             $location.path('interpret/'+questionsID); 
        }
    };
    
    $scope.checkQuestionsAnswered = function(questions){
        var allQuestionsAnwsered = true;
        
        for(var i = 0; i < questions.length; i++){
            if(questions[i].selected == ''){
                allQuestionsAnwsered = false;
            }
        }
        return allQuestionsAnwsered;
    }
    
    $scope.reset = function(){
        for(var i = 0; i < $scope.q.questions.length; i++){
            $scope.q.questions[i].response  = '';
            $scope.q.questions[i].selected  = '';
        }
        angular.module('sstTool1App').saveObject(questionnaire,'QNR');
    };
    
    $scope.jumpTo = function($index){
         if($index < $scope.currentSectionIndex){
             var questionsID = navigateQuestionaireService.atIndex($index);
             $location.path('questionnaire/'+questionsID); 
         }
    }
    
    

});


