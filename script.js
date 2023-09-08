"use strict";
const btns = document.querySelector(".list-n");
const btnSubmit = document.querySelector(".btn-s");
const btnAll = document.querySelectorAll(".btn");
const front = document.querySelector(".front-card");
const back = document.querySelector(".back-card");
const text = document.querySelector(".text");

btns.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    btnAll.forEach((btn) => btn.classList.remove("ac-btn"));
    e.target.classList.add("ac-btn");
    const data = e.target.getAttribute("data-set");
    btnSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      front.classList.add("ac-front");
      back.classList.remove("ac-back");
      text.textContent = `You select ${data}`;
    });
  }
});

//   if (e.target.classList.contains("btn")) {
//     btnAll.forEach((btn) => btn.classList.remove("ac-btn"));
//     e.target.classList.add("ac-btn");
//     btnSubmit.addEventListener("click", function (e) {
//       e.preventDefault();
//       front.classList.add("ac-front");
//       back.classList.remove("ac-back");
//     });
//   }
