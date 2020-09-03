var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls', 'Garlic Mushrooms', 'Hush Puppies', 'Saffron Rice', 'Mac n Cheese', 'Cheddar Biscuits', 'Creamed Corn', 'Collard Greens', 'Egg Rolls'];

var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza', 'Teryaki Salmon', 'Chicken Stirfry', 'Siracha Chicken Wings'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Pumpkin Pie', 'Baklava', 'Flan', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Key Lime Pie', 'Croissants', 'Eclairs', 'Vanilla Ice Cream', 'Fudge Brownies', 'Blueberry Muffins'];

var letsCookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');
var recipeButton = document.querySelector('.add-recipe');

var displayFood = document.querySelector('h1');
var displayMeal = document.querySelector('.meal');
var selectSide = document.querySelector('#side');
var selectMain = document.querySelector('#main')
var selectDessert = document.querySelector('#dessert');
var selectMeal = document.querySelector('#entire-meal');
var footerView = document.querySelector('.footer-bar');

var potImage = document.querySelector('.pot');
var showRecipe = document.querySelector('.recipe');

letsCookButton.addEventListener('click', displayRecipe);
clearButton.addEventListener('click', defaultView);
recipeButton.addEventListener('click', viewFooter)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRecipe() {
  potImage.classList.add('hidden');
  showRecipe.classList.remove('hidden');
  clearButton.classList.remove('hidden');

  if (selectSide.checked == true) {
    displayFood.classList.remove('hidden');
    displayMeal.classList.add('hidden');
    var cookSide = sides[getRandomIndex(sides)];
    displayFood.innerText = `${cookSide}!`;

  } else if (selectMain.checked == true) {
    displayFood.classList.remove('hidden');
    displayMeal.classList.add('hidden');
    var cookMain = mains[getRandomIndex(mains)];
    displayFood.innerText = `${cookMain}!`;

  } else if (selectDessert.checked == true) {
    displayFood.classList.remove('hidden');
    displayMeal.classList.add('hidden');
    var cookDessert = desserts[getRandomIndex(desserts)];
    displayFood.innerText = `${cookDessert}`;

  } else if (selectMeal.checked == true) {
    displayFood.classList.add('hidden');
    displayMeal.classList.remove('hidden');
    var mealSide = sides[getRandomIndex(sides)];
    var mealMain = mains[getRandomIndex(mains)];
    var mealDessert = desserts[getRandomIndex(desserts)];
    displayMeal.innerText = `${mealMain} with a side of ${mealSide} and ${mealDessert} for dessert!`;
  } else {
    potImage.classList.remove('hidden');
    showRecipe.classList.add('hidden');
    clearButton.classList.add('hidden');
    alert('Please select an option!');
  }
}

function defaultView() {
  potImage.classList.remove('hidden');
  showRecipe.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function viewFooter() {
  footerView.classList.remove('hidden');
}
