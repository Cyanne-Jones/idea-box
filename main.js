// QUERY SELECTORS
var userTitle = document.querySelector('#title-input');
var userBody = document.querySelector('#body-input');
var ideaDisplay = document.querySelector('.idea-display');
var inputBoxes = document.querySelector('.idea-form');

var savedButton = document.querySelector('.saved-button');

// EVENT LISTENERS
savedButton.addEventListener('click', showIdea);
inputBoxes.addEventListener('change', enableButton);

function disableButton() {
  savedButton.disable = true;
  savedButton.classList.remove('save-en');
  savedButton.classList.add('save-dis');
}

function enableButton() {
  if (userTitle.value && userBody.value) {
    savedButton.disable = false;
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
