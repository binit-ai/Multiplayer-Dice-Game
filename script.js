'use strict';

// Storing the DOM elements in variables

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
let scores, currentScore, currentPlayer, playing;

// Setting the initial conditions of the game
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// Initial conditions:

function initial() {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
}
initial();

// Function to switch the active player

function changePlayer() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// The rolling dice functionality

// 1. Generating a dice roll and displaying it

rollBtn.addEventListener('click', function () {
  if (playing) {
    const rolled = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${rolled}.png`;

    // 2. Checking if the rolled number is 1

    if (rolled !== 1) {
      currentScore += rolled;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

// The hold functionality

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;

    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    // Checking if any player has won the game

    if (scores[currentPlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--active');
    } else {
      changePlayer();
    }
  }
});

// The new game functionality

newBtn.addEventListener('click', function () {
  initial();
  console.log(currentPlayer);
  console.log(`currentPlayer`.classList);
});
