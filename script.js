const button = document.querySelector("#read-more-btn");
const moreText = document.querySelector("#more-text");

if (button && moreText) {
  button.addEventListener("click", () => {
    moreText.classList.toggle("hidden");

    const isHidden = moreText.classList.contains("hidden");
    button.textContent = isHidden ? "Read More" : "Read Less";
  });
}
