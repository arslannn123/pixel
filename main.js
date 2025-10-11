let currentColor = 'black';
let isDrawing = false;

const grid = document.getElementById('grid');
console.log(grid)
const palitra = document.querySelector('.palitra');
console.log(palitra)

function createGrid() {
    for (let i = 0; i < 32 * 32; i++) {
        const pixel = document.createElement('div');
        console.log(pixel)
        pixel.classList.add('pixel');
        pixel.addEventListener('mousedown', colorPixel);
        pixel.addEventListener('mousemove', colorPixelWhileDrawing);
        grid.appendChild(pixel);
    }
}

grid.addEventListener('mousedown', () => (isDrawing = true));
grid.addEventListener('mouseup', () => (isDrawing = false));

palitra.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        currentColor = event.target.style.backgroundColor;
    }
})

function colorPixel(event) {
    event.target.style.backgroundColor = currentColor;
}

function colorPixelWhileDrawing(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = currentColor;
    }
}

document.getElementById('save').addEventListener('click', () => {
    html2canvas(grid).then(canvas => {
        const link = document.createElement('a');
        link.download = 'pixel_art.png';
        link.href = canvas.toDataURL();
        link.click();
    })
})

createGrid();