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
      io.on('dance', function(){
        console.log('dancing')
        every((1).second(), function(){
          my.sphero.roll(20, Math.floor(Math.random() * 360))
        })
      })
      io.on('stop', function(){
        my.sphero.stop()
      })
    }
  })

  Cylon.start()
}

module.exports = taySphere
