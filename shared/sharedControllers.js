
angular.module('sharedControllers', [])
    .config(function($httpProvider,$routeProvider,$provide) {
        Decorate($provide);

        $routeProvider
            .when('/rate', {
                    templateUrl: '../shared/views/templates/rate.html',
                    controller: 'rateController'
            })
            .when('/404', {
                    templateUrl: '../shared/views/templates/404.html',
                    controller: 'defaultController'
            }).otherwise('/404', {
                    templateUrl: '../shared/views/templates/404.html',
                    controller: 'defaultController'
            });
    })
    .controller('rateController', function($rootScope,$scope,$window) {

        //FeedBack Form values
        $scope.feedbackComment = '';
        $scope.feedbackName = '';
        
        $scope.isTouchDevice = isTouchDevice();

        //Sets scope rating questions
        $scope.ratings = $rootScope.ratings;

        //Function to set the answer.
        $scope.answer = function(question,option){
            question.response = option.answer;
            question.selected = option;
        };


        /**
         * Feedback Action. Creates a mailto link 
         * and opens it. Change to use a better sending
         * mechanism
         * 
         */
        $scope.sendFeedback = function(){
            var subject= $scope.ratings.subject?$scope.ratings.subject:'Feedback';
            var body = "Feedback Questions: \n";

            $.each($scope.ratings.questions,function(key,question){
                if(question.selected){
                    body += question.question+': '+question.selected.value+"\n";
                }else{
                    body += question.question+': Not answered'+"\n";
                }
            });

            body += "\nName: "+$scope.feedbackName+"\n";
            body += "\nComment: \n"+$scope.feedbackComment+"\n";

            var $mailTo = 'mailto:info@fluid-rock.com?'
                           +'subject='+encodeURIComponent(subject)
                           +'&body='+encodeURIComponent(body);

            $window.location = $mailTo;

        };
    });
    
 function isTouchDevice() {
        var bool;
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
          testStyles(query, function(node) {
            bool = node.offsetTop === 9;
          });
        }
        return bool;
 };