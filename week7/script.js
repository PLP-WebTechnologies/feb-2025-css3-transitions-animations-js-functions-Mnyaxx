// Function to save user preference to localStorage
function saveUserPreference(preference) {
  localStorage.setItem('userPreference', preference);
}

// Function to get user preference from localStorage
function getUserPreference() {
  return localStorage.getItem('userPreference');
}

// On page load, check if there's a saved preference and apply it
window.onload = function() {
  let savedPreference = getUserPreference();
  
  if (savedPreference) {
    document.body.style.backgroundColor = savedPreference; // Apply the saved color
  }
};

// Add event listener to the button to change background color
document.getElementById('changeColorButton').addEventListener('click', function() {
  let newColor = prompt("Enter a background color (e.g., #ff6347):");
  if (newColor) {
    document.body.style.backgroundColor = newColor;
    saveUserPreference(newColor); // Save the new color to localStorage
  }
});
document.getElementById('changeColorButton').addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
});

