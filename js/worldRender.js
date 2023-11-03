/******************************************************************************
 * World Rendered - toby.wahyudi.ca / tobiaswahyudi.github.io
 * 
 * Benedict Tobias H. Wahyudi, November 2023
 *****************************************************************************/

/**
 * Resizes a canvas to fit the screen.
 * 
 * @param {*} canvas - the canvas which we will resize.
 */
const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`
}

const initUnit = (unit) => {
  if (unit.img != undefined) return;

  unit.img = new Image();
  unit.img.src = unit.src;
}

world.forEach(unit => initUnit(unit))

const taxicab = new Image();
taxicab.src = "img/world/people/taxicab.png";

const renderWorld = (timestamp) => {
  const ctx = document.getElementById("world").getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  const main = document.getElementsByTagName('main')[0];
  const currentHeight = main.scrollTop - 0.5*height;

  // The world origin is located on this spot
  const origin = { x: 0.5 * width, y: 0.5 * height }

  ctx.clearRect(0, 0, width, height);

  let currentPos = { x: origin.x - currentHeight * Math.sqrt(3), y: origin.y - currentHeight };

  world.forEach(unit => {
    ctx.drawImage(unit.img,
      currentPos.x + unit.offset.x,
      currentPos.y + unit.offset.y
    );
    currentPos.x += unit.size.x;
    currentPos.y += unit.size.y;
  })

  ctx.drawImage(taxicab, width/2 - 32, height/2 - 56);

  // Immediately request another animation frame.
  window.requestAnimationFrame(renderWorld);
}

/******************************************************************************
 * ON INIT
 *****************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const worldCanvas = document.getElementById("world");
  const ctx = worldCanvas.getContext('2d');

  console.log(ctx);

  // On window resize, resize the canvas.
  window.addEventListener('resize', () => {
    resizeCanvas(worldCanvas);
  })

  // Resize the canvas on init.
  resizeCanvas(worldCanvas);

  // Start rendering the canvas.
  window.requestAnimationFrame(renderWorld);
})