/* 
 * Controller for Questionaire
 *
 * @author Paul Schweppe
 */

angular.module('sstTool4App').controller('questionnaireController',function($scope,$routeParams,$location,$modal,navigateQuestionaireService) {
    
    //Gets the section id from the url
    var questionsID = $routeParams.qId;
    
    //Sets questionnaire to scope
    $scope.questionnaire = tool4Questionnaire;
    
    // Sets the current questionnaire section
    if(tool4Questionnaire.hasOwnProperty(questionsID)){
        $scope.q = tool4Questionnaire[questionsID];
    }  

    // Sets variables for section and question indexes.
    // Can be used for menus and navigation and display
    $scope.currentSectionIndex = 0;
    $scope.startingQuestionIndex = 1;
    var previousQuestions = false;
    
    for (var key in tool4Questionnaire) {
        if (tool4Questionnaire.hasOwnProperty(key)) {
            if(key == questionsID){
                break;
            }
            var section = tool4Questionnaire[key];
            $scope.startingQuestionIndex += section.questions.length;
            $scope.currentSectionIndex++;
            previousQuestions = tool4Questionnaire[key];
        }
    }
    
    /**
     * Function for question answer click event.
     * Sets the select answer for a question.
     * 
     * @param object question
     * @param object option
     */
    $scope.answer = function(question,option){
        question.response = option.answer;
        question.selected = option;
    };
    
    /**
     * Opens the next page. Depending on section you are in and the 
     * answers you select you will be redirect to a different page
     * Rules:
     *      - user answers ‘No’ on any question in section 1 "Basic Computer Skills" they 
     *        redirect to "Do I need Further Help" page.
     *      - User answers 7 or more  ‘Yes’ on "Word Processing Skills" and 6 or more ‘Yes’ on 
     *        Using the "Internet and Email" they redirect to "College supports 
     *        available to you" page. 
     *        
     * @returns {undefined}
     */
    $scope.openNext = function() {
       
        var questionsIDs = Object.keys(tool4Questionnaire);
        
        var sectionData = $scope.calculateWeight();
         
        if(questionsID == questionsIDs[0]){
            //Section 1
            if(sectionData[0] < 3){
                $location.path('further-help'); 
                return;
            }
        }else if(questionsID == questionsIDs[2]){
            //Section 3
            if(sectionData[1] >= 7 && sectionData[2] >= 6){
                $location.path('college-supports-available-to-you');
                return;
            }
        }
        
        var nextQuestionaireId = navigateQuestionaireService.next(questionsID);
        if(nextQuestionaireId){
            //Section 1 or 2
            $location.path('check-your-computer-skills/'+nextQuestionaireId); 
        }else{
            $location.path('further-help'); 
        }
        
    };
    
    /**
     * Opens the previous page. The previous page is either the 
     * previous questionnaire section or "check-your-computer-skills"
     * start page.
     * 
     * @returns {undefined}
     */
    $scope.back = function() {
         var previousQuestionaireId = navigateQuestionaireService.previous(questionsID);
         if(previousQuestionaireId){
            $location.path('check-your-computer-skills/'+previousQuestionaireId); 
        }else{
            $location.path('check-your-computer-skills'); 
        }
    }
    
    /**
     * Checks if all the questions in a section has been answered.
     * 
     * @param array of question objects
     * @returns {Boolean}
     */
    $scope.checkQuestionsAnswered = function(questions){
        var allQuestionsAnwsered = true;
        for(var i = 0; i < questions.length; i++){
            if(questions[i].selected == ''){
                allQuestionsAnwsered = false;
            }
        }
        return allQuestionsAnwsered;
    };
    
    /**
     * Resets the full questionnaire page
     * @returns {undefined}
     */
    $scope.reset = function(){
        for(var i = 0; i < $scope.q.questions.length; i++){
            $scope.q.questions[i].response  = '';
            $scope.q.questions[i].selected  = '';
        }
    };
    
    /**
     * Jumps to a particular questionnaire page
     * @param {type} $index
     * @returns {undefined}
     */
    $scope.jumpTo = function($index){
         if($index < $scope.currentSectionIndex){
             var questionsID = navigateQuestionaireService.atIndex($index);
             $location.path('check-your-computer-skills/'+questionsID); 
         }
    };
    
    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openModal = function(template,size) {
        
        $modal.open({
            templateUrl: template?'app/views/partials/modals/'+template:'app/views/partials/modals/errorModal.html',
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
        
        return false;
    };
    
    /**
     * Calculates the weight for each section
     * Example of results: [3,5,8]
     * 
     * @returns {Array}
     */
    $scope.calculateWeight = function(){
        var sectionData = [];
        for (var key in tool4Questionnaire) {
            if (tool4Questionnaire.hasOwnProperty(key)) {
              var section = tool4Questionnaire[key];

              var sectionWeight = 0;
              for (var i = 0; i < section.questions.length; i++) {
                  sectionWeight += section.questions[i].selected.weight;
              }
 
              sectionData.push(sectionWeight);
            }
          }
          return sectionData;
    };
    
    /**
     * If the previous section questions have not been answered jump back to start
     * Cause: refreshing the page will clear options select so need to redirect back
     * to start of questionnaire
     */
    if((previousQuestions != false) && ($scope.checkQuestionsAnswered(previousQuestions.questions) == false)){
       var firstQuestionsID = Object.keys(tool4Questionnaire)[0];
       $location.path('check-your-computer-skills/'+firstQuestionsID); 
    }

});


