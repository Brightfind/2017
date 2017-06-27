var myMixin = {
		methods: {
			mousemoveDocument: function(event) {
				mouseLocs.push({ x: e.pageX, y: e.pageY });

				if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
					mouseLocs.shift();
				}
			},
			hello: function() {
				const _self = this
				console.log(_self.$el)
			}
		}
	}
	// define a component that uses this mixin
fetch('./data/nav.json')
.then(function(response) {
	return response.json()
}).then(function(data) {
	let __NAVIGATION_DATA = data
	console.log(__NAVIGATION_DATA[0])

	var app = new Vue({
		el: '#navigation',
		data: {
			items: __NAVIGATION_DATA,
			subitems: []
		},
		mixins: [myMixin],
		mounted() {
			this.hello()
		},
		methods: {
			loadSubMenu: function(event, index) {
				const _self = this
				let timer = 0
				setTimeout(function() {
					_self.subitems = __NAVIGATION_DATA[index].subnav
					_self.hello()
				}, 200)
			},
			nav: function() {

			}
		}
	})
})
