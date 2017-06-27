// IMPORTS
import Throttled from '../../core/_js_core/utilLib/throttled'
import raf from '../../core/_js_core/utilLib/raf'

// add or remove BackToTop (bt) Element
const btElement = function() {
	this.addBackToTop = function() {
		if (!document.getElementById('BackToTop')) {
			let backToTop = document.createElement('div')
			let mainElement = document.body
			mainElement.appendChild(backToTop)
			backToTop.setAttribute('id', 'BackToTop')
			backToTop.setAttribute('class', 'back-to-top')
			backToTop.innerHTML = '<span>Back to Top</span>'

			setTimeout(function() {
				backToTop.classList.add('back-to-top--scrolled')
				backToTop.addEventListener('click', ()=>{
					btAnimateToTop(0, 2500)
				})
			}, 5)
		} else {
			document.getElementById('BackToTop').classList.add('back-to-top--scrolled')
		}
	},
	this.hideBackToTop = function() {
		if (document.getElementById('BackToTop')) {
			document.getElementById('BackToTop').classList.remove('back-to-top--scrolled')
		}
	}
}
// MAIN FUNCTION
// function scrollToY(scrollTargetY, speed) {...}
// scrollTargetY: the target scrollY property of the window
// speed: time in pixels per second
const btAnimateToTop = function(scrollTargetY, speed) {
	let SCROLL_Y = window.scroll_Y || document.documentElement.scrollTop
	let SCROLL_TARGET_Y = scrollTargetY || 0
	let SPEED = speed || 2000
	let easing = function easeInOutQuint(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 5)
		}
		return 0.5 * (Math.pow((pos - 2), 5) + 2)
	}
	let currentTime = 0

	// min time .1, max time .8 seconds
	let time = Math.max(.1, Math.min(Math.abs(SCROLL_Y - SCROLL_TARGET_Y) / speed, .8))

	// add animation loop
	function tick() {
		currentTime += 1 / 60

		let p = currentTime / time
		let t = easing(p)

		if (p < 1) {
			raf(tick)
			window.scrollTo(0, SCROLL_Y + ((SCROLL_TARGET_Y - SCROLL_Y) * t))
		} else {
			window.scrollTo(0, SCROLL_TARGET_Y)
		}
	}
	// call it once to get started
	tick()

}
// INITIATE BT
// bodyTop is goofy due to IE document.body.scrollTop bug
const btInit = function() {
	const bt = new btElement
	let bodyTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
	if (bodyTop > 200) {
		bt.addBackToTop()
	} else {
		bt.hideBackToTop()
		return false
	}
}
// Throttle btInit on scroll
// window.onscroll = function() { Throttled(btInit(), 400) }
document.addEventListener('scroll', () => {
	Throttled(btInit(), 400)
}, false)
