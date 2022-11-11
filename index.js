let showIcon = document.getElementById('show');
let hideIcone = document.getElementById('hide');
let nav = document.getElementById('nav');
let image = document.getElementById('scroll');
let i;
i = 0;
let images = new Array(
    "images/h.jpg",
    "images/hmh.jpg",
    "images/hmh.jpeg"
);
let len = images.length;
function show() {
    nav.style.display = 'block'; 
    showIcon.style.display = 'none';
    hideIcone.style.display = 'block';
}
function hide() {
    nav.style.display = 'none'; 
    showIcon.style.display = 'block';
    hideIcone.style.display = 'none';
}
function play() {
    let video = document.querySelector('#logo');
    video.play();
}

function scroll() {
    if (i > len - 1) {
        i=0
    }
    image.src = images[i];
    i++;

    setTimeout("scroll()", 10000);
}

