var http = require('http');
var os = require('os');

var server = http.createServer(function (request, respons) {
  respons.writeHead(200, {"Content-type": "text/html"});
  respons.write(os.hostname());
  respons.end();
})

app.listen(3000);
