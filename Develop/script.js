// Assignment Code
var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#letters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  constant 

  
//Random character generators//

  function getLower () {
    return String.fromCharCode (Math.floor(Math.random ()*26) + 97)
    }

  function getUpper () {
      return String.fromCharCode (Math.floor(Math.random ()*26) + 65)
      }

  function getSymbol () {
        return String.fromCharCode (Math.floor(Math.random ()*15) + 33)
        }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);