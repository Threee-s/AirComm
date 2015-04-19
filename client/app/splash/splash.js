'use strict';

angular.module('aircommApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('splash', {
        url: '/splash',
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashCtrl'
      });
  });