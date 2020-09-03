var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls', 'Garlic Mushrooms', 'Hush Puppies', 'Saffron Rice', 'Mac n Cheese', 'Cheddar Biscuits', 'Creamed Corn', 'Collard Greens', 'Egg Rolls'];

var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza', 'Teryaki Salmon', 'Chicken Stirfry', 'Siracha Chicken Wings'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Pumpkin Pie', 'Baklava', 'Flan', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Key Lime Pie', 'Croissants', 'Eclairs', 'Vanilla Ice Cream', 'Fudge Brownies', 'Blueberry Muffins'];

var letsCookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');

var displayFood = document.querySelector('h1');
var selectSide = document.querySelector('#side');
var selectMain = document.querySelector('#main')
var selectDessert = document.querySelector('#dessert');
var selectMeal = document.querySelector('#entire-meal');

var potImage = document.querySelector('.pot');
var showRecipe = document.querySelector('.recipe');

letsCookButton.addEventListener('click', displayRecipe);
clearButton.addEventListener('click', defaultView);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRecipe() {
  potImage.classList.add('hidden');
  showRecipe.classList.remove('hidden');

  if (selectSide.checked == true) {
    var cookSide = sides[getRandomIndex(sides)];
    displayFood.innerText = `${cookSide}!`;
  } else if (selectMain.checked == true) {
    var cookMain = mains[getRandomIndex(mains)];
    displayFood.innerText = `${cookMain}!`;
  } else if (selectDessert.checked == true) {
    var cookDessert = desserts[getRandomIndex(desserts)];
    displayFood.innerText = `${cookDessert}`;
  } else if (selectMeal.checked == true) {
    var mealSide = sides[getRandomIndex(sides)];
    var mealMain = mains[getRandomIndex(mains)];
    var mealDessert = desserts[getRandomIndex(desserts)];
    displayFood.innerText = `${mealMain} with a side of ${mealSide} and ${mealDessert} for dessert!`;
  }
}

function defaultView() {
  potImage.classList.remove('hidden');
  showRecipe.classList.add('hidden');
}
