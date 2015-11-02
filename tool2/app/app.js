/**
 * Sudent Success Toolbox - Tool 2
 * The objective of this tool app, is to help prospective students think about the amount 
 * of time they spend on different activities during a typical week and how much study 
 * they might be able to realistically undertake in their ‘free time’ whilst balancing 
 * other life, work and family commitments. 
 * 
 * @author Paul Schweppe
 */
var $ = require('jquery');

//var pageTransition = 'page-slider';

var angular = require('angular');
require('angular-chart.js');

var sstTool2App = angular.module('sstTool2App', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'chart.js'
                        ,'rzModule']);
                 
require('./data');
require('./directives');
require('./services');
require('./filters');
require('./controllers');


/* Page Transition Animation option*/
sstTool2App.pageTransition = 'page-slider';

/*Route Options*/
sstTool2App.config(function($routeProvider, $httpProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'app/views/templates/home.html',
                controller: 'homeController'
    	})
    	.when('/free-time', {
    		templateUrl: 'app/views/templates/free-time.html',
                controller: 'freeTimeController'
    	})
        .when('/interpret', {
    		templateUrl: 'app/views/templates/interpret.html',
                controller: 'interpretController'
    	})
        .when('/rate', {
    		templateUrl: 'app/views/templates/rate.html',
                controller: 'rateController'
    	}); 
});


respondToSizingMessage = function(e) {
    if(e.data == 'sizing?') {
      e.source.postMessage('height:'+document.body.scrollHeight, e.origin);
    }
}
// we have to listen for 'message'
window.addEventListener('message', respondToSizingMessage, false);
