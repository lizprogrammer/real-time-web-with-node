var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log('Client connected...');
    // emit the messages event on the client

    client.emit('messages', {hello: 'world'});
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client){
    client.on('messages', function (data) {
        console.log(data);
    });
});

server.listen(8080);
