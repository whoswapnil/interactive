const rateStart = document.querySelector(".rating-state");
const thankYou = document.querySelector(".thank-you");
const form = document.querySelector(".rating-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents Browser from refreshing
  const selector = "input[name=ratings]:checked";
  const checkedInput = document.querySelector(selector);

  // User needs to select an Option in order to go on
  if (checkedInput !== null) {
    const selectedRating = document.querySelector(".selection");
    selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
    rateStart.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
})