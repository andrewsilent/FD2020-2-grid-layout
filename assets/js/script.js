let overlay = document.getElementById('overlay');
let button = document.getElementById('button');
button.addEventListener('click',overlayShow);
function overlayShow() {
    
    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
        button.innerHTML='Show grid';
    }
    else {
        overlay.classList.add('show');
        button.innerHTML='Remove grid';
    }
}