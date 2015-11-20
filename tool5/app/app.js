/**
 * Sudent Success Toolbox - Tool 5
 * The objective of this tool app, is to help prospective students think about the amount 
 * of time they spend on different activities during a typical week and how much study 
 * they might be able to realistically undertake in their ‘free time’ whilst balancing 
 * other life, work and family commitments. 
 * 
 * @author Paul Schweppe
 */

$ = require('jquery');

var angular = require('angular');

var sstTool5App = angular.module('sstTool5App', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'sharedControllers'
                        ]);


require('./data');
require('./controllers');

/*Route Options*/
sstTool5App.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'app/views/templates/home.html',
                controller: 'defaultController'
    	})
        .when('/what-stage-are-you-at/', {
    		templateUrl: 'app/views/templates/what-stage-are-you-at.html',
                controller: 'defaultController'
    	})

       
        .when('/developing-a-plan/', {
    		templateUrl: 'app/views/templates/developing-a-plan.html',
                controller: 'defaultController'
    	})
        
        .when('/developing-a-plan/starting-an-assignment/', {
    		templateUrl: 'app/views/templates/developing-a-plan/starting-an-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/developing-a-plan/assignment-plan/', {
    		templateUrl: 'app/views/templates/developing-a-plan/assignment-plan.html',
                controller: 'defaultController'
    	})
        
        .when('/developing-a-plan/find-resources/', {
    		templateUrl: 'app/views/templates/developing-a-plan/find-resources.html',
                controller: 'defaultController'
    	})
        
        .when('/developing-a-plan/evaluate/', {
    		templateUrl: 'app/views/templates/developing-a-plan/evaluate.html',
                controller: 'defaultController'
    	})
        
        .when('/developing-a-plan/use-assignment/', {
    		templateUrl: 'app/views/templates/developing-a-plan/use-assignment.html',
                controller: 'defaultController'
    	})
        
	.when('/resources/', {
            templateUrl: 'app/views/templates/resources.html',
            controller: 'defaultController'
    	})
        
        .when('/summary/', {
    		templateUrl: 'app/views/templates/summary.html',
                controller: 'defaultController'
    	})
        
        .when('/submitting-the-assignment/', {
    		templateUrl: 'app/views/templates/submitting-the-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/using-the-library/', {
    		templateUrl: 'app/views/templates/using-the-library.html',
                controller: 'defaultController'
    	})
        
        .when('/complete-beginner/complete-beginner/', {
    		templateUrl: 'app/views/templates/complete_beginner/complete-beginner.html',
                controller: 'defaultController'
    	})
        
        .when('/complete-beginner/my-first-assignment/', {
    		templateUrl: 'app/views/templates/complete_beginner/my-first-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/complete-beginner/where-to-start/', {
    		templateUrl: 'app/views/templates/complete_beginner/where-to-start.html',
                controller: 'defaultController'
    	}) 
        
        .when('/completely-confident/completely-confident/', {
    		templateUrl: 'app/views/templates/completely_confident/completely-confident.html',
                controller: 'defaultController'
    	})
        
        .when('/completely-confident/starting-an-assignment/', {
    		templateUrl: 'app/views/templates/completely_confident/starting-an-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/completely-confident/my-first-assignment/', {
    		templateUrl: 'app/views/templates/completely_confident/my-first-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/completely-confident/where-to-start/', {
    		templateUrl: 'app/views/templates/completely_confident/where-to-start.html',
                controller: 'defaultController'
    	})    
        
        .when('/some-experience/some-experience/', {
    		templateUrl: 'app/views/templates/some_experience/some-experience.html',
                controller: 'defaultController'
    	})
        
        .when('/some-experience/starting-an-assignment/', {
    		templateUrl: 'app/views/templates/some_experience/starting-an-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/some-experience/my-first-assignment/', {
    		templateUrl: 'app/views/templates/some_experience/my-first-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/some-experience/where-to-start/', {
    		templateUrl: 'app/views/templates/some_experience/where-to-start.html',
                controller: 'defaultController'
    	})       
        
        .when('/willing-beginner/willing-beginner/', {
    		templateUrl: 'app/views/templates/willing_beginner/willing-beginner.html',
                controller: 'defaultController'
    	})
        
        .when('/willing-beginner/starting-an-assignment/', {
    		templateUrl: 'app/views/templates/willing_beginner/starting-an-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/willing-beginner/my-first-assignment/', {
    		templateUrl: 'app/views/templates/willing_beginner/my-first-assignment.html',
                controller: 'defaultController'
    	})
        
        .when('/willing-beginner/where-to-start/', {
    		templateUrl: 'app/views/templates/willing_beginner/where-to-start.html',
                controller: 'defaultController'
    	})
           
        ;  	
}).run( function($rootScope, $location) {
        //Get questionnaire data from localstorage
        $rootScope.ratings = tool5Rating.ratings;
        $rootScope.personas = tool5Personas;
       
});