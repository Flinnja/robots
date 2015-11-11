var Cylon = require('cylon')
var colourSpaces = {
  'red': '0xFF0000',
  'orange': '0xFFAA00',
  'yellow': '0xFFFF00',
  'green': '0x00FF00',
  'blue': '0x0000FF',
  'purple': '0xAA00FF',
  'pink': '0xFF00FF'
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

      io.on('dance', function(){
        dancing = true
      })

      io.on('stop', function(){
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
      })
    }
  })

  Cylon.start()
}

module.exports = taySphere
