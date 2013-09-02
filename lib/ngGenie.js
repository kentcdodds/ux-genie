//     ngGenie.js
//     (c) 2013 Kent C. Dodds
//     genie.js may be freely distributed under the MIT license.
//     http://www.github.com/kentcdodds/ng-genie
//     See README.md

angular.module('ngGenieApp').directive('ngGenie', function(genie) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './lib/ngGenie.html',
    scope: {
      ngGenieVisible: '='
    },
    link: function(scope, el, attr) {
      // Wish focus
      scope.focusOnWish = function(wishElement) {
        scope.focusedWish = wishElement;
      };
      
      // Input events
      el.find('input').bind('keydown', (function() {
        var changeSelection = function(change, event) {
          if (scope.matchingWishes && change) {
            if (event) {
              event.preventDefault();
            }
            var index = scope.matchingWishes.indexOf(scope.focusedWish);
            var newIndex = index + change;
            if (newIndex < 0) {
              newIndex = newIndex + scope.matchingWishes.length;
            } else if (newIndex >= scope.matchingWishes.length) {
              newIndex = newIndex - scope.matchingWishes.length;
            }
            scope.$apply(function() {
              scope.focusOnWish(scope.matchingWishes[newIndex]);
            });
          }
        }
        return function keydownHandler(event) {
          var change = 0;
          switch(event.keyCode) {
            case 38:
              change = -1;
              break;
            case 40:
              change = 1;
              break;
          }
          if (event.shiftKey) {
            change *= 5;
          }
          changeSelection(change, event);
        }
      })());
      
      // Making a wish
      scope.makeWish = function(wish) {
        genie.makeWish(wish, scope.genieInput);
        updateMatchingWishes(scope.genieInput);
      }
      
      el.bind('keyup', function(event) {
        if (event.keyCode === 13 && scope.focusedWish) {
          genie.makeWish(scope.focusedWish, scope.genieInput);
          scope.$apply(function() {
            updateMatchingWishes(scope.genieInput);
          });
        }
      });
      
      // Updating list of wishes
      function updateMatchingWishes(magicWord) {
        if (magicWord) {
          scope.matchingWishes = genie.getMatchingWishes(magicWord);
          if (scope.matchingWishes.length > 0) {
            scope.focusedWish = scope.matchingWishes[0];
          }
        } else {
          scope.matchingWishes = null;
          scope.focusedWish = null;
        }
      }
      
      scope.$watch('genieInput', function(newVal) {
        updateMatchingWishes(newVal);
      });
      
    }
  }
});
