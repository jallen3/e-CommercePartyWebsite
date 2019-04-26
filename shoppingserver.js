var http = require("http");
var fs = require('fs');
var port = 3030;
var serverUrl = "127.0.0.1";


var server = http.createServer(function(req, res) {

  var parsedUrl = req.url.split('?')
  console.log(parsedUrl)

  if(req.url == "/about.html") {

    fs.readFile("about.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;
}
  if(req.url == "/productpage.html") {

    fs.readFile("productpage.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
   
    return;

  }
  if(req.url == "/light.html") {

    fs.readFile("light.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/partypackages.html") {

    fs.readFile("partypackages.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
   
    return;

  }

  if(parsedUrl[0] == "/checkout.html") {

    fs.readFile("checkout.html", function(err, text){
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

  if(req.url == "/checkout.js") {

    fs.readFile("checkout.js", function(err, text){
      res.setHeader("Content-Type", "application/javascript");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/PartyBalloons.jpg") {

    fs.readFile("images/PartyBalloons.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }
  
  if(req.url == "/images/Tableware.jpg") {

    fs.readFile("images/Tableware.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/Decorations.jpg") {

    fs.readFile("images/Decorations.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/Banners.png") {

    fs.readFile("images/Banners.png", function(err, text){
      res.setHeader("Content-Type", "image/png");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/Invitations.jpg") {

    fs.readFile("images/Invitations.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
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

  if(req.url == "/images/GenderRevealPP.jpg") {

    fs.readFile("images/GenderRevealPP.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/GradPP.jpg") {

    fs.readFile("images/GradPP.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }

  if(req.url == "/images/MysteryPP.jpg") {

    fs.readFile("images/MysteryPP.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }
  
  if(req.url == "/images/NewYearsPP.jpg") {

    fs.readFile("images/NewYearsPP.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }
 
  if(req.url == "/images/UnicornPP.jpg") {

    fs.readFile("images/UnicornPP.jpg", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }
  
  if(req.url == "/images/Grandma.JPG") {

    fs.readFile("images/Grandma.JPG", function(err, text){
      res.setHeader("Content-Type", "image/jpg");
      res.end(text);
    });
   
    return;

  }
  if(req.url == "/images/sun.png") {

    fs.readFile("images/sun.png", function(err, text){
      res.setHeader("Content-Type", "image/png");
      res.end(text);
    });
   
    return;

  }

});
// console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);