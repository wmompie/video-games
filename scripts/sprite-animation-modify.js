    // canvas and context variables for drawing
	var canvas;
	var context;
	// Image holder for our animation
	var sprite = new Image();
	// Sprite image frame variables
	var sliceX = 10;
	var sliceY = 530;
	var sliceWidth = 89;
	var sliceHeight = 121;
	// animation variable
	var intervalRef;
	// initialize the canvas
	function init() {
	// Set the button handlers
	var btnStart = document.getElementById('start');
	var btnStop = document.getElementById('stop');
	btnStart.addEventListener('click',startAnimation,false);
	btnStop.addEventListener('click',stopAnimation,false);
	// Retrieve reference to the canvas and context
	canvas = document.getElementById('sprite-modify');
	context = canvas.getContext('2d');
    // Assign the source of our image
	sprite.src = 'images/spritesheet.png';
	}
	// Animate image based on slice
	function animateSprite() {// Draw the image based on the current sprite slice
	context.drawImage(sprite, sliceX, sliceY, sliceWidth, sliceHeight, 250, 150, 89, 121);
	// Increment the slice ospritef the spritHe
	sliceX+=120;
	// Reset the slice to the first frame if needed
	if (sliceX>=sprite.width) {
	sliceX = 10;
	}
	}
	// Start the animation by setting an interval
	function startAnimation() {
	intervalRef = setInterval('animateSprite()',200);
	}
	// Stop the animation by clearing the interval set
	function stopAnimation() {
	clearInterval(intervalRef);
	// erase the canvas with clearRect
	context.clearRect(0,0,600,400);
	}
	// call the init function on page load
	window.addEventListener('load',init,false);