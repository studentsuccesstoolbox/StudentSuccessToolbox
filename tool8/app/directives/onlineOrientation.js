
angular.module('sstTool8App')
    .directive('onlineOrientation', function($modal){
      return {
        restrict: 'AE',
        //scope: false,
        scope: { data: '=data', tools: '=tools'},
        templateUrl: 'app/views/partials/widgets/onlineOrientation.html',
        controller: function($scope) {

           $scope.uniqueId = $scope.data.id;

           $scope.evenQuestions = ($scope.data.questions.length%2 === 0)?true:false;
           
           $scope.addOption = function(questionnaireSection){
                if($scope.addOtherValue){

                    var newOption = {value:$scope.addOtherValue};
                    questionnaireSection.userOptions.push(newOption);
                    $scope.addOtherValue = '';
                }
            };

            $scope.deleteOption = function(questionnaireSection,index){
                if(index < questionnaireSection.userOptions.length){
                    questionnaireSection.userOptions.splice(index,1);
                }
            };
            
            $scope.answer = function(question, option){
                if($scope.tools && option.value === 'yes'){
                    if($scope.toolSelected(question.toolid) === false){
                        var toolQuestions = [];
                        for(var i = 0; i < question.toolid.length; i++){
                            toolQuestions.push($scope.getToolQuestionById(question.toolid[i]));
                        }
                        
                        $.each(toolQuestions,function(key,toolQuestion){
                            toolQuestion.selected = toolQuestion.options[0];
                            toolQuestion['response'] = toolQuestion.options[0].value;
                        });
                        //$scope.openConfirmToolModal(question);
                    }
                }else if($scope.tools && option.value === 'no'){
                    if($scope.toolSelected(question.toolid) === true){
                        var toolQuestions = [];
                        for(var i = 0; i < question.toolid.length; i++){
                            toolQuestions.push($scope.getToolQuestionById(question.toolid[i]));
                        }
                         $.each(toolQuestions,function(key,toolQuestion){
                            // console.log(toolQuestion);
                            if($scope.checkifToolIsSelectedInAnyQuestion(toolQuestion) === false){
                                toolQuestion.selected = toolQuestion.options[1];
                                toolQuestion['response'] = toolQuestion.options[1].value;
                            }
                        });
                    }
                }
                question['response'] = option.value;
                question['selected'] = option;
            };
            
            /**
             * Checks if any of the questions has an answer yes for a toolid
             * Used to check if the tool should be set to "no"
             * 
             * @param object toolQuestion
             * @returns {Boolean}
             */
            $scope.checkifToolIsSelectedInAnyQuestion = function(toolQuestion){
                 for (var key in tool8Questionnaire) {
                    if (tool8Questionnaire.hasOwnProperty(key)) {
                        var section = tool8Questionnaire[key];
                        for (var i = 0; i < section.questions.length; i++) {
                            var question = section.questions[i];
                            if(question.toolid && (question.toolid.indexOf(toolQuestion.id) >= 0)){
                                if(question.selected){
                                    if(question.selected.value == 'yes'){
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
            };
    
            $scope.toolSelected = function(toolIds){
                var toolSelected = false;
                
                for(var i = 0; i < toolIds.length; i++){
                    var toolQuestion = $scope.getToolQuestionById(toolIds[i]);
                    if(toolQuestion.selected){
                        if(toolQuestion.selected.value === 'yes'){
                            toolSelected = true;
                        }
                    }
                }
 
                return toolSelected;
            };
    
            $scope.getToolQuestionById = function(toolId){
                var toolQuestion = false;
                for(var i = 0; i <$scope.tools.questions.length; i++){
                    if($scope.tools.questions[i].id === toolId){
                        toolQuestion = $scope.tools.questions[i];
                    }
                }

                return toolQuestion;
            };
            
            $scope.openConfirmToolModal = function(question) {
                
                var modalInstance = $modal.open({
                    templateUrl: 'app/views/partials/modals/confirmModal.html',
                    windowTemplateUrl : 'app/views/partials/modalWindow.html',
                    controller: function($scope, $modalInstance,currentQuestion,toolQuestions){
                        $scope.currentQuestion = currentQuestion;
                        $scope.toolQuestions = toolQuestions;
                        $scope.ok = function(){

                            $.each(toolQuestions,function(key,toolQuestion){
                                toolQuestion.selected = toolQuestion.options[0];
                                toolQuestion['response'] = toolQuestion.options[0].value;
                            });
                            $modalInstance.close();

                        };

                        $scope.cancel = function(event){
                            if(event){
                                event.preventDefault();
                            }
                            $modalInstance.dismiss();
                        };
                    },
                    resolve: {
                        currentQuestion: function(){
                                return question;
                        },
                        toolQuestions: function(){
                            var toolQuestions = [];
                            for(var i = 0; i < question.toolid.length; i++){
                                toolQuestions.push($scope.getToolQuestionById(question.toolid[i]));
                            }

                            return toolQuestions;
                        }
                    }
                });
            };

        }
    };
});


