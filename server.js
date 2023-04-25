const express = require('express');
const app = express();

// Set up a route to serve static files
app.use(express.static(__dirname + '/public'));

// Set up a route to serve the home page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/public/home.html');
  });

  app.get('/business-services', function(req, res) {
    res.sendFile(__dirname + '/public/business-services.html');
  });

  app.get('/truckers-health', function(req, res) {
    res.sendFile(__dirname + '/public/truckers-health.html');
  });  

  app.get('/roadside', function(req, res) {
    res.sendFile(__dirname + '/public/roadside.html');
  });  

  app.get('/entertainment', function(req, res) {
    res.sendFile(__dirname + '/public/ex-benefits.html');
  }); 

  app.get('/new-benefits-telehealth-products', function(req, res) {
    res.sendFile(__dirname + '/public/new-benefits.html');
  }); 

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
