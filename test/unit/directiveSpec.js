'use strict';

/* jasmine specs for directives go here */

describe('directive', function() {
  beforeEach(module('ngGenie.directive'));

  describe('ng-directive', function() {
    it('should do something awesome', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});