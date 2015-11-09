var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var tayBot = require('./slackBot.js')(io)

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(){
  console.log('a user connected to tayBot')
})

http.listen(3000, function(){
  console.log('server is listening on *:3000')
})
