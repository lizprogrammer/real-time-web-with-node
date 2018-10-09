var fs = require('fs'); // require filesystem
var http = require('http');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("./text/readme_copy.md");
    request.pipe(newFile);
    
    request.on('end', function(){
        response.end('uploaded!');
    });
}).listen(8080);