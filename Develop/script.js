// Assignment Code

// Code is not running properly, password does not generate, will turn in assignment and work with a tutor to clean it up for resubmit//

const passwordEl = document.getElementById('#password');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById("#generate");

const getCharacters = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
}

// Add event listener to generate button
generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const isLower = lowerEl.checked;
  const isUpper = upperEl.checked;
  const isNumber = numberEl.checked;
  const isSymbol = symbolEl.checked;

  passwordEl.innerText = generatePassword (length, isLower, isUpper, isNumber, isSymbol);

});


// // Write password to the #password input
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

function generatePassword(length, lower, upper, number, symbols) {
  let generatedPassword = '';
  const checkedCount = lower + upper + number + symbol;
  const checkedArray = [{lower},{upper},{number},{symbol}].filter(item =>Object.values(item)[0]);


  if (checkedCount === 0) {
  return '';
  }

  for (let i=0; i<length; i+=checkedCount) {
    checkedArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += getCharacters [funcName] ();
    });
  }

  const finalPassword = generatedPassword.slice (0, length);

  return finalPassword;
}

//Random character generators//

function getLower () {
  return String.fromCharCode (Math.floor(Math.random ()*26) + 97)
  }

function getUpper () {
    return String.fromCharCode (Math.floor(Math.random ()*26) + 65)
    }

function getNumber () {
  return String.fromCharCode (Math.floor(Math.random () *10) + 48)
}

function getSymbol () {
      return String.fromCharCode (Math.floor(Math.random ()*15) + 33)
      }
