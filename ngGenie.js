//     ngGenie.js
//     (c) 2013 Kent C. Dodds
//     genie.js may be freely distributed under the MIT license.
//     http://www.github.com/kentcdodds/ng-genie
//     See README.md

'use strict';
(function() {
  var app = angular.module('ngGenie', []);
  
  app.constant('genie', genie);
  
  app.directive('ngGenie', function(genie) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'ngGenie.html',
      scope: false,
      link: function(scope, el, attr) {
        function addEvent(object, event, method) {
          if (object.addEventListener)
            object.addEventListener(event, method, false);
          else if(object.attachEvent)
            object.attachEvent('on' + event, function(){ method(window.event) });
        }
        
        scope.focusOnWish = function(wishElement) {
          $scope.focusedWish = wishElement;
        };
        
        el.find('input').bind('keyup', (function(container) {
          var genieOptionsContainer = container.find('.genie-options')[0];
          var changeSelection = function(change) {
            var index = genieOptionsContainer.selectedIndex;
            var newIndex = parseInt(index === 'NaN' ? '-1' : index) + change;
            if (newIndex < 0) {
              newIndex = 0;
            }
            genieOptionsContainer.selectedIndex = '' + newIndex;
          }
          return function(event) {
            switch(event.keyCode) {
              case 38:
                changeSelection(-1);
                break;
              case 40:
                changeSelection(1);
                break;
            }
          }
        })(el));
        
        scope.$watch('genieInput', function(newVal) {
          scope.matchingWishes = genie.getMatchingWishes(newVal);
        });
      }
    }
  });
})();