var Cylon = require('cylon')

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
