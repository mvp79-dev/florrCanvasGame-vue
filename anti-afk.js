// ==UserScript==
// @name Anti-AFK
// @author kit2d2
// @namespace Tampermonkey Scripts
// @match https://florr.io/*
// @grant none
// ==/UserScript==
    let bd = buttonData[c[0]]
    if(bd && (!bd.color || bd.color === b.fillStyle) && (!bd.font || bd.font === b.font)) {
      let t = untransform(c[1], c[2], b.getTransform())
      let o = lbuttons[c[0]]
      let n = buttons[c[0]] = {
        x: t[0],
        y: t[1],
        d: 1,
        s: performance.now(), // **WAIT BEFORE CLICKING A BUTTON** Removing this will
                              // probably get you banned faster
        fillStyle: b.fillStyle,
        font: b.font
      }
      if(o) {
        n.d = Math.abs(n.x - o.x) + Math.abs(n.y - o.y)
        n.s = o.s
      }
    }
    if(c[0] === `I'm here` && client.bypassAfkCheck.afkButton) {
      afkButton(untransform(c[1], c[2], b.getTransform()))
    }
    lastText = [c, b.fillStyle]
    if(b.fillStyle === '#ffffff') {
      lastWhiteText = [c, b.fillStyle]
    }
    c[0] = textTransform(c[0], b)
    return Reflect.apply(a, b, c)
  } })
  let clicking = false
  const afkButton = function(t) {
    if(clicking) { return }
    clicking = true
    setTimeout(function() {
      clicking = false
      clickAt(t.x, t.y)
    }, 500 + 2000 * Math.random())
  }
