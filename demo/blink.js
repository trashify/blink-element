/**
 *
 * @name blink-element
 * @version 1.0.1
 * @author Tiaan du Plessis
 * @license MIT
 */

(function (f) { if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = f() } else if (typeof define === 'function' && define.amd) { define([], f) } else { var g; if (typeof window !== 'undefined') { g = window } else if (typeof global !== 'undefined') { g = global } else if (typeof self !== 'undefined') { g = self } else { g = this }g.blink = f() } })(function () {
  var define, module, exports; return (function e (t, n, r) { function s (o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require === 'function' && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = 'MODULE_NOT_FOUND', f } var l = n[o] = {exports: {}}; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n || e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require === 'function' && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({1: [function (require, module, exports) {
    'use strict'

/**
 * Lets a element blink based on the speed provided
 */

    module.exports = function blink () {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { speed: 0.01 }

      if (!args.element) {
        throw new Error('No element provided')
      }

      var isStopped = false
      args.element.style.opacity = 1

      var loop = function loop () {
        if (!isStopped) {
          fadeIn(args.element, args.speed, function () {
            fadeOut(args.element, args.speed, function () {
              return loop()
            })
          })
        }
      }

      loop()

      return {
        start: function start () {
          isStopped = false
          loop()
        },
        stop: function stop () {
          isStopped = true
        }
      }
    }

/**
 * Get requestAnimationFrame for env, otherwise use setTimeout
 */
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
      window.setTimeout(cb, 1000 / 60)
    }

/**
 * Peform fade out animation on element based on speed
 */
    function fadeOut (elem, speed, cb) {
      elem.style.opacity = 1
      var fade = function fade () {
        elem.style.opacity -= speed
        elem.style.opacity < 0 ? cb() : raf(fade)
      }
      fade()
    }

/**
 * Peform fade in animation on element based on speed
 */
    function fadeIn (elem, speed, cb) {
      elem.style.opacity = 0
      var fade = function fade () {
        elem.style.opacity = parseFloat(elem.style.opacity) + speed
        elem.style.opacity > 1 ? cb() : raf(fade)
      }
      fade()
    }
  }, {}]}, {}, [1])(1)
})
