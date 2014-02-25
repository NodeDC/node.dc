var irc = require('irc');


module.exports = function(config, server){

	server.sockets.on('connection', function(socket) {
		console.log('got socket connection: ');
		var index = sockets.push(socket);
		socket.on('close', function () {
			sockets.splice(index, 1);
		});
    	socket.emit('init', {lastMessages:lastMessages});
	});

	var sockets = new Array();

	var client = new irc.Client(config.irc.server, config.irc.bot_name, {
	    channels: [config.irc.chatroom],
	});

	var lastMessages = [];

	client.addListener('message' + config.irc.chatroom, function (from, message) {
	    var message = {time:new Date(), message:message, user:from};
		lastMessages.push(message);
		if(lastMessages.length > 24){
			lastMessages.shift();
		}
	    sockets.forEach(function(socket){
	    	socket.emit('message', message);
	    });
	});

	client.addListener('error', function(message) {
	    console.log('error: ', message);
	});

}



