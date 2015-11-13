var respondTo = function(msg,usr,dm,io){
  var response = ''
  if(msg.includes('tay') || dm){

    if(multi.greetings.some( elem => msg.includes(elem) )){
      io.emit('chat')
      response += "Hey there, "+usr.name+", nice to meet you. Where you been?"
    }

    if(msg.includes("tuesday")){
      io.emit('chat')
      response += "Is it taco tuesday?! :taco: \n"
    }

    if(msg.includes("awake") && msg.includes('?')){
      io.emit('chat')
      response += "I'm wide awake, yeah. \n"
    }

    if(msg.includes("hate")){
      io.emit('chat')
      response += "Haters gonna hate, hate, hate, hate, hate. \n"
    }

    if(msg.includes("play")){
      io.emit('chat')
      response += "Players gonna play, play, play, play play. \n"
    }

    if(msg.includes("fake")){
      io.emit('chat')
      response += "Fakers gonna fake, fake, fake, fake, fake. \n"
    }

    if(msg.includes("heartbreak")){
      io.emit('chat')
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

    if(multi.wander.some( elem => msg.includes(elem) )){
      io.emit('wander')
      response += "I'll find wonderland. \n"
    }

    if(msg.includes('roll')){
      if(msg.includes('tay')) response += 'You have to use direct messages to tell me where to roll.\n'
      else{
        inst = msg.split(' ')
        if(inst.length == 4){
          direction = directions[inst[1]]
          secs = inst[2]
          io.emit('roll', {dir: direction, time: secs})
          response += 'Rolling '+inst[1]+' in a straight line down'
        }
        else response += 'Maybe that got lost in translation.\n'
      }
    }

    if(msg.includes('stop')){
      io.emit('stop')
      response += "Can't stop, wont stop moving... \n"
    }

    if(msg.includes('calibrate')){
      io.emit('calibrate')
      response += 'You spin me around.'
    }

    if(msg.includes('done calibrating')){
      io.emit('finishCalibrate')
      response += "I'm just a bot on a mission but I'm ready to fly."
    }

    if(msg.includes('wake up')){
      io.emit('wake')
      response += "I wake up, I'm alive. \n"
    }

    if(msg.includes('good night')){
      io.emit('sleep')
      response += "People like me are gone forever when you say goodbye. \n"
    }

    //SPECIAL DEBUGGING MESSAGE RESPONSES
    if(msg == 'tay clear') response = ".\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n."

    if(!response){
      response = "All you had to do was say something I'd understand."
      io.emit('chat')
    }
  }
  return response
}

var  multi = {
  greetings: ['hey','hi','hello','whatup',"what's up",'good morning','good evening','greetings'],
  wander: ['wander','stroll','explore'],
  colours: ['red','orange','yellow','green','blue','purple','pink'],
  anyColour: ['random','anything','any','any colour','any color','whatever','surprise'],
  grey: ['white','grey','gray'],
}

var directions = {
  forward: 0,
  back: 180,
  right: 90,
  left: 270
}

module.exports = respondTo
