/* 
 * Controller for Results Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool1App').controller('resultsController', function($scope,navigateQuestionaireService,$location) {

    
    $scope.questionnaire = questionnaire;
    $scope.sectionWidth = Math.floor((100 / (Object.keys(questionnaire).length + 1)))+'%';
    
    //Calculate weight for each sections answer. 
    var sectionData = [], sectionLabel = [], totalWeight= 0;
    for (var key in questionnaire) {
        if (questionnaire.hasOwnProperty(key)) {
          var section = questionnaire[key];
          sectionLabel.push(section.label);
          
          var sectionWeight = 0;
          for (var i = 0; i < section.questions.length; i++) {
              sectionWeight += section.questions[i].selected.weight;
          }
          totalWeight += sectionWeight;
          sectionData.push(sectionWeight);
        }
      }

    $scope.chartlabels = sectionLabel;

    //$scope.chartData = [[5,7,9,4,3,5]]; // Debug
    $scope.chartData = [sectionData];
    
    $scope.chartColours= [{
        fillColor: 'rgba(249, 160, 41, 0.2)',
        strokeColor: 'rgba(8, 167, 205, 0.8)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)',
        pointStrokeColor: "#fff",
        pointHighlightFill: 'rgba(249, 160, 41, 1.0)',
        pointHighlightStroke: "rgba(220,220,220,1)",
    }];

    $scope.jumpTo = function($index){
         
        var questionsID = navigateQuestionaireService.atIndex($index);
        $location.path('questionnaire/'+questionsID); 

    }
    
    
    for(var i = 0; i < interpretFeedback.length; i++){
        if(totalWeight >= interpretFeedback[i].greaterThen){
            $scope.interpretFeedback = interpretFeedback[i];
        }
    }
    
    /**
     * Print function: Create Pdf to download
     */
    $scope.print = function(){
        //Pdf Dimesions: A4 (210 x 297)
        //Margin around page
        var margin = 15;
        var doc = new jsPDF();
        doc.setFont('Helvetica','');
        doc.setTextColor(8,167,205);

        //Header
        doc.setFontSize(22);
        doc.text(margin, margin, 'Am I Ready for Study?');
        
        //Brief Description
        doc.setFontSize(16);
        doc.text(margin, 25, 'Here is an overall summary of your results.');
        
        //Radar chart graph
        var imgData=document.getElementById("radar").toDataURL('image/png',1.0);
        doc.addImage(imgData, 'PNG', margin, 40, (125 - margin), 60);
        
        //Summary Response Text
        var text = $scope.interpretFeedback.narratorFeedback.replace(/(<([^>]+)>)/ig,"");
        var lines = doc.setFontSize(12).splitTextToSize(text, (75 - margin));
        
        // Summary Container
        doc.setDrawColor(232,232,232);
        doc.setFillColor(238, 238, 238);
        
        doc.roundedRect(125, 40, (85 - margin), (15+(lines.length * 6)), 3, 3, 'FD');

        // Summary Header
        doc.setFontSize(22);
        doc.setTextColor(8,167,205); //#08a7cd
        doc.text(130, 50, 'Summary');
        
        //Summary Response Text
        doc.setFontSize(12);
        doc.setTextColor(73,73,73);//#494949
        doc.text(130, (75 - margin), lines);
        
        //Starting Y postion of Questions
        var startPostionY = 170;
        
        //Questions Feedback
        for (var key in questionnaire) {
            if (questionnaire.hasOwnProperty(key)) {
                var section = questionnaire[key];
                
                // Section Header
                doc.setFontSize(22);
                doc.setTextColor(8,167,205); //#08a7cd
                doc.text((margin+10), startPostionY+5, section.label);
                startPostionY += 15;
                
                if(startPostionY > (297 - margin)){
                    doc.addPage();
                    startPostionY = margin;
                }
                
                //Section questions feedback
                doc.setTextColor(73,73,73);
                var questionLineWidth = 6;
                for (var i = 0; i < section.questions.length; i++) {
                    var answer = section.questions[i].selected.answer;
                    //var answer = section.questions[i].options[0].answer; // Debug
                    if(answer !== undefined){
                        var answerLines = doc.setFontSize(12).splitTextToSize(answer, (210 - ((margin*2)+10)));
                        console.log(answerLines);
                        var qh = (questionLineWidth * answerLines.length);
                        var nextPostionY = startPostionY +(qh);
                        if(nextPostionY > 297 - margin){
                            doc.addPage();
                            startPostionY = margin;
                            nextPostionY = startPostionY +(qh);
                        }
                        if(i % 2 == 0){
                            // Summary Container
                            doc.setDrawColor(232,232,232);
                            doc.setFillColor(238, 238, 238);
                            doc.roundedRect(margin, startPostionY -5, (210 - (margin*2)), (qh), 2, 2, 'FD');
                        }
                        
                        //Questions Answer
                        doc.text((margin+5), startPostionY, answerLines);
                        startPostionY += qh;                        

                    }
                }
   
            }
          }
          
        //Footer place
        doc.setDrawColor(232,232,232);
        doc.setFillColor(8, 167, 205);
        doc.roundedRect(15, 70, (210 - (margin*2)), (5+(lines.length)), 1, 1, 'FD');
        
        doc.save('am_I_ready_for_study.pdf');
    };
    
    


    
 
});

