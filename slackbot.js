var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')
var wit = require('node-wit')
var fs = require('fs')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true

slackBot = new Slack(slackToken, autoRecconect, autoMark)

slackBot.on('open', function(){
  console.log("Connected to "+slackBot.team.name+" as "+slackBot.self.name)
})

slackBot.on('message', function(message){
  channel = slackBot.getChannelGroupOrDMByID(message.channel)
  user = slackBot.getUserByID(message.user)
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
  else{response = "Sorry, I don't know what you mean"}
  channel.send(response)
})

slackBot.on('error', function(err){
  console.log("Error", err)
})

slackBot.login()


module.exports = slackBot
