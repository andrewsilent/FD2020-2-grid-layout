let overlay = document.getElementById('overlay');
let button = document.getElementById('button');
button.addEventListener('click', function() { 
    overlay.classList.contains('show')?
    (overlay.classList.remove('show'), button.innerHTML='Show grid'):
    (overlay.classList.add('show'), button.innerHTML='Remove grid')
})