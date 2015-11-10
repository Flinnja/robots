function makeColour(range){
  var goldenRatio = 0.618033988749895
  var h = Math.random()
  h += goldenRatio
  h %= 1
  return HSVtoRGB(h, .5, .95)
}

function setColours(rgb){
  r = rgb.r
  g = rgb.g
  b = rgb.b
  r1 = limitColour((255 - r)+100)
  g1 = limitColour((255 - g)+100)
  b1 = limitColour((255 - b)+100)
  console.log(r1,g1,b1)
  $("body").css({'background-color': 'rgb('+r+","+g+","+b+")",
                  'color': 'rgb('+r1+","+g1+","+b1+")"})
}

function limitColour(colour){
  if(colour<0) return 255+colour
  else if(colour>255) return colour-255
  else return colour
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
