var https = require("https");
var fs = require("fs");

// Generate a private key and a certificate
// https://gist.github.com/h09shais/da979558f5607c48c52576bb3a5d9f75

var options = {
  key: fs.readFileSync("privatekey.pem"),
  cert: fs.readFileSync("certificate.pem")
};

https
  .createServer(options, function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(8000);
