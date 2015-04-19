'use strict';

describe('Controller: AirnavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('aircommApp'));

  var AirnavbarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AirnavbarCtrl = $controller('AirnavbarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
