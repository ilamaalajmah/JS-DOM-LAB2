const c = document.getElementById('cube');

function move() {
    const left = Math.random() * window.innerWidth * 0.8;
    const topp = Math.random() * window.innerHeight * 0.8;

    const colors = '#' + Math.floor(Math.random() * 16777215).toString(16);

    c.style.left = left + 'px';
    c.style.top = topp + 'px';
    c.style.backgroundColor = colors;
}
setInterval(move, 2000);
