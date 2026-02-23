// Release 7 — Custom JS Behavior (Read More toggle)

const button = document.querySelector("#read-more-btn");
const moreText = document.querySelector("#more-text");

if (button && moreText) {
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", function () {
    const isHidden = moreText.classList.toggle("hidden");

    button.textContent = isHidden ? "Read More" : "Read Less";
    button.setAttribute("aria-expanded", isHidden ? "false" : "true");
  });
}
