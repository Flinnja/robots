var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var tayBot = require('./src/slackBot.js')(io)

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
