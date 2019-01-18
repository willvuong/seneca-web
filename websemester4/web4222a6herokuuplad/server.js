var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.use(express.static("angular-app")); 

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
});