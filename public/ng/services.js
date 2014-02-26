/*global angular */
/*******************************************************************************
 * Services
 ******************************************************************************/

angular.module('nodeDC.services', [])
    .value('version', '0.0.1')
    .factory('socket', function() {
      var socket = io.connect('/');

      return socket;
    })
    .factory('Chat', function($rootScope, socket) {
      var lines = [];
        socket.on('init', function(data) {
            data.lastMessages.forEach(function(line){
                //add the user to the map with a random colorClass
                line.color = getColorForUser(line.user);
                lines.push(line);
            });
            console.log(lines);
            console.log(data.lastMessages);
            $rootScope.$apply();
            $('#irc_messages').scrollTop(9999999);
        });
      socket.on('message', function(data) {
            data.color = getColorForUser(data.user);
        lines.push(data);
        console.log(lines);
        $rootScope.$apply();
            $('#irc_messages').scrollTop(9999999);
      });

        var existingUsers = {};
        var colorClasses = [];
        function getColorForUser(user){
            if(!existingUsers[user]){
                if(colorClasses.length < 1){
                    colorClasses = populateColorClasses();
                }
                var randIndex = Math.floor(Math.random()*colorClasses.length);
                existingUsers[user] = colorClasses[randIndex];
                colorClasses.splice(randIndex, 1);
            }
            return existingUsers[user];
        }
        function populateColorClasses(){
            return ['user1','user2','user3','user4','user5',
                    'user6','user7','user8','user9','user10'];
        }

      return {
        getLines: function() {
          return lines;
        }
      };
    });
