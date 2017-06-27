// Throttled is borrowed (stolen) from underscore. It thottles
// how many times a function can be fired. used mainly for scroll
const Throttled = function(func, wait, options) {
		let now = Date.now || function() {
		return new Date().getTime();
	}
	let context
	let args
	let result
	let timeout = null
	let previous = 0
	if (!options) options = {}
	const later = function() {
		previous = options.leading === false ? 0 : now()
		timeout = null
		result = func.apply(context, args)
		if (!timeout) context = args = null
	}
	return function() {
		if (!previous && options.leading === false) previous = now()
		var remaining = wait - (now() - previous)
		context = this
		args = arguments
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout)
				timeout = null
			}
			previous = now()
			result = func.apply(context, args)
			if (!timeout) context = args = null
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining)
		}
		return result
	}
}
module.exports = Throttled