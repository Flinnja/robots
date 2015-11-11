var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var ioListener = require('socket.io/node_modules/socket.io-client')('http://localhost:3000')
var tayBot = require('./src/slackBot.js')(io)
// var taySphere = require('./src/sphero.js')(ioListener)

app.use(express.static('public'));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(){
  console.log('a user connected to tayBot')
})

http.listen(3000, function(){
  console.log('server is listening on *:3000')
})
