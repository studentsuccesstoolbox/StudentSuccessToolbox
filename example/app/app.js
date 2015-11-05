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

angular = require('angular');
require('angular-chart.js');

var sstExampleApp = angular.module('sstExampleApp', [require('angular-ui-bootstrap')
                        ,require('angular-route')
                        ,require('angular-sanitize')
                        ,require('angular-animate')
                        ,require('angular-aria')
                        ,'chart.js'
                        ,'rzModule'
                        ]);
                 
require('./filters');
require('./directives');
require('./controllers');

sstExampleApp.config(['ChartJsProvider', function (ChartJsProvider) {
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
        scaleShowLabels : true,

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