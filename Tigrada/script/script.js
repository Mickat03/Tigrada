const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const tigrao = document.getElementById('tigrao');
let isJumping = false;
let gameOver = false;

function jump() {
  if (isJumping) return;
  isJumping = true;
  dino.classList.add('jump');
  setTimeout(() => {
    dino.classList.remove('jump');
    isJumping = false;
  }, 500);
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.key === 'ArrowUp' || event.key === 'P') {
    jump();
  }
});

function moveCactus() {
  let cactusLeft = window.innerWidth;
  cactus.style.left = cactusLeft + 'px';

  const move = setInterval(() => {
    if (gameOver) {
      clearInterval(move);
      return;
    }

    cactusLeft -= 5;
    cactus.style.left = cactusLeft + 'px';

    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

    if (cactusLeft < 90 && cactusLeft > 50 && dinoBottom < 40) {
      alert('Se Fodeu!');
      gameOver = true;
      location.reload();  

    }

    if (cactusLeft < -20) {
      cactusLeft = window.innerWidth;
    }
  }, 20);
}

function moveTigrao() {
  let tigraoLeft = window.innerWidth;
  tigrao.style.left = tigraoLeft + 'px';

  const move = setInterval(() => {
    if (gameOver) {
      clearInterval(move);
      return;
    }

    tigraoLeft -= 10;
    tigrao.style.left = tigraoLeft + 'px';

    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

    if (tigraoLeft < 90 && tigraoLeft > 50 && dinoBottom < 40) {
      alert('Se Fodeu!');
      gameOver = true;
      if(cactusLeft < -20)
      location.reload();  
    }
    if (tigraoLeft < -20) {
      tigraoLeft = window.innerWidth;
    }


  }, 10);
}      

moveCactus();
moveTigrao();
