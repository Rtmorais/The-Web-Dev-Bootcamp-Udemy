const p1Button = document.querySelector("#p1Btn");
const p2Button = document.querySelector("#p2Btn");
const resetButton = document.querySelector("#resetBtn");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const scoreSelect = document.querySelector("#playTo");

let winningScore = 5;

scoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

let gameOver = false;

let p1Score = 0;
p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

let p2Score = 0;
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});
