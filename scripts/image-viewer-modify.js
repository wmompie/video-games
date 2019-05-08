// variable to keep track of the current image
var currentImg = 1;
// navigate to the next slide
function showImage(imgNum) {
// check if the History API is available
if ( typeof history.pushState !== "undefined" ) {
// verify the image selected is not the current one
if (currentImg != imgNum) {
// set the image title
var imgTitle = 'Image ' + imgNum;
// set next slide in history entries with state object and defaults
history.pushState( imgNum, imgTitle, '?img=' + imgNum );
document.getElementById('imgSlide').src = 'images/slide' + imgNum + '.jpg';
document.getElementById('imageInfo').innerHTML = imgTitle;
// set the current page title
document.title = 'Image ' + imgNum;
var stateInfo = document.getElementById('stateInfo')
stateInfo.innerHTML = imgTitle + "<br>" + stateInfo.innerHTML;
// set the current image to the image selected
currentImg = imgNum;
}
} else {
// History API is not available
alert('The History API is not available in this browser.');
}
}