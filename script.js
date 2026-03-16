document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("read-more-btn");
  const moreText = document.getElementById("more-text");

  if (button && moreText) {
    button.addEventListener("click", function () {
      moreText.classList.toggle("hidden");

      if (moreText.classList.contains("hidden")) {
        button.textContent = "Read More";
      } else {
        button.textContent = "Read Less";
      }
    });
  }
});
