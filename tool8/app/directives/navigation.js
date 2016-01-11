/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('sstTool8App')
    .directive('tool8Nav', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'app/views/partials/widgets/navigation.html'
      };
    });