var canvas;
var context;
var sprite = new Image();
var X = 10;
var Y = 530;
var W = 89;
var H = 121;
var intervalRef;

function init() {
    "use strict";
    var btnStart = document.getElementById('start');
    var btnStop = document.getElementById('stop');
    btnStart.addEventListener('click',startAnimation,false);
    btnStop.addEventListener('click',stopAnimation,false);
    canvas = document.getElementById('sprite');
    context = canvas.getContext('2d');
    sprite.src = 'images/spritesheet.png';
}

function animateSprite() {
    context.clearRect(0,0,600,400);
    context.drawImage(sprite, X, Y, W, H, 250, 50, 89, 121);
    X += 120;
    if (X >= sprite.width) {
        X = 10;
    }
}

function startAnimation() {
    "use strict";
    intervalRef = setInterval('animateSprite()',100);
}

function stopAnimation() {
    "use strict";
    clearInterval(intervalRef);
    context.clearRect(0,0,600,400);
}

window.addEventListener('load',init,false);