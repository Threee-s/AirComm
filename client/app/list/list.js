'use strict';

angular.module('aircommApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      });
  });