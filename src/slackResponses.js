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
      else if (msg.includes('random') || msg.includes('anything') || msg.includes('any colour') || msg.includes('any color')) colour = 'random'
      else if(msg.includes('black')) response = 'Get out of here, Mick'
      else if(msg.includes('white') || msg.includes('grey') || msg.includes('gray')) response = "I'm not really into shades of grey, sorry."
      if(colour){
        io.emit('paint', colour)
        response = "We are in screaming "+colour+"!"
      }
      else response = 'You gotta tell me what colour you want!'
    }

    else if(msg.includes('dance')){
      io.emit('dance')
      response = 'I make the moves up as I go!'
    }

    else if(msg.includes('wander')){
      io.emit('wander')
      response = "I'll find wonderland."
    }

    else if(msg.includes('stop')){
      io.emit('stop')
      response = "Can't stop, wont stop moving..."
    }

    else if(msg.includes('wake up')){
      io.emit('wake')
      response = "I wake up, I'm alive."
    }

    else if(msg.includes('good night')){
      io.emit('paint', 'black')
      io.emit('sleep')
      response = "I'll be having my wildest dreams."
    }

    else{response = "All you had to do was say something I'd understand."}
  }
  return response
}

module.exports = respondTo
