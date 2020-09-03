var letsCookButton = document.querySelector('.lets-cook');
var potImage = document.querySelector('.pot');

letsCookButton.addEventListener('click', displayRecipe);

function displayRecipe() {
  potImage.classList.add('hidden');
}
