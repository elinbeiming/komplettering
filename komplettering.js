var http = require('http');
var os = require('os');

var server = http.createServer(function (request, respons) {
  respons.writeHead(200, {"Content-type": "text/html"});
  respons.write(os.hostname());
  respons.write(os.type());
  respons.write(os.uptime());

  respons.end();
})

server.listen(3000);
