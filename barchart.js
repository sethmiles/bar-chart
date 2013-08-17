
Barchart = function () {

	var hash = {

		width: 200,
		height: 200,

		initialize: function (options) {
			this.setOptions(options);
			this.$el = $('<div></div>').addClass('barchart');
			console.log('initializing...');
		},

		setup: function () {

		},

		render: function () {

		},

		setData: function (data) {
			this.data = data || this.options.data;
		},

		setOptions: function (options) {
			for(prop in options){
				this[prop] = options[prop];
			}
		}

	}

	var Barchart = function (options) {
		this.initialize.apply(this, arguments);
	}

	for(prop in hash){
		Barchart.prototype[prop] = hash[prop];
	}

	return Barchart;

}()