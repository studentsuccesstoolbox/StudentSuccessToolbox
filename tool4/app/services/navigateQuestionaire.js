/**
 * Calculates how much free time is remaining and
 * updates the chart values
 * 
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool4App').factory('navigateQuestionaireService',function(){
   var obj= {};
    
    obj.next = function (currentQuestionaireId){
        var questionnaireId = false;
        var $questionsIds = Object.keys(tool4Questionnaire);
        for(var i = 0; i < $questionsIds.length; i++){
            if($questionsIds[i] === currentQuestionaireId){
                var nextIndex = i+1;
                if($questionsIds[nextIndex] != undefined){
                    questionnaireId = $questionsIds[nextIndex];
                }
            }
        }
        
        return questionnaireId;
    }
    
    obj.previous = function (currentQuestionaireId){
        var questionnaireId = false;
        var $questionsIds = Object.keys(tool4Questionnaire);
        for(var i = 0; i < $questionsIds.length; i++){
            if($questionsIds[i] === currentQuestionaireId){
                var previousIndex = i-1;
                if($questionsIds[previousIndex] !== undefined){
                    questionnaireId = $questionsIds[previousIndex];
                }
            }
        }
        
        return questionnaireId;
    }
    
    obj.atIndex = function (index){
        var questionnaireId = false;
        var $questionsIds = Object.keys(tool4Questionnaire);
        
        if(index < $questionsIds.length){
           questionnaireId = $questionsIds[index];
        }
        
        return questionnaireId;
    }
    
    return obj;
    
});



