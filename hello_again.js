var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Dog is running.\n");
	setTimeout(function(){ //Represent long running process
		response.write("Dog is done.\n");
		response.end();
	}, 5000); // 5000 ms = 5 seconds
}).listen(8080);
