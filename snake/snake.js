let canvas = document.querySelector(".game-canvas");
let playButton = document.querySelector(".play-button");
let context = canvas.getContext("2d");
let gridSize = 16;
let frame = 0;
let canTurn = true;

let snake = {};

let apple = {
  x: 320,
  y: 320,
  color: null
};

let pause = false;

function setSnake() {
  snake.x = 160;
  snake.y = 160;
  snake.bodyPosition = [];
  snake.bodyColor = [];
  snake.bodyPositionLenght = 4;
  snake.dx = gridSize;
  snake.dy = 0;

  for (let i = 0; i < snake.bodyPositionLenght; i++) {
    snake.bodyColor.push(generateColor());
  }

  return snake;
}

function clearField() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
  snake.x += snake.dx;
  snake.y += snake.dy;

  wallCollision();

  snake.bodyPosition.unshift({ x: snake.x, y: snake.y });

  if (snake.bodyPosition.length > snake.bodyPositionLenght) {
    snake.bodyPosition.pop();
  }
}

function moveApple() {
  apple.x = getNewPosition(0, 25) * gridSize;
  apple.y = getNewPosition(0, 25) * gridSize;
}

function wallCollision() {
  if (snake.x < 0) {
    snake.x = canvas.width - gridSize;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - gridSize;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
}

function getNewPosition(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateColor() {
  let colors = [
    "ffff00",
    "76ff03",
    "f06292",
    "4fc3f7",
    "ba68c8",
    "f57c00",
    "673ab7"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function createApple() {
  let appleSize = (gridSize - 1) / 2;

  context.fillStyle = `#${apple.color}`;
  context.beginPath();
  context.arc(
    apple.x + gridSize / 2,
    apple.y + gridSize / 2,
    appleSize,
    0,
    2 * Math.PI,
    false
  );
  context.fill();
  context.closePath();
}

function addScore() {
  let game__scoreText = document.querySelector(".game__score-text");

  game__scoreText.textContent = +game__scoreText.textContent + 1;
}

function cleareScore() {
  let game__scoreText = document.querySelector(".game__score-text");

  game__scoreText.textContent = "0";
}

function addBestScore() {
  let game__scoreText = document.querySelector(".game__score-text");
  let game__bestScoreText = document.querySelector(".game__best-score-text");

  if (+game__scoreText.textContent > +game__bestScoreText.textContent) {
    let game__bestScore = document.querySelector(".game__best-score");

    game__bestScoreText.textContent = +game__scoreText.textContent;
    game__bestScore.style.visibility = "visible";
  }
}

function checkAppleCollision(x, y) {
  if (x === apple.x && y === apple.y) {
    snake.bodyPositionLenght++;

    addScore();

    snake.bodyColor.push(apple.color);
    apple.color = generateColor();

    moveApple();
  }
}

function showResultMessage() {
  const resultMessage = document.createElement("div");
  resultMessage.classList.add("result-message");

  let game__scoreText = document.querySelector(".game__score-text");
  resultMessage.innerHTML = `
    <div class="result-message__content">
      <div class="result-message__content-wrapper">
        <p class="result-message__score">Your Score: ${game__scoreText.textContent}</p>
        <button class="play-again-button">PLAY AGAIN</button>
      </div>
    </div>
  `;

  const gameBody = document.querySelector(".game__body");
  gameBody.appendChild(resultMessage);

  let playGainButton = document.querySelector(".play-again-button");
  playGainButton.addEventListener("click", () => {
    resultMessage.remove();
    playAgain();
  });
}

function playAgain() {
  cleareScore();

  pause = false;

  setSnake();
  moveApple();
}

function checkBodyCollision(x, y, index) {
  for (let i = index + 1; i < snake.bodyPosition.length; i++) {
    if (x === snake.bodyPosition[i].x && y === snake.bodyPosition[i].y) {
      pause = true;
      showResultMessage();
      addBestScore();
    }
  }
}

function createSnake() {
  snake.bodyPosition.forEach(function (cell, index) {
    if (index === 0) {
      context.fillStyle = "white";
    } else {
      context.fillStyle = `#${snake.bodyColor[index]}`;
    }
    let bodySize = (gridSize - 1) / 2;
    context.beginPath();
    context.arc(
      cell.x + gridSize / 2,
      cell.y + gridSize / 2,
      bodySize,
      0,
      2 * Math.PI,
      false
    );
    context.fill();
    context.closePath();

    checkAppleCollision(cell.x, cell.y);

    checkBodyCollision(cell.x, cell.y, index);
  });
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  if (pause) {
    return;
  }

  if (++frame < 12) {
    return;
  }

  canTurn = true;
  frame = 0;

  clearField();

  createApple();

  moveSnake();

  createSnake();
}

function startGame() {
  setSnake();
  apple.color = generateColor();
  gameLoop();
}

document.addEventListener("keydown", function (e) {
  if (e.which === 37 && snake.dx === 0) {
    if (canTurn) {
      canTurn = false;
      snake.dx = -gridSize;
      snake.dy = 0;
    }
  } else if (e.which === 38 && snake.dy === 0) {
    if (canTurn) {
      canTurn = false;
      snake.dy = -gridSize;
      snake.dx = 0;
    }
  } else if (e.which === 39 && snake.dx === 0) {
    if (canTurn) {
      canTurn = false;
      snake.dx = gridSize;
      snake.dy = 0;
    }
  } else if (e.which === 40 && snake.dy === 0) {
    if (canTurn) {
      canTurn = false;
      snake.dy = gridSize;
      snake.dx = 0;
    }
  }
});

playButton.addEventListener("click", () => {
  let gameMenu = document.querySelector(".game__menu");
  gameMenu.style.display = "none";
  startGame();
});
