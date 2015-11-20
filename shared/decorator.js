/**
 * Override Default templates for bootstrap angular widgets
 * @param {type} $provide
 * @returns {undefined}
 */
  function Decorate($provide) {
      
    $provide.decorator('accordionGroupDirective', ['$delegate', function($delegate) {
        var directive = $delegate[0];

        directive.templateUrl = "../shared/views/partials/accordion/accordion-group.html";

        return $delegate;
    }]);
    
  }