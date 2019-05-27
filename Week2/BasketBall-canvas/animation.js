const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

ctx.fillStyle = 'white';
let x = 0

const draw = () => {
  ctx.fillRect(x, 10, 50, 50);
  if( x < 660 ) {
    x += 2.5
  }
  
}

const clear = () => ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

const animate = () => {
  clear();
  draw();
  window.requestAnimationFrame(animate);
}

animate();