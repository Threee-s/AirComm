'use strict';

angular.module('aircommApp')
  .value('aircomm', {
    users: [],
    init: function(users) {
      this.users = users;
    },
    getUsers: function() {
      return this.users;
    },
    getUser: function(id) {
      return this.users[id];
    }
  })
  //.service('userManager', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  .factory('userManager', ['$http', '$log', 'aircomm', function ($http, $log, aircomm) {
    var url_user_dir = "/SD_WLAN/users/";
    var url_user = "/SD_WLAN/user.json";
    var url_users = "/command.cgi?op=100&DIR=/SD_WLAN/users"
    //var url_user = "http://wenflashair.local/SD_WLAN/user.json?callback=JSON_CALLBACK";
    var url_lua = "/SD_WLAN/air_communication.lua";
    
    function getUsers() {
      $log.debug("getUsers start");
      var users = [];
      
      $http.get(url_user)
        .success(function(data, status, headers, config) {
          $log.debug(status);
          //$log.debug(data.user);
          //var user = parseToJSON(data.user);
          users.push(data.user);
          $log.debug(users);
        })
        .error(function(data, status, headers, config) {
          $log.debug(status);
        });
      
      /*  
      $http.jsonp(url_user).success(function(data) {
        var users = data.user;
        $log.debug(user);
        users.push(user);
      });
      */
        
      return users;
    }
    
    function getFlashAirUsers(flag, callback) {
      var ret = true;
      if (flag) {
        ret = scanFlashAir();
      }
      //if (scanFlashAir()) {
      if(true) { // TBD
        $log.debug("getFlashAirUsers");
        var files = ["user_11.json", "user_12.json", "user_13.json", "user_14.json"];
        getFlashAirUser(files, callback);
        /*
        $http.get(url_users)
          .success(function(data, status, headers, config) {
            $log.debug(status);
            // Split lines by new line characters.
            files = data.split(/\n/g);
            // Ignore the first line (title) and last line (blank).
            files.shift();
            files.pop();
            $log.debug(files);
            
            getFlashAirUser(files, callback);
          })
          .error(function(data, status, headers, config) {
            $log.debug(status);
          });
          */
          
      }
    }
    
    function scanFlashAir() {
      var result = false;
      $log.debug("scanFlashAir");
      $log.debug(url_lua);
      
      $http.get(url_lua)
        .success(function(data, status, headers, config) {
          $log.debug(status);
          result = true;
        })
        .error(function(data, status, headers, config) {
          $log.debug(status);
          result = false;
        });
        
        return result;
    }
    
    function getFlashAirUser(files, callback) {
      $.each(files, function() {
        var completed = true;// test
        var file = this;
        // Skip hidden file.
        /*
        if ( file["attr"] & 0x02 ) {
            return;
        }*/
        //var caption = file["fname"];
        var url_user_file = url_user_dir + file;
        $log.debug(url_user_file);
        
        $http.get(url_user_file)
          .success(function(data, status, headers, config) {
            $log.debug(status);
            //var user = parseToJSON(data.user);
            //users.push(data.user);
            callback(data.user, completed);
          })
          .error(function(data, status, headers, config) {
            $log.debug(status);
          });
      });
    }
    
    function getUsersTest() {
      $log.debug("getUsersTest start");
      var users = [
        {
          id: "1001",
          name: "Flash Air 1",
          pronounce: "Flash Air 1",
          sex: "男",
          residence: "Yokohama",
          avatar: "assets/images/avatar.jpeg",
          social: {
            email: "flashair1@gmail.com"
          },
          photo: "/SD_WLAN/Photo",
          pr: "FlashAir ハッカソン。チーム「エアーコミュニケーション」",
          rssi: 50
        },
        {
          id: "1002",
          name: "Flash Air 2",
          pronounce: "Flash Air 2",
          sex: "女",
          residence: "Tokyo",
          avatar: "assets/images/avatar.jpeg",
          social: {
            email: "flashair1@gmail.com"
          },
          photo: "/AirComm/Photo",
          pr: "FlashAir ハッカソン。チーム「エアーコミュニケーション」",
          rssi: 50
        }
      ];
      $log.debug(users);
      
      //aircomm.init(users);
      //return aircomm.getUsers();
      return users;
    }
    
    function getUser(id) {
      
    }
    
    function getUserTest(id) {
      $log.debug("getUserTest start");
      var users = getUsersTest();// for test
      $log.debug("id:" + id);
      $log.debug(users);
      
      var user = {};
      var len = users.length;
      for(var i = 0; i < len; i++) {
        if (users[i].id === id) {
          user = users[i];
          break;
        }
      }
      
      $log.debug(user);
      
      return user;
    }
    
    
    
    function parseToJSON(data) {
      var json = JSON.parse(data);
      //var json = JSON.parse(data, reviver);
      //var json = eval("(" + data + ")");//??
      
      return json;
    }
    
    // User data is not JSON format.
    function parseUser(user) {
      
    }
    
    return function () {
      return {
        getFlashAirUsers: getFlashAirUsers,
        getUsers: getUsers,
        getUser: getUser,
        getUsersTest: getUsersTest,
        getUserTest: getUserTest
      };
    };
  }]);
