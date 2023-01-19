const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.style.border = "2px solid black";

const bgImg = new Image();
bgImg.src ="../images/road.png";
const bgImg2 = new Image();
bgImg2.src ="../images/road.png";
let bg1Y = 0;
let bg2y = -myCanvas.height;

let gameOver = false;
let animateId;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function animate() {
    ctx.drawImage(bgImg, 0, bg1Y, myCanvas.width, myCanvas.height);
    ctx.drawImage(bgImg2, 0, bg2y, myCanvas.width, myCanvas.height);
    bg1Y += 2;
    bg2y += 2;

    if (bg1Y > myCanvas.height) {
      bg1Y = -myCanvas.height;
    }
    if (bg2Y > myCanvas.height) {
      bg2y = -myCanvas.height;
    }

    if (!gameOver) {
      animateId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animateId);
    }
  }
  function startGame() {
    animate();
  }
};
