// all buttons
const all = document.querySelector('#openAll');
const breakfast = document.querySelector('#openBreakfast');
const lunch = document.querySelector('#openLunch');
const dinner = document.querySelector('#openDinner');
const desserts = document.querySelector('#openDesserts');
const drinks = document.querySelector('#openDrinks');
const snacks = document.querySelector('#openSnacks');
const salad = document.querySelector('#openSalad');

// all sections
const allSection = document.querySelector('.all');
const breakfastSection = document.querySelector('.breakfast');
const lunchSection = document.querySelector('.lunch');
const dinnerSection = document.querySelector('.dinner');
const dessertsSection = document.querySelector('.desserts');
const drinksSection = document.querySelector('.drinks');
const snacksSection = document.querySelector('.snacks');
const saladSection = document.querySelector('.salad');

// add event listener to all buttons
all.addEventListener('click', () => {
    allSection.classList.remove('hidden');
    breakfastSection.classList.add('hidden');
    lunchSection.classList.add('hidden');
    dinnerSection.classList.add('hidden');
    dessertsSection.classList.add('hidden');
    drinksSection.classList.add('hidden');
    snacksSection.classList.add('hidden');
    saladSection.classList.add('hidden');
});

// add event listener to breakfast buttons
breakfast.addEventListener('click', () => {
    allSection.classList.add('hidden');
    breakfastSection.classList.remove('hidden');
    lunchSection.classList.add('hidden');
    dinnerSection.classList.add('hidden');
    dessertsSection.classList.add('hidden');
    drinksSection.classList.add('hidden');
    snacksSection.classList.add('hidden');
    saladSection.classList.add('hidden');
});

// add event listener to lunch buttons
lunch.addEventListener('click', () => {
    allSection.classList.add('hidden');
    breakfastSection.classList.add('hidden');
    lunchSection.classList.remove('hidden');
    dinnerSection.classList.add('hidden');
    dessertsSection.classList.add('hidden');
    drinksSection.classList.add('hidden');
    snacksSection.classList.add('hidden');
    saladSection.classList.add('hidden');
});