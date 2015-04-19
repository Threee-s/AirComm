'use strict';

angular.module('aircommApp')
  .controller('ListCtrl', ['$scope', '$log', '$modal', 'userManager', function ($scope, $log, $modal, userManager) {
  //.controller('ListCtrl', ['$scope', '$log', 'testService', function ($scope, $log, testService) {
    $log.debug("ListCtrl start");
    var manager = userManager();
    //$scope.updateUsers();
    //$scope.users = manager.getUsers();
    //$scope.users = manager.getUsersTest();
    //$scope.users = testService();
    //$log.debug($scope.users);
    
    
    
    $scope.initUsers = function() {
      $scope.update = {
        alert: "alert-info",
        //progress: "assets/images/loading_1.gif",//test
        progress: "/SD_WLAN/img/loading.gif",//test
        connecting: false
      }
      
      //getUsers(false);
    };
    
    $scope.updateUsers = function() {
      getUsers(false);
      //$scope.users = manager.getUsers();
      //$scope.users = manager.getUsersTest();
      // test
      /*var newUsers = manager.getUsersTest();
      for (var i = 0; i < newUsers.length; i++) {
        $scope.users.push(newUsers[i]);
      }*/
      //$scope.users = testService();
    };
    
    $scope.showUser = function(index) {
      $scope.user = $scope.users[index];
      
      $log.debug("modal start");
      $modal.open({
        templateUrl: 'app/user/user.html',
        //templateUrl: 'modal-user',
        backdrop: true,
        scope: $scope
      });
      $log.debug("modal end");
    };
    
    function getUsers(flag) {
      $scope.update.connecting = true;
      $scope.users = [];// clear
      //test
      //for(var i = 0; i < 1000000; i++) {
      //  var j = i *2;
      //}
      
      //$scope.updateUsers();
      //$scope.users = manager.getUsers();
      //$scope.users = manager.getUsersTest();
      //$scope.users = testService();
      manager.getFlashAirUsers(flag, notifyUser);
      //$log.debug($scope.users);
    }
    
    function notifyUser(user, completed) {
      $scope.users.push(user);
      if (completed) {
        $scope.update.connecting = false;
      }
    }
  }]);
