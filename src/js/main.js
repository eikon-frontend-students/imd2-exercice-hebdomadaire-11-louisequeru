var button = document.querySelector(".button");
var text = document.querySelector(".text");
var heart = document.querySelector(".fa-heart");
var count = document.querySelector(".count");

function changeColor() {
  button.classList.add("is-active");
  text.classList.add("is-active");
  heart.classList.add("is-active");
  count.classList.add("is-active");
  setTimeout(function () {
    button.classList.remove("is-active");
    text.classList.remove("is-active");
    heart.classList.remove("is-active");
    count.classList.remove("is-active");
  }, 2000);
}

button.addEventListener("click", changeColor);
