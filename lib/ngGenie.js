//     ngGenie.js
//     (c) 2013 Kent C. Dodds
//     genie.js may be freely distributed under the MIT license.
//     http://www.github.com/kentcdodds/ng-genie
//     See README.md

angular.module('ngGenie', []).directive('ngGenie', function(genie, $timeout) {
  return {
    restrict: 'EA',
    replace: true,
    template: ['<div class="genie-container" ng-show="ngGenieVisible">',
      '<input type="text" ng-model="genieInput" />',
      '<div class="genie-options">',
        '<div class="genie-option" ' +
          'ng-repeat="wish in matchingWishes" ' +
          'ng-class="{focused: focusedWish == wish}" ' +
          'ng-click="makeWish(wish)" ' +
          'ng-mouseenter="focusOnWish(wish)">',
      '{{wish.data.displayText}}',
      '</div></div></div>'].join(''),
    scope: {
      ngGenieVisible: '='
    },
    link: function(scope, el, attr) {
      var inputEl = el.find('input');
      
      // Wish focus
      scope.focusOnWish = function(wishElement) {
        scope.focusedWish = wishElement;
      };
      
      // Input events
      inputEl.bind('keydown', (function() {
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
      
      scope.$watch('ngGenieVisible', function(newVal) {
        if (newVal) {
          // Needs to be visible before it can be selected
          $timeout(function() {
            inputEl[0].select();
          }, 25);
        }
      });
      
      scope.$watch('genieInput', function(newVal) {
        updateMatchingWishes(newVal);
      });
      
    }
  }
});
