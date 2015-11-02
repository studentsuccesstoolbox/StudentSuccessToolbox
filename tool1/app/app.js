/**
 * Sudent Success Toolbox - Tool 2
 * The objective of this tool app, is to help prospective students think about the amount 
 * of time they spend on different activities during a typical week and how much study 
 * they might be able to realistically undertake in their ‘free time’ whilst balancing 
 * other life, work and family commitments. 
 * 
 * @author Paul Schweppe
 */

require('jquery');

//Does not work. Issues in jspdf with require. Hopefully fixed in later versions
//jsPDF = require('jspdf');

var angular = require('angular');
require('angular-chart.js');

var sstTool1App = angular.module('sstTool1App', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'chart.js'
                        ]);
                 
require('./data');
//require('./directives');
require('./services');
require('./filters');
require('./controllers');


/* Page Transition Animation option*/
sstTool1App.pageTransition = 'page-slider';

/*Route Options*/
sstTool1App.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'app/views/templates/home.html',
                controller: 'homeController'
    	})
    	.when('/questionnaire/:qId', {
    		templateUrl: 'app/views/templates/questionnaire.html',
                controller: 'questionnaireController'
    	})
        .when('/interpret/:qId', {
    		templateUrl: 'app/views/templates/interpret.html',
                controller: 'interpretController'
    	})
        .when('/results', {
    		templateUrl: 'app/views/templates/results.html',
                controller: 'resultsController'
    	})
        .when('/rate', {
    		templateUrl: 'app/views/templates/rate.html',
                controller: 'rateController'
    	}); 
		
		
});

sstTool1App.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
        // Boolean - Whether to animate the chart
        animation: true,
        tooltipFillColor: "rgba(249,160,41,1)",
        scaleFontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        scaleFontStyle: "normal",
        scaleFontColor: "#494949",
        scaleFontSize: 18,
        tooltipFontSize: 18,
        tooltipTitleFontSize: 24,
        tooltipCaretSize: 10,
        tooltipCornerRadius: 10,
        tooltipXOffset: 10,
        
        //Boolean - Whether to show lines for each scale point
        scaleShowLine : true,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut : true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels : false,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,
    
        //String - Point label font declaration
        pointLabelFontFamily : "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        //String - Point label font weight
        pointLabelFontStyle : "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize : 12,

        //String - Point label font colour
        pointLabelFontColor : "#08a7cd",
        
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : false,
    });
  }]);

sstTool1App.saveObject = function(object,key){
    localStorage.setItem(('sstTool1'+key), JSON.stringify(object));
}

sstTool1App.retrieveObject = function(key){
    return JSON.parse(localStorage.getItem(('sstTool1'+key)));
}

sstTool1App.removeObject = function(key){
    localStorage.removeItem(('sstTool1'+key));
}

$data = sstTool1App.retrieveObject('QNR');

if($data){
    questionnaire = $data;
}
