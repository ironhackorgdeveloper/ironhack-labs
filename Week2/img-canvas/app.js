const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const img = new Image();
img.src = 'cartoon-bg.jpg'

let x = 0;
let x2 = 1500;

const draw = () => {
    ctx.drawImage(img, x, 0, 1500, 600);
    ctx.drawImage(img, x2, 0, 1500, 600);
}

const move = () => {
  draw();
  x -= 3;
  x2 -= 3;
  if(x === -1500){
    x = 1500;
  }
  if (x2 === -1500){
    x2 = 1500;
  }
  window.requestAnimationFrame(move);
}

move();

