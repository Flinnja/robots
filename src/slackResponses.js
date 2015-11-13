var  multi = {
  greetings: ['hey','hi','hello','whatup',"what's up",'good morning','good evening','greetings'],
  wander: ['wander','stroll','explore'],
  colours: ['red','orange','yellow','green','blue','purple','pink'],
  anyColour: ['random','anything','any','any colour','any color','whatever','surprise'],
  grey: ['white','grey','gray'],
}

var respondTo = function(msg,usr,dm,io){
  var response = ''
  if(msg.includes('tay') || dm){

    if(multi.greetings.some( elem => msg.includes(elem) )){
      response += "Hey there, "+usr.name+", nice to meet you. Where you been?"
    }

    if(msg.includes("tuesday")){
      response += "Is it taco tuesday?! :taco: \n"
    }

    if(msg.includes("hate")){
      response += "Haters gonna hate, hate, hate, hate, hate. \n"
    }

    if(msg.includes("play")){
      response += "Players gonna play, play, play, play play. \n"
    }

    if(msg.includes("fake")){
      response += "Fakers gonna fake, fake, fake, fake, fake. \n"
    }

    if(msg.includes("heartbreak")){
      response += "Heartbreakers gonna break, break, break, break, break. \n"
    }

    if(msg.includes("paint")){
      var colour = null

      if(multi.colours.some(function(elem){
        colour = elem
        return msg.includes(elem)
      })){}

      else if (multi.anyColour.some( elem => msg.includes(elem) )) colour = 'colour'
      else if(msg.includes('black')) response += 'Get out of here, Mick. \n'
      else if (multi.grey.some( elem => msg.includes(elem) )) response += "I'm not really into shades of grey, sorry. \n"
      if(colour){
        io.emit('paint', colour)
        response += "We are in screaming "+colour+"! \n"
      }
      else response += 'You gotta tell me what colour you want! \n'
    }

    if(msg.includes('dance')){
      io.emit('dance')
      response += 'I make the moves up as I go! \n'
    }

    if (multi.wander.some( elem => msg.includes(elem) )){
      io.emit('wander')
      response += "I'll find wonderland. \n"
    }

    if(msg.includes('stop')){
      io.emit('stop')
      response += "Can't stop, wont stop moving... \n"
    }

    if(msg.includes('wake up')){
      io.emit('wake')
      response += "I wake up, I'm alive. \n"
    }

    if(msg.includes('good night')){
      io.emit('paint', 'black')
      io.emit('sleep')
      response += "People like me are gone forever when you say goodbye. \n"
    }

    if(!response) response = "All you had to do was say something I'd understand."
  }
  return response
}

module.exports = respondTo
