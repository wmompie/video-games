var currentImg = 1;

function showImage(imgNum) {
    if ( typeof history.pushState !== "undefined" ) {
        if (currentImg != imgNum) {
            var imgTitle = 'Image ' + imgNum;
            history.pushState( imgNum, imgTitle, '?img=' + imgNum );
            document.getElementById('imgSlide').src = 'images/slide' + imgNum + '.jpg';
            document.getElementById('imageInfo').innerHTML = imgTitle;
            document.title = 'Image ' + imgNum;
            currentImg = imgNum;
        }
    } else {
        alert('The History API is not available in this browser.');
    }
}