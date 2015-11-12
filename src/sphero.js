var Cylon = require('cylon')

var colourSpaces = {
  'red': 'FF0000',
  'orange': 'FF9900',
  'yellow': 'FFD700',
  'green': '00FF00',
  'blue': '0000FF',
  'purple': '9400D3',
  'pink': 'FF00DD',
  'black': '000000',
  'white': 'FFFFFF'
}
var spheroPort = '/dev/tty.Sphero-YRG-AMP-SPP'
var awake = false

function taySphere(io){
  Cylon.robot({
    name: 'taySphere',

    connections: {
      sphero: { adaptor: 'sphero', port: spheroPort }
    },

    devices: {
      sphero: { driver: 'sphero', connection: 'sphero'}
    },

    work: function(my){
      var dancing = false
      var wandering = false
      my.sphero.color(colourSpaces["white"])

      io.on('wander', function(){
        dancing = false
        wandering = true
      })

      io.on('dance', function(){
        wandering = false
        dancing = true
      })

      io.on('stop', function(){
        wandering = false
        dancing = false
      })

      io.on('paint', function(colour){
        if(awake){
          if(colour = 'colour') my.sphero.randomColor()
          else my.sphero.color(colourSpaces[colour])
        }
      })

      every((1).second(), function(){
        if(awake){
          if(dancing){
            my.sphero.roll(20, Math.floor(Math.random() * 360))
            my.sphero.stop()
          }
          else if(wandering){
            my.sphero.roll(60, Math.floor(Math.random() * 360))
          }
        }
      })

      my.sphero.on('error', function(err){
        console.log("Error with the taySphere: ", error)
      })
    }
  })

  io.on('wake', function(){
    if(!awake){
      Cylon.start()
      awake = true
    }
  })

  io.on('sleep', function(){
    if(awake){
      awake = false
      Cylon.halt()
    }
  })
}

module.exports = taySphere
