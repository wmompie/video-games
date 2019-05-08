var canvas;
var context;
var chartMargin;
var chartAxisSpace;
var chartWidth;
var chartHeight;
var numBars = 0;
var barMargin = 50;
var barWidth = 0;
var maxValue = 0;
var numYLabels;
var idxStep;
var numSteps;
var growSpeed;
var chartData = {'bars':[
{'title':'Average Gamers','value':'12'},
{'title':'Adult Gamers','value':'14'},
{'title':'Male Average','value':'16'},
{'title':'Female Average','value':'12'},
]};

function initGraph() {
    canvas = document.getElementById('graph');
    context = canvas.getContext('2d');
    initSettings();
    drawAxis();
    growBars();
}

function initSettings() {
    chartMargin = 30;
    chartAxisSpace = 50;
    chartHeight = canvas.height-chartAxisSpace-1*chartMargin;
    chartWidth = canvas.width-chartAxisSpace-2*chartMargin;
    numYLabels = 8;
    numBars = chartData.bars.length;
    for (var i=0; i < numBars; i++) {
        if (chartData.bars[i].value > maxValue) {
            maxValue = parseInt(chartData.bars[i].value);
        }
    }
    barWidth = (chartWidth / numBars)-barMargin;
    idxStep = 0;
    numSteps = 100;
    growSpeed = 10;
}

function drawAxis() {
    context.lineWidth = 2;
    context.font = 'Bold 12px Arial';
    context.moveTo(chartMargin+chartAxisSpace,chartHeight+chartMargin);
    context.lineTo(chartMargin+chartAxisSpace, chartMargin);
    context.stroke();
    context.moveTo(chartMargin+chartAxisSpace, chartMargin+chartHeight);
    context.lineTo(chartMargin+chartAxisSpace+chartWidth, chartMargin+chartHeight);
    context.stroke();
    context.lineWidth = 1;
    var markerAmount = parseInt(maxValue / numYLabels);
    context.textAlign = 'right';
    context.fillStyle = '#000';
    for (var i=0; i <= numYLabels; i++) {
        markerLabel = i*markerAmount;
        markerXPos = chartMargin + chartAxisSpace - 5;
        markerYPos = chartMargin + (chartHeight - ((i*markerAmount*chartHeight)/maxValue));
        context.fillText(markerLabel, markerXPos, markerYPos, chartAxisSpace);
    }
    context.textAlign = 'center';
    for (var i=0; i<numBars; i++) {
        markerXPos = chartMargin+chartAxisSpace + barMargin + (i * (barWidth+barMargin)) + (.5*barWidth);
        markerYPos = chartMargin+chartHeight + 10;
        context.fillText(chartData.bars[i].title, markerXPos, markerYPos, barWidth);
    }
    context.save();
    context.translate(chartMargin+10,chartHeight/2);
    context.rotate(Math.PI*-90 / 180);
    context.fillText('Average Years',-50,-10);
    context.restore();
    context.fillText('Gamers',chartMargin+chartAxisSpace+(chartWidth/2),chartMargin+chartHeight+40);
}

function growBars() {
    var barStartX = 0;
    var barStartY = 0;
    var barHeight = 0;
    var barValue = 0;
    for (var i=0; i < numBars; i++) {
        barValue = parseInt(chartData.bars[i].value);
        barHeight = (barValue * chartHeight / maxValue) / numSteps * idxStep;
        barStartX = chartMargin + chartAxisSpace + (i * (barWidth + barMargin)) + barMargin;
        barStartY = chartMargin + (chartHeight-barHeight);
        drawBar(barStartX, barStartY, barWidth, barHeight);
    }
    if (idxStep<numSteps) {
        idxStep++;
        setTimeout('growBars()',growSpeed);
    }
}

function drawBar(barX, barY, barW, barH) {
    context.fillStyle = '#ff5e0e';
    context.fillRect(barX, barY, barW, barH);
    context.shadowOffsetX = 5;
    context.shadowOffsetY = -5;
    context.shadowBlur = 3;
    context.shadowColor = 'rgba(100, 100, 100, .1)';
    context.strokeStyle = '#000';
    context.lineWidth = 1;
    context.strokeRect(barX, barY, barW, barH);
}

window.addEventListener('load',initGraph,false);