var respondTo = function(msg,usr,io){
  var response = ''
  if(msg.includes('tay')){

    if(msg.includes("tuesday")){
      response = "Is it taco tuesday?! :taco:"
    }

    else if(msg.includes("hate")){
      response = "Haters gonna hate, hate, hate, hate, hate."
    }

    else if(msg.includes("play")){
      response = "Players gonna play, play, play, play play."
    }

    else if(msg.includes("fake")){
      response = "Fakers gonna fake, fake, fake, fake, fake."
    }

    else if(msg.includes("heartbreak")){
      response = "Heartbreakers gonna break, break, break, break, break."
    }

    else if(msg.includes("paint")){
      var colour = null
      if(msg.includes('red')) colour = 'red'
      else if(msg.includes('orange')) colour = 'orange'
      else if(msg.includes('yellow')) colour = 'yellow'
      else if(msg.includes('green')) colour = 'green'
      else if(msg.includes('blue')) colour = 'blue'
      else if(msg.includes('purple')) colour = 'purple'
      else if(msg.includes('pink')) colour = 'pink'
      if(colour){
        io.emit('paint', colour)
        response = 'Painting it '+colour+' for you'
      }
      else response = 'What colour would you like? I can paint it red, orange, yellow, green, blue, purple or pink!'
    }

    else if(msg.includes('dance')){
      io.emit('dance')
      response = 'I make the moves up as I go!'
    }

    else if(msg.includes('wander')){
      io.emit('wander')
      response = "I'm off for a stroll then!"
    }

    else if(msg.includes('stop')){
      io.emit('stop')
      response = "Can't stop, wont stop moving..."
    }

    else if(msg.includes('wake up')){
      io.emit('wake')
      response = 'Hold on a bit...'
    }

    else if(msg.includes('good night')){
      io.emit('paint', 'black')
      io.emit('sleep')
      response = 'Maybe see you in your wildest dreams...'
    }

    else{response = "Sorry, I don't know what you mean"}
  }
  return response
}

module.exports = respondTo
