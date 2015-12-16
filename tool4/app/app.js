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

var sstTool4App = angular.module('sstTool4App', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'ngAudio'
                        ,'rzModule'
                        ,'sharedControllers'
                        ]);

require('./data');
require('./filters');
require('./directives');
require('./services');
require('./controllers');

/*Route Options*/
sstTool4App.config(function($routeProvider,$httpProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'app/views/templates/home.html',
                controller: 'defaultController'
    	})
        .when('/what-are-computer-skills/', {
    		templateUrl: 'app/views/templates/what-are-computer-skills.html',
                controller: 'defaultController'
    	})
        .when('/why-do-I-need-computer-skills/', {
    		templateUrl: 'app/views/templates/why-do-I-need-computer-skills.html',
                controller: 'defaultController'
    	})
        .when('/what-technology-do-colleges-provide/', {
    		templateUrl: 'app/views/templates/what-technology-do-colleges-provide.html',
                controller: 'defaultController'
    	})
        .when('/how-can-they-help/', {
    		templateUrl: 'app/views/templates/how-can-they-help.html',
                controller: 'defaultController'
    	})

        .when('/technology-you-will-need/', {
    		templateUrl: 'app/views/templates/technology-you-will-need.html',
                controller: 'defaultController'
    	})
        .when('/student-stories/', {
    		templateUrl: 'app/views/templates/student-stories.html',
                controller: 'defaultController'
    	})
	.when('/check-your-computer-skills/', {
    		templateUrl: 'app/views/templates/check-your-computer-skills.html',
                controller: 'defaultController'
    	})	
        .when('/check-your-computer-skills/:qId', {
            templateUrl: 'app/views/templates/check-your-computer-skills/questionnaire.html',
            controller: 'questionnaireController'
    	})
	.when('/further-help/', {
            templateUrl: 'app/views/templates/further-help.html',
            controller: 'defaultController'
    	})
        .when('/college-supports-available-to-you/', {
            templateUrl: 'app/views/templates/college-supports-available-to-you.html',
            controller: 'defaultController'
    	})
        
	.when('/resources/', {
            templateUrl: 'app/views/templates/resources.html',
            controller: 'defaultController'
    	});  	
}).run( function($rootScope, $location) {
        //Get questionnaire data from localstorage
        $rootScope.ratings = tool4Rating.ratings;
       
});