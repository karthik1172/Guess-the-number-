//जय माँ भद्रकाली
'use strict';

const number = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;
let isFirst = true;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === number) {
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.message').textContent = 'correct value 🦾';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#99ff99';
  } else if (guess === 0) {
    document.querySelector('.message').textContent = '⛔️ No Value ';
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.message').textContent = 'value is smaller';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🙅🏾‍♂️ 🙆🏾';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.highscore').textContent = highScore;

      document.querySelector('.message').textContent = 'value is bigger';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🙅🏾‍♂️ 🙆🏾';
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
});
