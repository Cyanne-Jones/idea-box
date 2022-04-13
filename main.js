// QUERY SELECTORS
var userTitle = document.querySelector('#title-input');
var userBody = document.querySelector('#body-input');
var ideaDisplay = document.querySelector('.idea-display')

var savedButton = document.querySelector('.saved-button');

// EVENT LISTENERS
savedButton.addEventListener('click', showIdea);

// ARRAY
var ideas = [];

// FUNCTIONS
function saveIdea(event) {
  event.preventDefault()
  var newIdea = new Idea (userTitle.value, userBody.value);
  ideas.push(newIdea);
  console.log(ideas)
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
