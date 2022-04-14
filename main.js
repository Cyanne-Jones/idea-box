// QUERY SELECTORS
var userTitle = document.querySelector('#titleInput');
var userBody = document.querySelector('#bodyInput');
var ideaDisplay = document.querySelector('#ideaDisplay');
var inputBoxes = document.querySelector('#ideaForm');
var savedButton = document.querySelector('#savedButton');

// EVENT LISTENERS
savedButton.addEventListener('click', showIdea);
inputBoxes.addEventListener('input', enableButton);

function disableButton() {
  savedButton.disabled = true;
  savedButton.classList.remove('save-enabled');
  savedButton.classList.add('save-disabled');
}

disableButton();

function enableButton() {
  if (userTitle.value && userBody.value) {
    savedButton.disabled = false;
    savedButton.classList.remove('save-disabled');
    savedButton.classList.add('save-enabled');
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
