var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')
var respondTo = require('./slackResponses.js')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true

var generalID = 'C0E5V3CCC'

function slackBot(io){
  slackBot = new Slack(slackToken, autoRecconect, autoMark)

  slackBot.on('open', function(){
    var channel = slackBot.getChannelGroupOrDMByID(generalID)
    console.log("Connected to "+slackBot.team.name+" as "+slackBot.self.name)
    channel.send("I'm back!")
  })

  slackBot.on('message', function(message){
    var dm = false
    var channel = slackBot.getChannelGroupOrDMByID(message.channel)
    // console.log(channel)
    if(channel.id.charAt(0) == 'D') dm = true
    var user = slackBot.getUserByID(message.user)
    var msgText = message.text.toLowerCase()
    var response = respondTo(msgText, user, dm, io)
    channel.send(response)
  })

  slackBot.on('error', function(err){
    console.log("Error", err)
  })

  slackBot.login()
}

module.exports = slackBot
