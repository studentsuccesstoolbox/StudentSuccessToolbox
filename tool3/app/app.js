/**
 * Sudent Success Toolbox - Tool 2
 * The objective of this tool app, is to help prospective students think about the amount 
 * of time they spend on different activities during a typical week and how much study 
 * they might be able to realistically undertake in their ‘free time’ whilst balancing 
 * other life, work and family commitments. 
 * 
 * @author Paul Schweppe
 */

$ = require('jquery');

var angular = require('angular');


var sstTool3App = angular.module('sstTool3App', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'sharedControllers'
                        ]);

require('./data');
require('./controllers');
require('./directives');

/*Route Options*/
sstTool3App.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'app/views/templates/home.html',
                controller: 'defaultController'
    	})
    	.when('/hub', {
    		templateUrl: 'app/views/templates/hub.html',
                controller: 'defaultController'
    	})
        //Friends
        .when('/hub/friends/', {
    		templateUrl: 'app/views/templates/friends/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/friends/support/', {
    		templateUrl: 'app/views/templates/friends/support.html',
                controller: 'defaultController'
    	})
        //Family
        .when('/hub/family/', {
    		templateUrl: 'app/views/templates/family/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/family/support/', {
    		templateUrl: 'app/views/templates/family/support.html',
                controller: 'defaultController'
    	})
        //Employer
        .when('/hub/employer/', {
    		templateUrl: 'app/views/templates/employer/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/employer/support/', {
    		templateUrl: 'app/views/templates/employer/support.html',
                controller: 'defaultController'
    	})
        //University
        .when('/hub/university/', {
    		templateUrl: 'app/views/templates/university/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/university/support/', {
    		templateUrl: 'app/views/templates/university/support.html',
                controller: 'defaultController'
    	})
         //Other Students
        .when('/hub/other-students/', {
    		templateUrl: 'app/views/templates/other-students/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/other-students/support/', {
    		templateUrl: 'app/views/templates/other-students/support.html',
                controller: 'defaultController'
    	})
        //Others
        .when('/hub/others/', {
    		templateUrl: 'app/views/templates/others/help.html',
                controller: 'defaultController'
    	})
        .when('/hub/others/support/', {
    		templateUrl: 'app/views/templates/others/support.html',
                controller: 'defaultController'
    	})
        //Don't want to ask
        .when('/hub/dont-want-to-ask/', {
    		templateUrl: 'app/views/templates/dont-want-to-ask.html',
                controller: 'defaultController'
    	})
        //No one to ask
        .when('/hub/no-one-to-ask/', {
    		templateUrl: 'app/views/templates/no-one-to-ask.html',
                controller: 'defaultController'
    	})
        //No one to ask second
        .when('/hub/no-one-to-ask-second/', {
    		templateUrl: 'app/views/templates/no-one-to-ask-second.html',
                controller: 'defaultController'
    	})
        //No one to ask third
        .when('/hub/no-one-to-ask-third/', {
    		templateUrl: 'app/views/templates/no-one-to-ask-third.html',
                controller: 'defaultController'
    	})
        //Questions
        .when('/hub/questions/', {
    		templateUrl: 'app/views/templates/questions.html',
                controller: 'questionsController'
    	})
        .when('/finished/', {
    		templateUrl: 'app/views/templates/finished.html',
                controller: 'defaultController'
    	})
        ;
}).run( function($rootScope, $location) {
        //Get questionnaire data from localstorage
        $rootScope.ratings = tool3Rating.ratings;
       
});