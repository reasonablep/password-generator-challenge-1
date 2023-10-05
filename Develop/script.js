// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define character sets
let charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special: "!\"#$%&\"'()*+,-./:;<=>?@[\]^_`{|}~"
}

//Create Event Listener for Button
generateBtn.addEventListener('click', function () {

// Configure window prompts
let passwordLength = window.prompt ("Enter password length");

if (passwordLength > 128) {
alert("Password length exceeds maxiumum allowed!")
return;

} else if (passwordLength < 8 ) {
alert("Password length is less than minimum allowed!")
return;

}

let uppercase = window.confirm ("Do you wish to include uppercase letters?");
let lowercase = window.confirm ("Do you wish to include lowercase letters?"); 
let numbers = window.confirm ("Do you wish to include numbers?");
let symbols = window.confirm ("Do you wish to include symbols?");

let charSet = '';

if (uppercase) {
  charSet += charSets.uppercase;

} if (lowercase) {
  charSet += charSets.lowercase;

} if (numbers) {
  charSet += charSets.numbers;
 
} if (symbols) {
  charSet += charSets.symbols;

  } if (charSet.length === 0) {
    alert('Please select a character set!');
    return;

  }

//Define generated password and characteristics
    let generatedPassword = generatePassword(passwordLength, charSet);
    writePassword(generatedPassword);

});

  function generatePassword(length, charSet) {
  if (charSet.length === 0) {
    return '';

  }

  let password = '';
  for (let i=0; i < length; i++) {
    let randomGenerate = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomGenerate);
  }

  return password;

}

// Write password to the #password input
  function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }
