const button = document.querySelector("#read-more-btn");
const moreText = document.querySelector("#more-text");

button.addEventListener("click", function () {
  moreText.classList.toggle("hidden");
});
