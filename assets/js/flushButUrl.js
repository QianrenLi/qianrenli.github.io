// Get all the buttons
var buttons = document.querySelectorAll('.tag-btn');

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Prevent the default action
    event.preventDefault();

    // Change the hash part of the URL
    location.hash = event.target.getAttribute('href');
  });
});