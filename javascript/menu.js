// ALL BUTTOMNS |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\
const all = document.querySelector("#openAll");
const breakfast = document.querySelector("#openBreakfast");
const lunch = document.querySelector("#openLunch");
const dinner = document.querySelector("#openDinner");
const desserts = document.querySelector("#openDesserts");
const drinks = document.querySelector("#openDrinks");
const snacks = document.querySelector("#openSnacks");
const salad = document.querySelector("#openSalad");

// ALL SECTIONS |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\
const allSection = document.querySelector(".all");
const breakfastSection = document.querySelector("#breakfast");
const lunchSection = document.querySelector("#lunch");
const dinnerSection = document.querySelector("#dinner");
const dessertsSection = document.querySelector("#desserts");
const drinksSection = document.querySelector("#drinks");
const snacksSection = document.querySelector("#snacks");
const saladSection = document.querySelector("#salad");

// DEFAULT SECTION |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\
allSection.classList.add("hidden");
breakfastSection.classList.remove("hidden");
lunchSection.classList.add("hidden");
dinnerSection.classList.add("hidden");
dessertsSection.classList.add("hidden");
drinksSection.classList.add("hidden");
snacksSection.classList.add("hidden");
saladSection.classList.add("hidden");

// ADD EVENT LISTENER TO all BUTTON |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\
all.addEventListener("click", () => {
  allSection.classList.remove("hidden");
  breakfastSection.classList.remove("hidden");
  lunchSection.classList.remove("hidden");
  dinnerSection.classList.remove("hidden");
  dessertsSection.classList.remove("hidden");
  drinksSection.classList.remove("hidden");
  snacksSection.classList.remove("hidden");
  saladSection.classList.remove("hidden");
});

// ADD EVENT LISTENER TO breakfast BUTTON |\|\|\|\|\|\|\|\|\|\
breakfast.addEventListener("click", () => {
  allSection.classList.add("hidden");
  breakfastSection.classList.remove("hidden");
  lunchSection.classList.add("hidden");
  dinnerSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO lunch BUTTON |\|\|\|\|\|\|\|\|\|\|\|\
lunch.addEventListener("click", () => {
  allSection.classList.add("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.remove("hidden");
  dinnerSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO dinner BUTTON |\|\|\|\|\|\|\|\|\|\|\|
dinner.addEventListener("click", () => {
  allSection.classList.add("hidden");
  dinnerSection.classList.remove("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO desserts BUTTON |\|\|\|\|\|\|\|\|\|\|
desserts.addEventListener("click", () => {
  allSection.classList.add("hidden");
  dessertsSection.classList.remove("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.add("hidden");
  dinnerSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO drinks BUTTON |\|\|\|\|\|\|\|\|\|\|\|
drinks.addEventListener("click", () => {
  allSection.classList.add("hidden");
  drinksSection.classList.remove("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.add("hidden");
  dinnerSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO snacks BUTTON |\|\|\|\|\|\|\|\|\|\|\|
snacks.addEventListener("click", () => {
  allSection.classList.add("hidden");
  snacksSection.classList.remove("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.add("hidden");
  dinnerSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  saladSection.classList.add("hidden");
});

// ADD EVENT LISTENER TO salad BUTTON |\|\|\|\|\|\|\|\|\|\|\|\
salad.addEventListener("click", () => {
  allSection.classList.add("hidden");
  saladSection.classList.remove("hidden");
  breakfastSection.classList.add("hidden");
  lunchSection.classList.add("hidden");
  dinnerSection.classList.add("hidden");
  dessertsSection.classList.add("hidden");
  drinksSection.classList.add("hidden");
  snacksSection.classList.add("hidden");
});

// back to top button
// |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// when scroll to 50% of the page see the button |\|\|\|\|\|\|\
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

// scroll to top |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
