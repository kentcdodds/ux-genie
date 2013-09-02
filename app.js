
'use strict';
(function() {
  var app = angular.module('ngGenieApp', []);
  
  // Makes this modular if we don't just use the global instance and use it as a module instead  
  app.constant('genie', genie);
  
  app.controller('NgGenieCtrl', function($scope, genie) {

    $scope.genieVisible = true;
    
    $scope.onKeyup = function(event) {
      console.log('keyup' + event.keyCode);
      switch(event.keyCode) {
        case 32:
          if (event.ctrlKey) {
            $scope.genieVisible = !$scope.genieVisible;
          }
          break;
        case 27:
          $scope.genieVisible = false;
      }
    }

    function addWish(wishDisplay, magicWords, action) {
      if (typeof magicWords === 'function') {
        action = magicWords;
        magicWords = undefined;
      }
      if (magicWords === undefined) {
        magicWords = [];
      }
      if (magicWords.indexOf('[') == 0) {
        magicWords = JSON.parse(magicWords);
      }
      magicWords.push(wishDisplay);
      var wish = genie({
        magicWords: magicWords,
        data: {
          displayText: wishDisplay
        },
        action: action || function() {
          console.log('Your "' + this.data.displayText + '" wish is my command!');
        }
      });
    }

    addWish('ng-GenieJS on GitHub', function() {
      window.open('http://www.github.com/kentcdodds/ng-genie', '_blank');
    });
    addWish('GenieJS Demo', function() {
      window.open('http://kentcdodds.github.io/genie', '_blank');
    });
    addWish('GenieJS Tests', function() {
      window.open('http://kentcdodds.github.io/genie/test', '_blank');
    });
    addWish('Create new post');
    addWish('Edit profile pic');
    addWish('Update contact info');
    addWish('Delete account');
    addWish('Block user');
    addWish('Friend user');
    addWish('Find friends');
    addWish('Wow!', ['Alert', 'Pop up'], function() {
      alert('Wow!');
    });

  });
  
})();