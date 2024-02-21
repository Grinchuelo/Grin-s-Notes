let resizableBar = document.getElementById('columnaIzquierda');

let resize = false;
let ultimoX = 0;

window.addEventListener('mousedown', function(event) {
    let columnaRect = resizableBar.getBoundingClientRect();
    let posicionCursor = event.clientX - columnaRect.left;

    if (posicionCursor >= columnaRect.width - 5) {
        resize = true;
        ultimoX = event.clientY;
        this.getComputedStyle(resizableBar, hover) = true;
    }
});

window.addEventListener('mousemove', function(event) {
    if (resize) {
        let deltaX = event.clientX - ultimoX;
        resizableBar.style.width = (parseFloat(getComputedStyle(resizableBar, null).width) + deltaX) + 'px';
        ultimoX = event.clientX;
    }
});

window.addEventListener('mouseup', function(event) {
    this.getComputedStyle(resizableBar, hover) = false;
});
