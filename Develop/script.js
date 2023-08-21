// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length) {
  var passwordText = generatePassword();
  var passwordText = document.querySelector("#password");
  for (var i=0; i<length; i++){
    const charset="abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"'#''$''%&''()*+,-./:;<=>?@[\]^_`{|}~";

    // How to get around "this" in definition of character set? //

    const randomIndex = Math.floor(Math.random() * charset.length);
    passwordText +=charset[randomIndex];
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
