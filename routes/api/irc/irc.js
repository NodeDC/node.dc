var irc = require('irc');

var sockets = new Array();

var client = new irc.Client('chat.freenode.net', 'nodedc_bot', {
        channels: ['#node.dc'],
});

var lastMessages = [];

client.addListener('message#node.dc', function (from, message) {
    onsole.log("message from irc: " + from + ' => #node.dc: ' + message);
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

module.exports = function(server){

	server.sockets.on('connection', function(socket) {
		console.log('got socket connection: ');
		var index = sockets.push(socket);
		socket.on('close', function () {
			sockets.splice(index, 1);
		});
    	socket.emit('init', {lastMessages:lastMessages});
	});

}



