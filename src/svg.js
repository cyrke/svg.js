
// Use the `svg()` function to create a SVG document within a given html element. The first argument can either be an id of the element or the selected element itself.
//
//     var draw = svg('paper').size(300, 300)
//     var rect = draw.rect(100, 100).attr({ fill: '#f06' })



// Shortcut for creating a svg document
this.svg = function(element) {
  if (SVG.supported)
    return new SVG.Doc(element)
}

// The main wrapping element
this.SVG = {
  /* default namespaces */
  ns:    'http://www.w3.org/2000/svg'
, xlink: 'http://www.w3.org/1999/xlink'
  
  /* defs id sequence */
, did: 0
  
  // Method for element creation
, create: function(element) {
    return document.createElementNS(this.ns, element)
  }
  // Method for extending objects
, extend: function(object, module) {
    for (var key in module)
      object.prototype[key] = module[key]
  }
  
}

// svg support test
SVG.supported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS(SVG.ns,'svg').createSVGRect
})()

if (!SVG.supported) return false;