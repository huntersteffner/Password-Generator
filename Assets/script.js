// Assignment Code
// HTML elements
const generateBtn = document.querySelector("#generate");
const characterID = document.getElementById('characters')
const passwordText = document.querySelector("#password");
const numberID = document.getElementById('numbers')
const upperID = document.getElementById('uppercase')
const lowerID = document.getElementById('lowercase')
const specialID = document.getElementById('special-characters')

// Variables
let validCharacters
let password


// character types
const numberCharacters = '0123456789'
const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
const specialCharacters = '!@#$%^&*()-_=+<>'

// All logic for generating password

function createPassword() {
  let password = ''

  // Additional variables
  let characterTotal = parseInt(characterID.value)
  let passwordLength

  // Function determining password length
  if (characterTotal >= 7  && characterTotal <= 128) {
    passwordLength = characterTotal
  } else {
    alert ('Invalid range')
  }
  validCharacters = ''

  // Check to see if numbers are accepted
  if (numberID.checked) {
    validCharacters += numberCharacters
  }
  // Check to see if uppercase is accepted
  if (upperID.checked) {
    validCharacters += upperCharacters
  }
  // Check to see if lowercase is accepted
  if (lowerID.checked) {
    validCharacters += lowerCharacters
  }
  // Check to see if special characters are accepted
  if (specialID.checked) {
    validCharacters += specialCharacters
  }

  // Alert if no checkboxes are selected
  if(numberID.checked === false && upperID.checked === false && lowerID.checked === false && specialID.checked === false) {
    alert(`None of the checkboxes are selected.`)
  }

// For loop to generate password
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * validCharacters.length - 1)
    password += validCharacters.substring(randomNumber,randomNumber + 1)
  }
  
  passwordText.value = password
}

// Run event for generating password on click or "Enter" events
const btnClick = generateBtn.addEventListener('click', function () {
  createPassword()
});

const enterBtn = document.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    createPassword()
  }
})