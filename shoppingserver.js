var http = require("http");
var fs = require('fs');
var port = 3030;
var serverUrl = "127.0.0.1";


var server = http.createServer(function(req, res) {


  if(req.url == "/productpage.html") {

    fs.readFile("productpage.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "productlisting.json") {
    fs.readFile("productlist.json", function(err, text){
        res.setHeader("Content-Type", "text/json");
        res.end(text);
      });

      return;
  }
  
  

});
console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);