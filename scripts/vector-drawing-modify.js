var canvas = document.getElementById('vector-drawing-modify').getContext('2d');
canvas.shadowOffsetX = 5;
canvas.shadowOffsetY = 5;
canvas.shadowBlur = 5;
canvas.shadowColor = 'rgba(221, 221, 221, .3)';
canvas.fillStyle = 'rgba(221, 221, 221, 1)';
canvas.fillRect(0, 0, 635, 475);

canvas.translate(canvas.width / 2, canvas.height / 2);
canvas.scale(1, 1);
canvas.beginPath();		
canvas.arc(250,250,225,0,2 * Math.PI,false);
canvas.strokeStyle = '#000';
canvas.lineWidth = 5;
canvas.stroke();
canvas.closePath();
canvas.fillStyle = 'white';
canvas.fill();

canvas.beginPath();
canvas.arc(250,250,220,0,2 * Math.PI,false);
canvas.strokeStyle = 'black';
canvas.lineWidth = 5;
canvas.stroke();    
canvas.closePath();
canvas.restore();
