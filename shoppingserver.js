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

  if(req.url == "/shoppingcart.js") {

    fs.readFile("shoppingcart.js", function(err, text){
      res.setHeader("Content-Type", "application/javascript");
      res.end(text);
    });
   
    return;

  }
  if(req.url == "/images/balloon2.jpeg") {

    fs.readFile("images/balloon2.jpeg", function(err, text){
      res.setHeader("Content-Type", "image/jpeg");
      res.end(text);
    });
   
    return;

  }
  if(req.url == "/stylesheet.css") {

    fs.readFile("stylesheet.css", function(err, text){
      res.setHeader("Content-Type", "text/css");
      res.end(text);
    });
   
    return;

  }
  

 
  
  
  

});
console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);