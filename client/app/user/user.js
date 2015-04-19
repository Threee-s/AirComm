'use strict';

angular.module('aircommApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user/{id:[a-zA-Z0-9]}',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });