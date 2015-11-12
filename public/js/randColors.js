var colourSpaces = {
  'colour': function(){return randBetween(0,1)},
  'red': function(){return randBetween(.94,1.02)},
  'orange': function(){return randBetween(.02,.12)},
  'yellow': function(){return randBetween(.12,.19)},
  'green': function(){return randBetween(.19,.47)},
  'blue': function(){return randBetween(.47,.73)},
  'purple': function(){return randBetween(.73,.81)},
  'pink': function(){return randBetween(.81,.94)}
}

function randBetween(min,max){
  return Math.random()*(max-min)+min
}

function makeColour(range){
  var h = colourSpaces[range]()
  h %= 1
  return HSVtoRGB(h, .7, .95)
}

function setColours(rgb){
  r = rgb.r
  g = rgb.g
  b = rgb.b
  r1 = ((255 - r)+100)%255
  g1 = ((255 - g)+100)%255
  b1 = ((255 - b)+100)%255
  $("body").css({'background-color': 'rgb('+r+","+g+","+b+")",
                  'color': 'rgb('+r1+","+g1+","+b1+")"})
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
