var socket = io()

socket.on('chat', function(user){
  $('.status').text('Chatting away')
})

socket.on('dance', function(){
  $('.status').text('Dancing!')
})

socket.on('wander', function(){
  $('.status').text('Going for a stroll')
})

socket.on('stop', function(){
  $('.status').text("J chillin'")
})

socket.on('paint', function(colour){
  if(colour != 'black' && colour != 'white'){
    setColours(makeColour(colour))
  }
  $('.status').text('Colouring your life')
})

socket.on('wake', function(){
  $('.body-status').text("Awake")
})

socket.on('sleep', function(){
  $('.body-status').text("Asleep")
})
