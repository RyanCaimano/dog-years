// I am forty years old and this is the first time I am writing comments in JS correctly (I hope)
var myAge = 40;
console.log(myAge);

// The first two years of a dog's life
var earlyYears = 2;
console.log(earlyYears);

earlyYears *= 10.5;
console.log(earlyYears);

myAge -= 2;
console.log(myAge);

// This is my age in human years when the dog was born
var laterYears = myAge;
console.log(laterYears);

// This would be my age if I aged as quickly as a dog does after he turns two years old (human years)
laterYears *= 4;
console.log(laterYears);

// This is my age in dog years
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

// This is how I change my name to all lower-case characters
var myName = 'RYAN'.toLowerCase();
console.log(myName);

// I used string interpolation in order to print this. Note to self: variable names cannot have spaces!!
var NAME = myName;
var HUMAN_AGE = myAge;
var DOG_AGE = myAgeInDogYears
console.log(`My name is ${NAME}. I am ${HUMAN_AGE} years old in human years which is ${DOG_AGE} years old in dog years.`);
