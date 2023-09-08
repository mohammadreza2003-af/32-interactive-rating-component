"use strict";
const btns = document.querySelector(".list-n");
const btnSubmit = document.querySelector(".btn-s");
const btnAll = document.querySelectorAll(".btn");
const front = document.querySelector(".front-card");
const back = document.querySelector(".back-card");
const text = document.querySelector(".text");
const btnTry = document.querySelector(".btn-t");

//Submit

btns.addEventListener("click", function (e) {
  const click = e.target;
  if (click.classList.contains("btn")) {
    btnAll.forEach((btn) => btn.classList.remove("ac-btn"));
    click.classList.add("ac-btn");
    const data = click.getAttribute("data-set");
    btnSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      front.classList.add("ac-front");
      back.classList.remove("ac-back");
      text.textContent = `You select ${data}`;
    });
  }
});

//Try again

btnTry.addEventListener("click", function (e) {
  front.classList.remove("ac-front");
  back.classList.add("ac-back");
  btnAll.forEach((btn) => btn.classList.remove("ac-btn"));
});
