let showIcon = document.getElementById('show');
let hideIcone = document.getElementById('hide');
let nav = document.getElementById('nav');
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

