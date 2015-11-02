/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Created by Joyce Cam on 30/12/2014.
 *
 * Simple and easy-to-implement angular read more directive.
 *
 */
 
angular.module('sstTool4App').directive('readMore', function() {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    template: '<p></p>',
    scope: {
      moreText: '@',
      lessText: '@',
      words: '@',
      ellipsis: '@',
      char: '@',
      limit: '@',
      content: '@'
    },
    link: function(scope, elem, attr, ctrl, transclude) {
      /*var moreText = angular.isUndefined(scope.moreText) ? ' <a class="read-more">Read More...</a>' : ' <a class="read-more">' + scope.moreText + '</a>',
        lessText = angular.isUndefined(scope.lessText) ? ' <a class="read-less">Less ^</a>' : ' <a class="read-less">' + scope.lessText + '</a>',
        ellipsis = angular.isUndefined(scope.ellipsis) ? '' : scope.ellipsis,
        limit = angular.isUndefined(scope.limit) ? 150 : scope.limit;*/

    var $moreBtn = angular.isUndefined(scope.moreText) ? $('<span class="more-btn"><a class="btn btn-link read-more">more</a></span>') : '<a class="read-more">' + scope.moreText + '</a>',
        $lessBtn = angular.isUndefined(scope.lessText) ? $('<span class="more-btn"><a class="btn btn-link read-less">less</a></span') : ' <a class="read-less">' + scope.lessText + '</a>',
        $ellipsis = angular.isUndefined(scope.ellipsis) ? '' : $('<span class="read-ellipsis">'+scope.ellipsis+'</span>'),
        limit = angular.isUndefined(scope.limit) ? 150 : scope.limit;

      attr.$observe('content', function(str) {
        readmore(str);
      });

      transclude(scope.$parent, function(clone, scope) {
        readmore(clone.text().trim());
      });

      function readmore(text) {

        var text = text,
          orig = text,
          regex = /\s+/gi,
          charCount = text.length,
          wordCount = text.trim().replace(regex, ' ').split(' ').length,
          countBy = 'char',
          count = charCount,
          foundWords = [],
          markup = text,
          more = '';

        if (!angular.isUndefined(attr.words)) {
          countBy = 'words';
          count = wordCount;
        }

        if (countBy === 'words') { // Count words

          foundWords = text.split(/\s+/);

          if (foundWords.length > limit) {
            text = foundWords.slice(0, limit).join(' ')
            more = foundWords.slice(limit, count).join(' ');
          }else{
              elem.append(text);
              return;
          }

        } else { // Count characters

          if (count > limit) {
            text = orig.slice(0, limit);
            more = orig.slice(limit, count);
          }else{
               elem.append(text);
              return;
          }
          

        }
        
        var $moreContainer = $('<span class="more-text"></span').append(more);
            
        $lessBtn.find('.read-less').on('click', function() {
            $moreBtn.find('.read-more').show();
            $moreContainer.hide().removeClass('show');
            if($ellipsis){
                $ellipsis.show();
            }
        });

        $moreContainer.append($lessBtn);

        $moreBtn.find('.read-more').on('click', function() {
            $(this).hide();
            $moreContainer.addClass('show').slideDown();
            if($ellipsis){
                $ellipsis.hide();
            }
        });

        elem.append(text)
                .append($ellipsis)
                .append($moreBtn)
                .append($moreContainer);

      }
    }
  };
});

