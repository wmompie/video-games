var canvas = document.getElementById("canvasgraphicmodify").getContext('2d');
var canvasImage = new Image();

function drawCanvasImage() {
canvas.drawImage(canvasImage, 50, 60, 500, 350);
}

canvasImage.addEventListener('load', drawCanvasImage, false);

canvasImage.src = 'images/bowser.png';
