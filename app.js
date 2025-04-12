// Declaring variables for personal information
let myName = "Kpamor Raphael";
let myAge = 33;
let myNationality = "Nigerian";

// Logging a sentence that introduces me using template literals
console.log(`My name is ${myName}, I am ${myAge} years old and I am ${myNationality}.`);

// Declaring a constant string for my favorite quote
const myFavoriteQuote = "Whether you think you can, or you think you can't you're right.";

// Attempting to log the quote in uppercase and lowercase 
console.log(myFavoriteQuote.toLocaleUpperCase());
console.log(myFavoriteQuote.toLocaleLowerCase()); 

// Reversing a string "Palindrome" and logging the reversed result
let word = "Palindrome";
let reversedWord = word.split("").reverse().join(""); // Splits the string into an array, reverses it, and joins it back
console.log(reversedWord); // Logs: "emordnilaP"

// Declaring prices for vegetables and calculating the total price
let tomatoPrice = 100;
let pepperPrice = 200;
let onionPrice = 150;
let totalPrice = tomatoPrice + pepperPrice + onionPrice; // Summing up the prices
console.log(`The total price of the vegetables is: ₦${totalPrice}`); // Logs the total price

// Declaring scores for different subjects and calculating the average score
const mathScore = 90;
const englishScore = 85;
const scienceScore = 88;
const historyScore = 92;
const geographyScore = 95;
const averageScore = (mathScore + englishScore + scienceScore + historyScore + geographyScore) / 5; // Calculating the average
console.log(`My average score for the term is: ${averageScore}`); // Logs the average score

// Declaring an array of my favorite foods
var myFavoriteFoods = ["Jollof Rice", "Pasta", "Pizza", "Burgers", "Salad"];

// Logging the first and last items in the array
console.log(myFavoriteFoods[0]); // Logs: "Jollof Rice"
console.log(myFavoriteFoods[myFavoriteFoods.length - 1]); // Logs: "Salad"

// Adding new items to the beginning and end of the array
myFavoriteFoods.unshift("Sushi"); // Adds "Sushi" to the beginning of the array
myFavoriteFoods.push("Fried Rice"); // Adds "Fried Rice" to the end of the array
console.log(myFavoriteFoods); // Logs the updated array

// Declaring arrays for students in different classes
var jssOne = ["Ngozi", "Arike", "Olamide", "Chibuzor", "Fatima", "Nura", "Ifeoluwa", "Uchenna", "Musa", "Oluebube"]; // Students in JSS One
var jssTwo = ["Obinna", "Adebayo", "Rukayya", "Usman", "Temilorun", "Nneka", "Morenike", "Oluwafemi", "Hadiza", "Usman"]; // Students in JSS Two
var jssThree = ["Shehu", "Abdullahi", "Zainab", "Amarachi", "Yetunde", "Ifeanyi", "Chukwudi", "Ayodele", "Bayo", "Amina"]; // Students in JSS Three


console.log(jssOne); // Logs the students in JSS One
console.log(jssTwo); // Logs the students in JSS Two
console.log(jssThree); // Logs the students in JSS Three