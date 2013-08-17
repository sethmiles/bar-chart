Bar Chart
=========

This bar chart contains the esential code to build a reusable data driven bar chart that can be updated. The chart is built on d3.js and follows some backbone.js naming conventions.

#How to Use It

Running Barchart.js attaches the Barchart class to the window. The code below shows how easy it us to get a barchart built and appended to the DOM.

```javascript
var myBarchart = new Barchart({
	width: 300,
	height: 300,
	data: data1
});

$('body').append(myBarchart.$el);
```

###Options

There are several options that can be passed into the barchart constructor. They are listed at the top of barchart.js. Any method named the same as in the Barchart will overwrite the Barchart's method. Here is a list of the options currently in place.

Option | Type | Description
--- | --- | ---
width | Number | Defines width of bar chart
height | Number | Defines height of bar chart
margin | hash including top, right, bottom, and left | Defines the margins of the bar chart
barPadding | Number | The padding inbetween each bar
titleAccessor | String | The name of the value in the data used for the bar title (and unique identifier)
valueAccessor | String | The name of the value in the data for the number
transitionDuration | Number | Length of animation durations in miliseconds
