// Task one
let firstName = prompt("Enter the first Name");
let lastName = prompt("Enter the last Name");

let fullName = firstName.concat(" ",lastName)
alert("Welcome " + fullName)


// Task two
let user_fav_mobile = prompt("Enter your favourite mobile name")
document.write("The length of the text you enter is " + user_fav_mobile.length + "<br> <br>")

// Task three
let varName = "Pakistani";
document.write("The index number of n is " + varName.indexOf('n') + "<br> <br>");

// Task four
let varNameTwo = "Hello World!";
document.write("The index number of l is " + varNameTwo.lastIndexOf('l') + "<br> <br>");


// Task five

let coutryName = "Pakistan";
document.write("The character on index 3 " + coutryName[3] + "<br> <br>");

// Task six

let cityName = 'Hyderabad';
document.write(cityName + "<br> <br>");

let afterReplacing = cityName.replace("Hyder","Islam")

document.write("After replacing " + afterReplacing + "<br> <br>")

// Task Seven

var message = "Ali and Sami are best friends. They play cricket and football together.";
let replaceText = message.replaceAll("and",'&');

document.write("After replacing text " + replaceText + "<br> <br>")

// Task eight

let stringVal = '456';
document.write(typeof(stringVal) + "<br> <br>")
document.write("Converting into " + typeof(parseInt(stringVal))+ "<br> <br>");

// Task Nine

let userInputs = prompt("Enter the text you want to add")
document.write(userInputs.toUpperCase() + "<br> <br>");

// Task ten
var userInput = prompt("Enter a sentence:");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

document.write(toTitleCase(userInput));

// Task eleven

var num = 35.36;

document.write(num.toString().replace(".","") + "<br>")

// Task twelve

var username = prompt("Enter your username: ");

if(/[@.,!]/.test(username)) {
  alert("Please enter a valid username without special symbols");
} else {
  console.log("Username stored successfully: " + username);
}


// Task thirteen

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item to search: ").toLowerCase();

var found = false;
for(var i = 0; i < A.length; i++) {
  if(A[i].toLowerCase() == search) {
    found = true;
    break;
  }
}

if(found) {
  alert("Item found in the list");
} else {
  alert("Item not found in the list");
}


// Task fourteen

var password = prompt("Enter password: ");

if(/^[a-zA-Z]+[0-9]+\w{4,}$/.test(password)) {
  console.log("Password is valid");
} else {
  console.log("Invalid password. Please enter a password that contains at least 6 characters, starts with a letter, and contains both letters and numbers");
}

// Task fifteen

var university = "University of Karachi";
let txt = "";

for(var i in university){
    txt += university[i] + "<br>";
}

document.write(txt)


// Task sixteen

let vareString = 'Pakistan'
document.write(vareString.substr(7))

// Task eighteen

var text = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = (text.match(new RegExp(word, "gi")) || []).length;

console.log("The word '" + word + "' appears " + count + " time(s) in the text");
