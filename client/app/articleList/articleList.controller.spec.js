'use strict';

describe('Component: ArticleListComponent', function () {

  // load the controller's module
  beforeEach(module('fndParyBoatsApp'));

  var ArticleListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ArticleListComponent = $componentController('ArticleListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
