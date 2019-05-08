var canvas = document.getElementById('canvasgraphic').getContext('2d');
var canvasImage = new Image();

function drawCanvasImage() {
canvas.drawImage(canvasImage, 45, 60, 350, 250);
canvas.drawImage(canvasImage, 325, 259, 80, 100, 500, 0, 120, 120);
canvas.drawImage(canvasImage, 195, 40, 120, 190, 420, 130, 120, 120);
canvas.drawImage(canvasImage, 115, 259, 80, 100, 500, 260, 120, 120);
}

canvasImage.addEventListener('load', drawCanvasImage, false);

canvasImage.src = 'images/bowser.png';
