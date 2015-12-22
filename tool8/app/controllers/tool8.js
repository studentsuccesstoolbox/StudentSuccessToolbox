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

        //Footer place
        doc.setDrawColor(232, 232, 232);
        doc.setFillColor(8, 167, 205);
        doc.roundedRect(15, 70, (210 - (margin * 2)), (5 + (lines.length)), 1, 1, 'FD');

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