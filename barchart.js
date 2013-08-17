
Barchart = function () {

	var hash = {

		width: 200,
		height: 200,
		margin: {
			top: 20,
			right: 20,
			bottom: 30,
			left: 40
		},
		// barPadding: 10,
		titleAccessor: 'title',
		valueAccessor: 'value',
		transitionDuration: 500,

		initialize: function (options) {
			this.setOptions(options);
			this.$el = $('<div></div>').addClass('barchart');
			this.el = this.$el[0];
			this.setup();
			this.render();
		},

		setup: function () {
			this.setDimensions();
			this.createScales();
			this.visualization = d3.select(this.el)
				.attr('width', this.width + this.margin.left + this.margin.right)
				.attr('height', this.height + this.margin.top + this.margin.bottom);

			this.$el.css({
				position: 'relative'
			});
		},

		render: function () {
			var that = this;
			this.yScale.domain(this.getBarDomain());
			this.setBarWidth();

			this.chart = this.visualization.selectAll('.bar')
				.data(this.data, function(d){
					return d[that.titleAccessor];
				});

			this.chart
			  .enter().append('div')
				.attr('class', 'bar')
				.style('position', 'absolute')
				.style('width', this.barWidth)
				.style('height', 0)
				.style('bottom', 0)
				.style('left', function (d, index) {
					return that.barWidth * index;
				});

			this.chart.transition().duration(this.transitionDuration)
				.style('width', this.barWidth)
				.style('height', function (d) {
					return that.yScale(d[that.valueAccessor]);
				});

			this.chart
			  .exit().transition().duration(this.transitionDuration)
			  	.attr('width', 0)
			  	.remove()
		},

		getBarDomain: function () {
			var max = 0, min = 0, i = 0;
			for(i; i < this.data.length; i++){
				if(this.data[i][this.valueAccessor] > max){
					max = this.data[i][this.valueAccessor];
				} else if(this.data[i][this.valueAccessor] < min){
					min = this.data[i][this.valueAccessor];
				}
			}
			console.log([max, min]);
			return [max, min];
		},

		createScales: function () {
			this.yScale = d3.scale.linear()
				.range([this.height, 0]);
		},

		setBarWidth: function () {
			this.barWidth = this.width / this.data.length;
		},

		setDimensions: function () {
			this.width = this.width - this.margin.left - this.margin.right;
			this.height = this.height - this.margin.top - this.margin.bottom;
		},

		setData: function (data) {
			this.data = data;
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