// Canvas and drawing context variables
var canvas;
var context;
// Chart settings
var chartMargin;
var chartAxisSpace;
var chartWidth;
var chartHeight;
// bar variables
var numBars = 0; // total number of bars
var barMargin = 20; // margin between bars
var barWidth = 0; // bar width
var maxValue = 0; // maximum data value for the bars
// number of y-axis labels
var numYLabels;
// bar animation variables
var idxStep;
var numSteps;
var growSpeed;
// Chart JSON sample data
var chartData = {'bars':[
{'title':'Average','value':'12'},
{'title':'Adult','value':'14'},
{'title':'Male','value':'16'},
{'title':'Female','value':'12'},
]};
// initialize the board width and height
function initGraph() {
// get reference to canvas and drawing context
canvas = document.getElementById('graph');
context = canvas.getContext('2d');
initSettings(); // initialize the chart settings
drawAxis(); // draw the chart axis and labels
growBars(); // animate the bars into the chart
}

function initSettings() {
// set our chart settings
chartMargin =20; // margin around entire canvas
chartAxisSpace = 50; // area for the x- and y-axes
// set the chart drawing area
chartHeight = canvas.height-chartAxisSpace-2*chartMargin;
chartWidth = canvas.width-chartAxisSpace-2*chartMargin;
// set the number of labels to use for the y-axis
numYLabels = 8;
// set the number of bars based on the chartData
numBars = chartData.bars.length;
// find our max data value to scale the graph
for (var i=0; i < numBars; i++) {
if (chartData.bars[i].value > maxValue) {
maxValue = parseInt(chartData.bars[i].value);
}
}
// determine the width of each bar
barWidth = (chartWidth / numBars)-barMargin;
// initialize animation variables
idxStep = 0;
numSteps = 100;
growSpeed = 1;
}
function drawAxis() {
// Set line width for the axis lines
context.lineWidth = 2;
// draw y-axis - from lower left to upper left
context.moveTo(chartMargin+chartAxisSpace,chartHeight+chartMargin);
context.lineTo(chartMargin+chartAxisSpace, chartMargin);
context.stroke();
// draw X axis - from lower left to lower right
context.moveTo(chartMargin+chartAxisSpace, chartMargin+chartHeight);
context.lineTo(chartMargin+chartAxisSpace+chartWidth, chartMargin+chartHeight);
context.stroke();
// Set the line width back to 1 pixel
context.lineWidth = 10;
// Add data marks to the y-axis
var markerAmount = parseInt(maxValue / numYLabels);
context.textAlign = 'right';
context.fillStyle = '#000';
// Loop through and add the markers to the y-axis
for (var i=0; i <= numYLabels; i++) {
// Determine the label and X and Y points
markerLabel = i*markerAmount;
markerXPos = chartMargin + chartAxisSpace - 5;
markerYPos = chartMargin + (chartHeight - ((i*markerAmount*chartHeight)/maxValue));
// Add the text marker at the positions determined
context.fillText(markerLabel, markerXPos, markerYPos, chartAxisSpace);
}
// Add labels for each bar based on the chart data
context.textAlign = 'center';
// loop through each bar and add the title
for (var i=0; i<numBars; i++) {
// determine the X and Y positions for the marker
markerXPos = chartMargin+chartAxisSpace + barMargin + (i * (barWidth+barMargin)) + (.5*barWidth);
markerYPos = chartMargin+chartHeight + 10;
// Add the text under the bottom of the bar
context.fillText(chartData.bars[i].title, markerXPos, markerYPos, barWidth);
}
// Add y-axis title
// Save the present context
context.save();
// Move the 0,0 point to the y-axis title point
context.translate(chartMargin+10,chartHeight/2);
// Rotate the current drawing context counter-clockwise 90 degrees
context.rotate(Math.PI*-90 / 180);
// Add our text title
context.fillText('Average Years',0,0);
// Restore the context drawing orientation
context.restore();
// Add X Axis Title
context.fillText('Gamers',chartMargin+chartAxisSpace+(chartWidth/2),chartMargin+chartHeight+40);
}
// Animation function to grow the bars vertically
// Called on a timeout based on number of steps
function growBars() {
// Declare our bar x,y, and h
// barWidth is predetermined above
var barStartX = 0;
var barStartY = 0;
var barHeight = 0;
// bar value variable from the data set
var barValue = 0;
// Loop through the bars and draw each based on step
for (var i=0; i < numBars; i++) {
// get the bar value
barValue = parseInt(chartData.bars[i].value);
// calculate the bar height, starting x and y points
barHeight = (barValue * chartHeight / maxValue) / numSteps * idxStep;
barStartX = chartMargin + chartAxisSpace + (i * (barWidth + barMargin)) + barMargin;
barStartY = chartMargin + (chartHeight-barHeight);
// call the helper function to draw the bar
drawBar(barStartX, barStartY, barWidth, barHeight);
}
// Grow the bars more if they have not finished growing
if (idxStep<numSteps) {
idxStep++;
setTimeout('growBars()',growSpeed);
}
}
// helper function to draw a bar based on dimensions passed
//could pass in context along with other params to customize
function drawBar(barX, barY, barW, barH) {
// Create rectangle with fill
context.fillStyle = '#00c';
context.fillRect(barX, barY, barW, barH);
// Add shadow to bar
context.shadowOffsetX = 3;
context.shadowOffsetY = -3;
context.shadowBlur = 3;
context.shadowColor = 'rgba(200, 200, 200, .3)';
// Add line border on the bar
context.strokeStyle = '#000';
context.lineWidth = 1;
context.strokeRect(barX, barY, barW, barH);
}
// on page load initialize the bar chart
window.addEventListener('load',initGraph,false);