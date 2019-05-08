var canvas = document.getElementById('vector');
var context =canvas.getContext('2d');
var brushSize = document.getElementById('size');
var dragging = false;
var canvasImage = new Image();
    function drawCanvasImage(){
        for(var i=0; i<100; i++)
            context.drawImage(canvasImage, 0, 0, 700, 500, 55, 10, 700, 500);
      };
canvasImage.addEventListener('load',drawCanvasImage,false);
canvasImage.src = 'images/vectormario.png';
canvas.style.background = "transparent";
context.save();
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 5;
context.shadowColor = 'rgba(221, 221, 221, .3)';
context.fillStyle = 'rgba(221, 221, 221, 1)';
context.fillRect(0, 0, 635, 475);
context.scale(1, 1);
context.beginPath();
context.stroke();
context.closePath();
context.fillStyle = 'white';
context.fill();   
context.beginPath();
context.stroke();    
context.closePath();
context.beginPath();
context.restore();
      
var putPoint = function(e){
    if(dragging){
        var size = parseInt(brushSize.value);
        if(size < parseInt(brushSize.min)) {
            size = parseInt(brushSize.min);
            brushSize.value = brushSize.min;
            } else if(size > parseInt(brushSize.max)){
                size = parseInt(brushSize.max);
                brushSize.value = brushSize.max;
            }
            
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.lineWidth = size*2;
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, size, 0, 2 * Math.PI,false);
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
        drawCanvasImage();
        }
    }
			
var engage = function(e){
    dragging = true;
    putPoint(e);
    context.beginPath();
    }
var disengage = function(){
    dragging = false;
    context.beginPath();
    }	
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);

var swatches = document.getElementsByClassName('swatch');
for(var i=0; i<swatches.length; i++){
    swatches[i].addEventListener('click', setSwatch);}
function setColor(color){
    context.fillStyle = color;
    context.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if(active){
    active.className = 'swatch';}}
function setSwatch(e){
    var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
    }

function init() {
    var btnReset = document.getElementById('reset');
    btnReset.addEventListener('click',resetCanvas,false);
    }

function resetCanvas() {
    "use strict";
    context.clearRect(0,0,640,550);
    canvasImage.addEventListener('load',drawCanvasImage,false);
    canvasImage.src = 'images/vectormario.png';
    canvas.style.background = "transparent";
    context.save();
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.shadowColor = 'rgba(221, 221, 221, .3)';
    context.fillStyle = 'rgba(221, 221, 221, 1)';
    context.fillRect(0, 0, 635, 475);
    context.scale(1, 1);
    context.beginPath();
    context.stroke();
    context.closePath();
    context.fillStyle = 'white';
    context.fill();   
    context.beginPath();
    context.stroke();    
    context.closePath();
    context.beginPath();
    context.restore();
    }
 
window.addEventListener('load',init,false);