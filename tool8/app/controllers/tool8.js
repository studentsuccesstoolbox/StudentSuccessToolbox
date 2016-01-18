/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool8App').controller('tool8Controller', function ($scope, $routeParams, $modal, $filter, ngAudio, $location) {

    $scope.areasViewedT8 = areasViewedT8;

    $scope.questionnaireTool8 = tool8Questionnaire;
    $scope.addOtherValue = '';
  

    $scope.sectionWidthT8 = Math.floor((100 / (Object.keys(areasViewedT8).length))) + '%';

    $scope.currentSection = $location.path();
    

    $scope.jumpToUrlT8 = function (pathToJumpTo) {
        $location.path(pathToJumpTo);
    };


    /**
     * Resets the full questionnaire page
     * @returns {undefined}
     */
    $scope.resetQuestionnaireT8 = function () {
        
    };

    /**
     * Print function: Create Pdf to download
     */
    $scope.print = function () {
        //Pdf Dimesions: A4 (210 x 297)
        //Margin around page
        var margin = 15;
        var doc = new jsPDF();
        doc.setFont('Helvetica', '');
        doc.setTextColor(8, 167, 205);

        //Header
        doc.setFontSize(22);
        doc.text(margin, margin, 'Review Your Online Orientation Plan');

        //Brief Description
        doc.setFontSize(16);
        doc.text(margin, 25, 'Here is an overall summary of your results.');

        // add data here!...
        var text = 'Here is an overall summary of your results.';
        var lines = doc.setFontSize(12).splitTextToSize(text, (75 - margin));
        
        //Starting Y postion of Questions
        var startPostionY = 40;
        
        for (var key in tool8Questionnaire) {
            if (tool8Questionnaire.hasOwnProperty(key) && key !== 'your_online_orientation') {
                var section = tool8Questionnaire[key];
                
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
                var questionLineWidth = 7;
                for (var i = 0; i < section.questions.length; i++) {

                    var answerLines = doc.setFontSize(12).splitTextToSize(section.questions[i].question, (170 - ((margin*2)+10)));

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

                    //Question Text
                    doc.text((margin+5), startPostionY, answerLines);

                    //Answer Text
                    var answer = 'Not Answered ';
                    if(section.questions[i].selected){ 
                        answer = section.questions[i].selected.label;
                    }
                    doc.text((165), startPostionY, answer);

                    startPostionY += qh;                        

                }
                
                //User custom options
                if(section.userOptions){
                    for (var i = 0; i < section.userOptions.length; i++) {
                        var answerLines = doc.setFontSize(12).splitTextToSize(section.userOptions[i].value, (170 - ((margin*2)+10)));
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

                        //Question Text
                        doc.text((margin+5), startPostionY, answerLines);

                        //Answer Text
                        var answer = 'Yes';
                        doc.text((165), startPostionY, answer);

                        startPostionY += qh;                   
                    }
                }
   
            }
          }
          
       // Your tools section
        var section = tool8Questionnaire['your_online_orientation'];

        // Section Header
        //doc.setFontSize(22);
        //doc.setTextColor(8,167,205); //#08a7cd
        //doc.text((margin+10), startPostionY+5, section.label);
        startPostionY += 5;
        
        // Section Text
        doc.setFontSize(14);
        doc.setTextColor(8,167,205); //#08a7cd
        doc.text((margin), startPostionY+5, "Based on your chosen approaches we suggest that you will need the following tools:");
        startPostionY += 15;

        if(startPostionY > (297 - margin)){
            doc.addPage();
            startPostionY = margin;
        }

        //Section questions feedback
        doc.setTextColor(73,73,73);
        var questionLineWidth = 7;
        for (var i = 0; i < section.questions.length; i++) {

            if(section.questions[i].selected && section.questions[i].selected.value === 'yes'){
                var answerLines = doc.setFontSize(12).splitTextToSize(section.questions[i].questionSmall, (170 - ((margin*2)+10)));

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

                //Question Text
                doc.text((margin+5), startPostionY, answerLines);
                

                startPostionY += qh; 
            }

        }

        doc.save('review_your_online_orientation_plan.pdf');
    };


    $scope.audio = {
        sound1: ngAudio.load('../assets/audio/audio.mp3'),
        sound2: ngAudio.load('../assets/audio/audio.mp3'),
        sound3: ngAudio.load('../assets/audio/audio.mp3'),
        sound4: ngAudio.load('../assets/audio/audio.mp3')
    };


    //Slider Hours translate
    $scope.translate = function (value) {
        return value;
    };


    $scope.playAudio = function ($audio) {
        $.each($scope.audio, function (key, sound) {
            if (sound != $audio) {
                sound.stop();
            }
        });
        $audio.play();
    };

    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openModal = function (template, size, $event) {
        if ($event) {
            $event.preventDefault();
        }
        $modal.open({
            templateUrl: template ? 'app/views/partials/modals/' + template : 'app/views/partials/modals/errorModal.html',
            windowTemplateUrl: 'app/views/partials/modalWindow.html',
            size: size,
            controller: function ($scope, $modalInstance, iconCls) {
                $scope.iconCls = iconCls;

                $scope.ok = function () {

                    $modalInstance.close();
                };
                $scope.cancel = function (event) {
                    if (event) {
                        event.preventDefault();
                    }

                    $modalInstance.dismiss();
                };
            },
            //Used to pass in values from current scope
            resolve: {
                iconCls: function () {
                    return $scope.iconCls;
                }
            }
        });

        return false;
    };




});