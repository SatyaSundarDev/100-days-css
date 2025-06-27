"use strict";
let button = document.querySelectorAll("button");
let cards = document.querySelectorAll(".card");

let activeIdx = 0;
button.forEach((btn) => {
  btn.addEventListener("click", function () {
    cards[activeIdx].classList.remove("active");
    cards[activeIdx].classList.add("inactive");
    cards[activeIdx].classList.add("feadout");

    activeIdx = (activeIdx + 1) % cards.length;

    cards[activeIdx].classList.remove("feadout");
    cards[activeIdx].classList.remove("inactive");
    cards[activeIdx].classList.add("active");
    cards[activeIdx].classList.add("feadin");
  });
});
