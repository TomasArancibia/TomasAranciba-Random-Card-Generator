/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let changeCard = function() {
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randompinta = Math.ceil(Math.random() * 4);
  let randomnum = Math.floor(Math.random() * 13);

  let pintaSup = document.querySelector("#topColor");
  let pintaInf = document.querySelector("#bottomColor");
  let numCarta = document.querySelector("#cardNumber");

  if (randompinta == 1) {
    pintaSup.innerHTML = `<div class='heart'> ♥ </div>`;
    pintaInf.innerHTML = `<div class='heart'> ♥ </div>`;
    numCarta.style.color = "red";
  } else if (randompinta == 2) {
    pintaSup.innerHTML = `<div class='diamond'>♦</div>`;
    pintaInf.innerHTML = `<div class='diamond'>♦</div>`;
    numCarta.style.color = "red";
  } else if (randompinta == 3) {
    pintaSup.innerHTML = `<div class='club'>♠</div>`;
    pintaInf.innerHTML = `<div class='club'>♠</div>`;
    numCarta.style.color = "black";
  } else {
    pintaSup.innerHTML = `<div class='spade'>♣</div>`;
    pintaInf.innerHTML = `<div class='spade'>♣</div>`;
    numCarta.style.color = "black";
  }

  numCarta.innerHTML = num[randomnum];
};

let stopTimer = function() {
  return (stop = false);
};

let startTimer = function() {
  window.onload();
  return (stop = true);
};

window.onload = function() {
  changeCard();
  timer();
};

document.getElementById("randomize").addEventListener("click", changeCard);

let timer = function() {
  document.getElementById("stopTimer").addEventListener("click", stopTimer);
  document.getElementById("resumeTimer").addEventListener("click", startTimer);
  setTimeout(function() {
    changeCard();
    if (stop) {
      timer();
    }
  }, 1000);
};
