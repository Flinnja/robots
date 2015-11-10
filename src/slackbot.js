var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true

function slackBot(io){
  slackBot = new Slack(slackToken, autoRecconect, autoMark)

  slackBot.on('open', function(){
    console.log("Connected to "+slackBot.team.name+" as "+slackBot.self.name)
  })

  slackBot.on('message', function(message){
    channel = slackBot.getChannelGroupOrDMByID(message.channel)
    user = slackBot.getUserByID(message.user)
    if(message.text.indexOf('tay')>-1){
      if(message.text.indexOf("hate")>-1){
        response = "Haters gonna hate, hate, hate, hate, hate."
      }
      else if(message.text.indexOf("play")>-1){
        response = "Players gonna play, play, play, play play."
      }
      else if(message.text.indexOf("fake")>-1){
        response = "Fakers gonna fake, fake, fake, fake, fake."
      }
      else if(message.text.indexOf("heartbreak")>-1){
        response = "Heartbreakers gonna break, break, break, break, break."
      }
      else if(message.text.indexOf("paint")>-1){
        var colour = null
        if(message.text.indexOf('red')>-1) colour = 'red'
        else if(message.text.indexOf('orange')>-1) colour = 'orange'
        else if(message.text.indexOf('yellow')>-1) colour = 'yellow'
        else if(message.text.indexOf('green')>-1) colour = 'green'
        else if(message.text.indexOf('blue')>-1) colour = 'blue'
        else if(message.text.indexOf('purple')>-1) colour = 'purple'
        else if(message.text.indexOf('pink')>-1) colour = 'pink'
        if(colour){
          io.emit('paint', colour)
          response = 'Painting it '+colour+' for you'
        }
        else response = 'What colour would you like? I can paint it red, orange, yellow, green, blue, purple or pink!'
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
