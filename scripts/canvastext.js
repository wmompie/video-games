function showText() {
    // Get references to the canvas and then the drawing context
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    var canvas = document.getElementById('canvas').getContext('2d');
    context.font = '80px Black Ops One';
    context.fillStyle = 'RGBa(0, 0, 0, 0.1)'            
    context.fillText('Video Games', -35, 120);
    context.fillStyle = 'RGBa(69, 236, 170, 0.1)';
    context.fillStyle = 'RGBa(0, 0, 0, 0.15)';
    context.fillText('Video Games', -30, 115);
    context.fillStyle = 'RGBa(69, 236, 170, 0.15)';
    context.fillStyle = 'RGBa(0, 0, 0, 0.2)';
    context.fillText('Video Games', 5, 100);
    context.fillStyle = 'RGBa(69, 236, 170, 0.2)';
    context.fillText('Video Games', 10, 95);
    context.fillStyle = 'RGB(0, 0, 0)';
    context.fillText('Video Games', 45, 80);
    context.fillStyle = 'RGB(69, 236, 170)';
    context.fillText('Video Games', 50, 75);
                
    context.font = '48px Mallanna';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.fillStyle = '#fff';
    context.textAlign = 'center';
    context.fillText('Atari Game System', 270, 130);
    context.strokeText('Atari Game System', 270, 130);
}
window.addEventListener('load', showText, false);