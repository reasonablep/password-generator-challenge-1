// Assignment Code
var generateBtn = document.querySelector("#generate");
 
let passwordLength = window.prompt ("Enter password length");{

if (passwordLength > 128)
alert("Password length exceeds maxiumum allowed!")

&& if (passwordLength < 8 )
alert("Password length is less than minimum allowed!")
return;

}

let uppercase = window.confirm ("Do you wish to include uppercase letters?");
let lowercase = window.confirm ("Do you wish to include lowercase letters?"); 
let numbers = window.confirm ("Do you wish to include numbers?");
let symbols = window.confirm ("Do you wish to include symbols?");

let arr = [];

function generatePassword () {
let generatedPassword;
generatedPassword = "Test";
return generatedPassword;
}

for (let i=0; i<8; i++){
  arr.push(length); 

}
for (i=0; i=>0; i++){
  arr.push(uppercase);
}

for (i=0; i=>0; i++) {
  arr.push(lowercase);
} 

for (i=0; i=>0; i++){
  arr.push(numbers);
}

for (i=0; i=>0; i++) {
  arr.push(symbols);
}

let charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special: "!\"#$%&\"'()*+,-./:;<=>?@[\]^_`{|}~"
}

// value += charSet.charAt(Math.floor(Math.random() * charSet.length));
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
