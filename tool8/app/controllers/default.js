/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sstTool8App').controller('defaultController', function($scope,$modal,ngAudio) {
    
    $scope.areasViewedT8 = areasViewedT8;
    

    
    $scope.resetAreasViewedT8 = function(){
        //// ALFR :: rewite this!
        ////$.each( areasViewedT8, function( key, value ) {
        ////    areasViewedT8[key] = false;
        ////});  
    };
       
    $scope.q_your_online_orientation = tool8Questionnaire['your-online-orientation'];
    
    $scope.t8Subsections = areasViewedT8;
    
    $scope.sectionWidthT8 = Math.floor((100 / (Object.keys(areasViewedT8).length)))+'%';
    
    /**
     * Resets the full questionnaire page
     * @returns {undefined}
     */
    $scope.resetQuestionnaireT8 = function(){
        for(var i = 0; i < $scope.q_your_online_orientation.questions.length; i++){
            $scope.q_your_online_orientation.questions[i].response  = '';
            $scope.q_your_online_orientation.questions[i].selected  = '';
        }
    };
   
    $scope.resetGatheredData = function(){
        $scope.resetAreasViewedT8();
        $scope.resetQuestionnaireT8();
    };
    
    $scope.audio = {
        sound1 : ngAudio.load('../assets/audio/audio.mp3'),
        sound2 : ngAudio.load('../assets/audio/audio.mp3'),
        sound3 : ngAudio.load('../assets/audio/audio.mp3'),
        sound4 : ngAudio.load('../assets/audio/audio.mp3')
    };
 
    
    //Slider Hours translate
    $scope.translate = function(value){
        return value;
    };
    
    
    $scope.playAudio = function($audio){
        $.each($scope.audio, function( key, sound ) {
            if(sound != $audio){
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
    $scope.openModal = function(template,size,$event) {
        if($event){
            $event.preventDefault();
        }
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