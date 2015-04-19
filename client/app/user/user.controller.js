'use strict';

angular.module('aircommApp')
  .controller('UserCtrl', ['$scope', '$stateParams', '$log', 'userManager', function ($scope, $stateParams, $log, userManager) {
    $log.debug("UserCtrl start");
    var manager = userManager();
    $scope.user = manager.getUserTest($stateParams.id);
    $log.debug($scope.user);
  }]);
