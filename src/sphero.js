var Cylon = require('cylon')
var colourSpaces = {
  'red': 'FF0000',
  'orange': 'FF9900',
  'yellow': 'FFBC00',
  'green': '00FF00',
  'blue': '0000FF',
  'purple': 'AA00FF',
  'pink': 'FF00FF'
}

function taySphere(io){
  Cylon.robot({
    name: 'taySphere',

    connections: {
      sphero: { adaptor: 'sphero', port: '/dev/tty.Sphero-YRG-AMP-SPP'}
    },

    devices: {
      sphero: { driver: 'sphero'}
    },

    work: function(my){
      dancing = false
      wandering = false

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
        my.sphero.stop()
      })

      io.on('paint', function(colour){
        my.sphero.color(colourSpaces[colour])
      })

      every((1).second(), function(){
        if(dancing){
          my.sphero.roll(20, Math.floor(Math.random() * 360))
          my.sphero.stop()
        }
        else if(wandering){
          my.sphero.roll(60, Math.floor(Math.random() * 360))
        }
      })
    }
  })

  Cylon.start()
}

module.exports = taySphere
