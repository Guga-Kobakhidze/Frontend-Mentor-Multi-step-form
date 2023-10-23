// Switcher

const switcher = document.querySelector(".switcher");
const switchMonth = switcher.firstElementChild;
const switchYear = switcher.lastElementChild;
const spanBtn = switcher.querySelector(".switch_btn");
const monthlyCard = document.querySelector(".monthly_cards");
const yearlyCard = document.querySelector(".yearly_cards");

const checkMonthly = document.querySelector(".check_monthly");
const checkYearly = document.querySelector(".check_yearly");

const checkboxMonthly = document.querySelector(".monthly_checkbox");
const checkboxYearly = document.querySelector(".yearly_checkbox");

const totalMonth = document.querySelector(".total_title-month");
const totalYear = document.querySelector(".total_title-year");

let monthClicked = true; // Track if the Monthly element was clicked

switcher.querySelector(".switcher_btn").addEventListener("click", (e) => {
  e.preventDefault();

  if (monthClicked) {
    switchMonth.classList.remove("switcher-color");
    switchYear.classList.add("switcher-color");
    spanBtn.style.left = "22px";
    yearlyCard.style.display = "flex";
    monthlyCard.style.display = "none";
    checkYearly.style.display = "flex";
    checkMonthly.style.display = "none";
    checkboxYearly.style.display = "flex";
    checkboxMonthly.style.display = "none";
    totalYear.style.display = "flex";
    totalMonth.style.display = "none";

    monthClicked = false;
  } else {
    switchMonth.classList.add("switcher-color");
    switchYear.classList.remove("switcher-color");
    spanBtn.style.left = "3px";
    yearlyCard.style.display = "none";
    monthlyCard.style.display = "flex";
    checkYearly.style.display = "none";
    checkMonthly.style.display = "flex";
    checkboxYearly.style.display = "none";
    checkboxMonthly.style.display = "flex";
    totalYear.style.display = "none";
    totalMonth.style.display = "flex";
    monthClicked = true;
  }
});
