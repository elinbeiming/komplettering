const http = require('http');
const os = require('os');

var server = http.createServer(function functionNamere(request, respons) {
  respons.writeHead(200, {"Content-type": "text/html"});
  respons.write("Hello");
  respons.end();
})

app.listen(8000);
