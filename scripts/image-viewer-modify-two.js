// create row of img links
var newImg;
var imgRow = document.getElementById('imgRow');
for (var i=1; i<=5; i++ ) {
document.getElementById('imgRow').add
newImg = '<a onclick="showImage('+i+');"><img class="thumbnail"src="images/slide'+i+'.jpg"></a>';
imgRow.innerHTML += newImg;
}