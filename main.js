// QUERY SELECTORS
var userTitle = document.querySelector('#title-input');
var userBody = document.querySelector('#body-input');

var savedButton = document.querySelector('.saved-button');

// EVENT LISTENERS
savedButton.addEventListener('click', saveIdea);

// ARRAY
var ideas = [];

// FUNCTIONS
function saveIdea(event) {
  event.preventDefault()
  var newIdea = new Idea (userTitle.value, userBody.value);
  ideas.push(newIdea);
  console.log(ideas)
}
