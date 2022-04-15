// QUERY SELECTORS
var userTitle = document.querySelector('#titleInput');
var userBody = document.querySelector('#bodyInput');
var ideaDisplay = document.querySelector('#ideaDisplay');
var inputBoxes = document.querySelector('#ideaForm');
var savedButton = document.querySelector('#savedButton');

// EVENT LISTENERS
savedButton.addEventListener('click', showIdea);
inputBoxes.addEventListener('input', enableButton);
ideaDisplay.addEventListener('click', deleteIdea);
ideaDisplay.addEventListener('click', favoriteIdea);


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
    ideaDisplay.innerHTML += `<article class='idea-box'  id='${ideas[i].id}' data-index='${i}'>
      <section class='top-bar'>
        <img src='./assets/star.svg' alt='white star' class='star-button'>
        <img src='./assets/delete.svg' alt='white x' class='delete-button'>
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

function deleteIdea(event) {
  if (event.target.classList.contains('delete-button')) {
    for (var i = 0; i < ideas.length; i++) {
      if ((parseInt(event.target.closest('article').id)) === ideas[i].id) {
        ideas.splice(i, 1);
      }
    }
    event.target.closest("article").remove();
  };
}

function favoriteIdea() {
  if (event.target.classList.contains('star-button')) {
    for (var i = 0; i < ideas.length; i++) {
      if ((parseInt(event.target.closest('article').id)) === ideas[i].id) {
        ideas[i].updateIdea()
        if (ideas[i].star) {
          event.target.src = './assets/star-active.svg';
          event.target.alt = 'orange star'
        } else {
          event.target.src = './assets/star.svg';
          event.target.alt = 'white star'
        }
      }
    }
  }
}
