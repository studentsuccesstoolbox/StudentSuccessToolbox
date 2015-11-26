/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool8App').controller('defaultController', function ($scope, $routeParams,$modal, ngAudio, $location) {

    $scope.areasViewedT8 = areasViewedT8;

    $scope.resetAreasViewedT8 = function () {
        //// ALFR :: rewite this!
        ////$.each( areasViewedT8, function( key, value ) {
        ////    areasViewedT8[key] = false;
        ////});  
    };

    $scope.q_your_online_orientation = tool8Questionnaire['your-online-orientation'];
    $scope.q_online_orientation_anxiety = tool8Questionnaire['online-orientation-anxiety'];
    $scope.q_online_orientation_set_expectations = tool8Questionnaire['online-orientation-set-expectations'];
    $scope.q_online_orientation_positiverolemodel = tool8Questionnaire['online-orientation-positiverolemodel'];
    $scope.q_online_orientation_socialising = tool8Questionnaire['online-orientation-socialising'];
    $scope.q_online_orientation_campustour = tool8Questionnaire['online-orientation-campustour'];
    $scope.q_online_orientation_studyskills = tool8Questionnaire['online-orientation-studyskills'];
    
    $scope.t8Subsections = areasViewedT8;

    $scope.sectionWidthT8 = Math.floor((100 / (Object.keys(areasViewedT8).length))) + '%';

    $scope.currentSection = $location.path();

    $scope.jumpToUrlT8 = function (pathToJumpTo) {
        $location.path(pathToJumpTo);
    };

    /**
     * Function for question answer click event.
     * Sets the select answer for a question.
     * 
     * @param object question
     * @param object option
     */
    $scope.answer = function (question, option) {
        question['response'] = option.value;//option.answer;
        question['selected'] = option;
    };
    
    /**
     * Function for question answer click event.
     * Sets the select answer for a question.
     * 
     * @param object question
     */
    $scope.answerOther = function (question) {
        question['response'] = question.selected;//option.answer;
        question['selected'] = question.selected;
    };
    
    /**
     * Resets the full questionnaire page
     * @returns {undefined}
     */
    $scope.resetQuestionnaireT8 = function () {
        for (var i = 0; i < $scope.q_your_online_orientation.questions.length; i++) {
            $scope.q_your_online_orientation.questions[i].response = '';
            $scope.q_your_online_orientation.questions[i].selected = '';
        }

        for (var i = 0; i < $scope.q_online_orientation_anxiety.questions.length; i++) {
            $scope.q_online_orientation_anxiety.questions[i].response = '';
            $scope.q_online_orientation_anxiety.questions[i].selected = '';
        }
    };
    
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
        doc.text(margin, margin, 'AReview Your Online Orientation Plan');
        
        //Brief Description
        doc.setFontSize(16);
        doc.text(margin, 25, 'Here is an overall summary of your results.');
        
        // add data here!...
        var text = 'Here is an overall summary of your results.';
        var lines = doc.setFontSize(12).splitTextToSize(text, (75 - margin));
        
        
        
        //Footer place
        doc.setDrawColor(232,232,232);
        doc.setFillColor(8, 167, 205);
        doc.roundedRect(15, 70, (210 - (margin*2)), (5+(lines.length)), 1, 1, 'FD');
        
        doc.save('review_your_online_orientation_plan.pdf');
    }

    $scope.resetGatheredData = function () {
        $scope.resetAreasViewedT8();
        $scope.resetQuestionnaireT8();
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