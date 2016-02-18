var express = require("express")
var app = express();
var path = require("path")
var Server = require('http').Server;
var http = Server(app);
var io = require('socket.io')(http);

console.log("data >> >>"+path.join(__dirname,"images"))
app.use(express.static(path.join(__dirname,"images")));
app.all('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})


module.exports = app;

//http.listen(3000)