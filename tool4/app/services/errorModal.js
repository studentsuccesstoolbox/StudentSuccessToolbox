/**
 * Services for validation and showing any errors in a modal. 
 * Checks that the activity time does not exceed 168.
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool4App').factory('errorModalService',function($modal){
   var obj= {};
   
   obj.checkQuestions = function (questions) {
       var allQuestionsAnwsered = true;
 
       for(var i = 0; i < questions.length; i++){
           if(questions[i].selected == ''){
               allQuestionsAnwsered = false;
           }
       }
        if(allQuestionsAnwsered === false){
            var modalInstance = $modal.open({
                  templateUrl: 'app/views/templates/error.html',
                  controller: function($scope, $modalInstance,questions){
                      $scope.questions = questions;
                      
                      $scope.ok = function(){
                          $modalInstance.close();
                      };
                      $scope.cancel = function(){
                          $modalInstance.dismiss();
                      };
                  },
                  resolve: {
                      questions: function() {
                        return questions;
                      }
                  }
              });
            return false;
        }else{
            return true;
        }
    };
    
    return obj;
    
});