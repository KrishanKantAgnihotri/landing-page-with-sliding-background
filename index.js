// alert();
var slide = document.getElementById("slide");
var images = new Array(
    "images/1.jpeg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg"
);
var len = images.length;
var i = 1;

function slider() {

    if (i > len - 1) {
        i = 0;
    }
    slide.src = images[i];
    i++;
    setTimeout("slider()", 3000);
}
