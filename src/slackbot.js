var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true

function slackBot(io){
  slackBot = new Slack(slackToken, autoRecconect, autoMark)

  slackBot.on('open', function(){
    var channel = slackBot.getChannelGroupOrDMByID('C0E5V3CCC')
    console.log("Connected to "+slackBot.team.name+" as "+slackBot.self.name)
    channel.send("I'm awake, I'm awake.")
  })

  slackBot.on('message', function(message){
    // console.log(message)
    var channel = slackBot.getChannelGroupOrDMByID(message.channel)
    var user = slackBot.getUserByID(message.user)
    if(message.text.includes('tay')){

      if(message.text.includes("tuesday")){
        response = "Is it taco tuesday?! :taco:"
      }

      else if(message.text.includes("hate")){
        response = "Haters gonna hate, hate, hate, hate, hate."
      }

      else if(message.text.includes("play")){
        response = "Players gonna play, play, play, play play."
      }

      else if(message.text.includes("fake")){
        response = "Fakers gonna fake, fake, fake, fake, fake."
      }

      else if(message.text.includes("heartbreak")){
        response = "Heartbreakers gonna break, break, break, break, break."
      }

      else if(message.text.includes("paint")){
        var colour = null
        if(message.text.includes('red')) colour = 'red'
        else if(message.text.includes('orange')) colour = 'orange'
        else if(message.text.includes('yellow')) colour = 'yellow'
        else if(message.text.includes('green')) colour = 'green'
        else if(message.text.includes('blue')) colour = 'blue'
        else if(message.text.includes('purple')) colour = 'purple'
        else if(message.text.includes('pink')) colour = 'pink'
        if(colour){
          io.emit('paint', colour)
          response = 'Painting it '+colour+' for you'
        }
        else response = 'What colour would you like? I can paint it red, orange, yellow, green, blue, purple or pink!'
      }

      else if(message.text.includes('dance')){
        io.emit('dance')
        response = 'I make the moves up as I go!'
      }

      else if(message.text.includes('wander')){
        io.emit('wander')
        response = "I'm off for a stroll then!"
      }

      else if(message.text.includes('stop')){
        io.emit('stop')
        response = "Can't stop, wont stop moving..."
      }

      else if(message.text.includes('wake up')){
        io.emit('start')
        response = "Grab a brush put on a little make up!"
      }

      else if(message.text.includes('good night')){
        io.emit('paint', 'black')
        io.emit('sleep')
        response = "Maybe see you in your wildest dreams..."
      }

      else{response = "Sorry, I don't know what you mean"}
      channel.send(response)
    }
  })

  slackBot.on('error', function(err){
    console.log("Error", err)
  })

  slackBot.login()
}

module.exports = slackBot
