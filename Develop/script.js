// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//start coding here.



let length = prompt ("choose password length of at least 8 characters and no more that 128 characters");

function stringlength(inputtxt, minlength, maxlength)
{
  var field = inputtxt.value;
  var mnlen = minlength;
  var mxlen = maxlength;

  if(field.length<mnlen || field.length> mxlen)
{
return false;
}
else
{
  return true;
}
}

 

let lowercase = confirm ("Do you want to use lowercase?");
if(confirm() === true) {
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
}
let uppercase = confirm ("Do you want to use uppercase?");
if(confirm() === true) {
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
}
let numbers = confirm ("Do you want to use numbers?");
if(confirm() === true) {
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
}
let symbols = confirm ("Do you want to use symbols?");
if(confirm() === true) {
function getRandomSymbol() {
  const symbols = "!@#$%^&*()={}[]<>/,.+:;?_`|~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
}

console.log(getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol);





//adding DOM elements.
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl =document.getElementById('generate');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generator functions - http://www.net-comber.com/charset.html


