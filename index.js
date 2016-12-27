'use strict'

/**
 * Lets a element blink based on the speed provided
 */
module.exports = function blink (args = { speed: 0.01 }) {
  if (!args.element) { throw new Error('No element provided') }

  let isStopped = false
  args.element.style.opacity = 1

  const loop = () => {
    if (!isStopped) {
      fadeIn(args.element, args.speed, () => {
        fadeOut(args.element, args.speed, () => loop())
      })
    }
  }

  loop()

  return {
    start: () => {
      isStopped = false
      loop()
    },
    stop: () => {
      isStopped = true
    }
  }
}

/**
 * Get requestAnimationFrame for env, otherwise use setTimeout
 */
const raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || ((cb) => {
  window.setTimeout(cb, 1000 / 60)
})

/**
 * Peform fade out animation on element based on speed
 */
function fadeOut (elem, speed, cb) {
  elem.style.opacity = 1
  const fade = () => {
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
  const fade = () => {
    elem.style.opacity = parseFloat(elem.style.opacity) + speed
    elem.style.opacity > 1 ? cb() : raf(fade)
  }
  fade()
}
