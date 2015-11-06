/** 
 * Controller for questions page
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool3App').controller('questionsController', function($scope,$anchorScroll,$location,$modal) {
    
    //Sets scope questions
    $scope.questions = questions;
      
    //Answers to select from
    $scope.answersFrom = [
                {id:'friends',name:'Friends'}
                ,{id:'family',name:'Family'}
                ,{id:'employer',name:'Employer'}
                ,{id:'university',name:'University'}
                ,{id:'students',name:'Other Students'}
                ,{id:'others',name:'Others'}];
    
    //Answer value
    $scope.answer = {header:'',response:false};
    
    //Question selected by user
    $scope.selectedQuestion = false;
    
    //Answer select by user
    $scope.selectedAnswer = {id:false,name:''};
    
    //Function to set the answer.
    $scope.setAnswer = function(key){
        $.each($scope.answersFrom, function(){
            if(key === this.id){
               $scope.selectedAnswer = this; 
            }
        });
        //$scope.selectedAnswer = key;
    };
    
    /**
     * Watches for changes to the selectedAnswer value.
     * If change then sets the value of the answer.
     */
    $scope.$watch('selectedAnswer', function() {
        if($scope.selectedAnswer.id !== false){
            if($scope.selectedQuestion){
                $scope.answer = $scope.selectedQuestion.answers[$scope.selectedAnswer.id];
                $scope.gotoAnswer();
            }else{
                //Select a question error modal
                $scope.openModal('questionErrorModal.html');
            }
        }
    }, true);
    
    /**
     * Watches for changes to the selectedQuestion value.
     * If an answersFrom is already selected it will change the answer value
     */
    $scope.$watch('selectedQuestion', function() {
       if($scope.selectedAnswer.id !== false){
           $scope.answer = $scope.selectedQuestion.answers[$scope.selectedAnswer.id];
       }
    }, true);
    
    /**
     * Scroll to the Answer
     * @returns {undefined}
     */
    $scope.gotoAnswer = function() {

        var old = $location.hash();
        $location.hash('answer');
        $anchorScroll();
        $location.hash(old);
    };
    
    /**
     * Scroll to the options
     * @returns {undefined}
     */
    $scope.gotoOptions = function() {

        var old = $location.hash();
        $location.hash('options');
        $anchorScroll();
        $location.hash(old);
    };
    
    /**
     * Scroll to the Questions
     * Sets answer to empty object
     * @returns {undefined}
     */
    $scope.gotoQuestion = function() {
        $scope.answer = {header:'',response:false};
        var old = $location.hash();
        $location.hash('questions');
        $anchorScroll();
        $location.hash(old);
    };
    
    /**
     * Opens a default modal
     * 
     * @param {string} template name
     * @param {string} size Options are lg, sm or blank
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
});

