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

// variables used
var lowerletter=getRandomLower()
var upperletter=getRandomUpper()
var anynumber=getRandomNumber()
var specialchar=getRandomSymbol()
var passwordlength;
var uppercase;
var number;
var symbol;

// Functions to determine length of password
function stringlength(){
  passwordlength = prompt("Choose password length of 8 to 128 characters");

  if (passwordlength<8){
    alert("You must choose over 8 characters");
    stringlength();
  }
  else if (passwordlength>128){
    alert("Please choose less than 128 characters");
  }
  else if (isNaN(passwordlength)){
    alert("Password must be a number between 8-128 characters");
  }
  else{
    alert("The following screens will allow you to choose uppercase, numbers, symbols and lowercase by default");
  }
  return passwordlength;
}

//Function to determine if uppercase characters are used
function determineUppercase(){
    uppercase = prompt("Do you want to include uppercase ? \n (Yes or No)");
     uppercase = uppercase.toLowerCase();

     if (uppercase === null || uppercase === ""){
       alert("Please answer Yes or No");
       determineUppercase();
     }
     else if (uppercase === "yes" || uppercase === "y"){
       uppercase = true;
       return uppercase;
     }
     else if (uppercase === "no" || uppercase ==="n"){
       uppercase = false;
       return uppercase;
     }
     else {
       alert("Please answer Yes or No");
       determineUppercase();
     }
     return uppercase;

}

//Function to determine if number characters are used
function determineNumber(){
    number = prompt("Do you want to include numbers ? \n (Yes or No)");
     number = number.toLowerCase();

     if (number === null || number === ""){
       alert("Please answer Yes or No");
       determineNumber();
     }
     else if (number === "yes" || number === "y"){
       number = true;
       return number;
     }
     else if (number === "no" || number ==="n"){
       number = false;
       return number;
     }
     else {
       alert("Please answer Yes or No");
       determineNumber();
     }
     return number;
}

//Function to determine if  symbol characters are used
function determineSymbol(){
    symbol = prompt("Do you want to include symbols ? \n (Yes or No)");
     symbol = symbol.toLowerCase();

     if (symbol === null || symbol === ""){
       alert("Please answer Yes or No");
       determineSymbol();
     }
     else if (symbol === "yes" || symbol === "y"){
       symbol = true;
       return symbol;
     }
     else if (symbol === "no" || symbol ==="n"){
       symbol = false;
       return symbol;
     }
     else {
       alert("Please answer Yes or No");
       determineUppercase();
     }
     return symbol;
}

//function used to take all the input from the previous functions and generate a random password
function generatePassword(){
  stringlength();
  console.log(passwordlength);
  determineUppercase();
  console.log(uppercase);
  determineNumber();
  console.log(number);
  determineSymbol();
  console.log(symbol);


  var characters = lowerletter;
  var password = "";
  if (uppercase && number && symbol){
    characters += upperletter + anynumber + specialchar;
  }else if (uppercase && number){
    characters += upperletter + anynumber;
  }

  else if (anynumber && symbol){
    characters += anynumber + symbol;
  }
  else if (uppercase && symbol){
    characters += uppercase + symbol;
  }
  else if (uppercase){
    characters += upperletter;
  }
  else if (number){
    characters += anynumber; 
  }
  else if (symbol){
    characters += specialchar;
  }
  else{
    characters === lowerletter;
  }

    for(var i = 0; i < passwordlength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

// Write password to the #password input
function writePassword() {
  var password1 ="";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}
// Add event listner to generate button
generateBtn.addEventListener("click", writePassword);
 




// Generator functions - http://www.net-comber.com/charset.html


