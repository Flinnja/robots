var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true

tayBot = new Slack(slackToken, autoRecconect, autoMark)

tayBot.on('open', function(){
  console.log("Connected to "+tayBot.team.name+" as "+tayBot.self.name)
})

tayBot.on('message', function(message){
  channel = tayBot.getChannelGroupOrDMByID(message.channel)
  user = tayBot.getUserByID(message.user)
  response = 'What is it '+user.name+"?"
  channel.send(response)
})

tayBot.on('error', function(err){
  console.log("Error", err)
})

tayBot.login()
