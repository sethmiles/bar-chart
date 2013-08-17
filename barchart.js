
window.Barchart = function () {

	var hash = {

		width: 200,
		height: 200,

		initialize: function () {
			this.$el = $('<div></div>').addClass('barchart');
			console.log('initializing...');
		},

		setup: function () {

		},

		render: function () {

		},

		setData: function (data) {
			this.data = data || this.options.data;
		}


	}

	var klass = function () {
		this.initialize.apply(this, arguments);
	}

	for(prop in hash){
		klass.prototype[prop] = hash[prop];
	}

	return klass;

}()