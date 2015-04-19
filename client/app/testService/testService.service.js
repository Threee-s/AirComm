'use strict';

angular.module('aircommApp')
  //.service('testService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  .factory('testService', function () {
    var users = [
      {
        id: "1001",
        name: "文 光石",
        pronounce: "Wen Guangshi",
        sex: "男",
        residence: "Yokohama",
        avatar: "assets/images/guangshi.jpg",
        social: {
          email: "flashair1@gmail.com"
        },
        photo: "/AirComm/Photo",
        rssi: 50
      }
    ];
    
    return function () {
      return users;
    };
  });
