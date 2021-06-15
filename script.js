'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    //when you guessed right
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 You guessed right';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //check highscore
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the score is above 1
  } else if (score > 1) {
    //when you guessed too low
    if (guess < secretNumber) {
      document.querySelector('.message').textContent = '⏬ Too Low!';
      score--;
      document.querySelector('.score').textContent = score;

      //when you guessed high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '⏫ Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when you hit score 0 withput guessing right
  } else {
    document.querySelector('.message').textContent = '😇 Game Over Try again';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
