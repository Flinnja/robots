# robots

## setup
1. Clone down this repo
2. `cd` into your cloned repo and run `npm install`
3. If the package install fails, it is probably because one or more packages are trying to use an old version of serialport. See below for details.
4. Create a new bot for your slack team at https://YOURTEAM.slack.com/services/new/bot
5. Create a .env file based on .env-example and paste in your slack bot API token
6. Run index.js on a server, or use `npm run devstart` to run using nodemon for testing new changes

## Setting up sphero
1. Follow the instructions for pairing with your spehro over on the [sphero.js readme](https://github.com/orbotix/sphero.js)
2. Copy the serial port address from the pairing instructions and set ```javascript var spheroport ``` to equal it on line 14 of src/sphero.js (yes, this should and will be part of the .env file in future)
3. With the server running and connected to slack, send your slack bot a message containing "wake up" to connect the cylon script to your sphero. Once the sphero lights up white it is ready to recieve further commands via the chat bot.

## Adding commands
It is pretty easy to add your own commands for your tayBot. In src/slackResponses.js imply add a new conditional after line 4 using the following form:
```JavaScript
    if(message.text.includes("YOUR KEYWORDS")){
      response = "DESIRED RESPONSE"
    }
```
Currently all commands will be acted upon if they are sent via a direct message to the bot or if they are sent over a channel the bot is a member of and they include the word "tay" (the name of the original bot, you can change this on src/slackResponses:3)

If you want to make some more complex responses, try logging the message object to see what you can access. You can also check out the examples at https://github.com/slackhq/node-slack-client which this bot uses, or study the existing code in this project to see how multiple inputs can lead to the same response using javascripts .some function.

If you want your slack command to control the sphero, include an ```javascript io.emit() ``` function inside the conditional, and then in src/sphero.js include an ```javascript io.on ``` function inside the work block (beginning line 29), which can then include cylon code.

## Serialport problems
The current version of [cylon-sphero](https://github.com/orbotix/sphero.js) uses an old version of [serialport](https://github.com/voodootikigod/node-serialport) which was not compatible with my mac, and may well not be compatible with your machine. You can try to use the official version by removing ```json "sphero": "flinnja/sphero.js"``` from the dependencies in package.json and running `npm install sphero` instead, but by using my forked version at https://github.com/Flinnja/sphero.js you will be using the latest version of serialport which should be more compatible.
