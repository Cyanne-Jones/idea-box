// QUERY SELECTORS
var userTitle = document.querySelector('#title-input');
var userBody = document.querySelector('#body-input');
var ideaDisplay = document.querySelector('.idea-display');
var inputBoxes = document.querySelector('.idea-form');

var savedButton = document.querySelector('.saved-button');

// EVENT LISTENERS
savedButton.addEventListener('click', showIdea);
// if we wanted the query selector to be input class we would have had to create a for loop for it to work since it's a collection of elements.
inputBoxes.addEventListener('input', enableButton);
// using input instead of change solves our issue with needing to click outside of the input boxes to make the save button change color and enableButton

function disableButton() {
  savedButton.disabled = true;
  // need to change from disable to disabled
  savedButton.classList.remove('save-en');
  savedButton.classList.add('save-dis');
}

function enableButton() {
  if (userTitle.value && userBody.value) {
    savedButton.disabled = false;
    // need to change from disable to disabled
    savedButton.classList.remove('save-dis');
    savedButton.classList.add('save-en');
  } else {
    disableButton();
  }
}

// ARRAY
var ideas = [];

// FUNCTIONS
function saveIdea(event) {
  event.preventDefault()
  var newIdea = new Idea (userTitle.value, userBody.value);
  ideas.push(newIdea);
  userTitle.value = '';
  userBody.value = '';
  disableButton();
  // had to add disableButton function here so that when you click back into the form after the first submission it doesn't disable the button.
}

function showIdea() {
  saveIdea(event);
  ideaDisplay.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    ideaDisplay.innerHTML += `<article class='idea-box'>
      <section class='top-bar'>
        <img src='./assets/star-active.svg' alt='orange star'>
        <img src='./assets/delete.svg' alt='white x'>
      </section>
      <section class='box-body'>
        <h3 class='idea-title'>${ideas[i].title}</h3>
        <p class='idea-body'>${ideas[i].body}</p>
      </section>
      <section class='bottom-bar'>
        <img src='./assets/comment.svg' alt='plus sign'>
        <h4 class='idea-box-comment'>Comment</h4>
      </section>
    </article>`
  }
}
