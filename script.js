"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let body = document.querySelector("body");
const guess = document.querySelector(".guess");
const submitGuess = document.querySelector(".submit-guess");
const message = document.querySelector(".message");
let currentScore = document.querySelector(".current-score");
const highScore = document.querySelector(".highscore");
const restart = document.querySelector(".restart");

let score = 20;
let highscore = 0;

submitGuess.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "You need to enter a number, silly! Try again!";
  } else if (guess > secretNumber) {
    message.textContent = "That guess is too high! Try again!";
    score--;
    currentScore.textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "That guess is too low! Try again!";
    score--;
    currentScore.textContent = score;
  } else if (guess === secretNumber) {
    message.textContent = "You did it! 🌟";
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
      body.style.backgroundColor = "#755567";
    }
  }
});

restart.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  currentScore.textContent = score;
  guess.value = "";
  body.style.backgroundColor = "#556775";
});
