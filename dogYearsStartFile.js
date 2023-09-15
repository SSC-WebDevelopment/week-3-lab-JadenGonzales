//Jaden Gonzales 9/14/23
//store the value of my current age
const myAge = 20;

//store the value of 2
let earlyYears = 2;
earlyYears *= 10.5;

//calculate years
let laterYears = earlyYears-2;

//calc dog years of later years
laterYears *= 4;
//console.log(earlyYears);
//console.log(laterYears);

//add early and later years to get age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//print to the console values stored in variables
const myName = "Jaden".toLowerCase();
//console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
const resultElement = document.getElementById("result");
resultElement.textContent = `My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`;