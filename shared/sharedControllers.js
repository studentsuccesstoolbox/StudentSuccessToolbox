
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

            var $mailTo = 'mailto:email@email.com?'
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
          var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
          var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
          injectElementWithStyles(query, function(node) {
            bool = node.offsetTop === 9;
          });
        }
        return bool;
 };
 
 function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = document.body;

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }
  
  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (document.documentElement.nodeName.toLowerCase() === 'svg') {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }
