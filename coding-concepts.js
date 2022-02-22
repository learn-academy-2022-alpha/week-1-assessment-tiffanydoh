// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: By pushing indigo, it will log 5. The index has moved from having 4 to 5 elements. 
// b) Verify and explain: I was correct! It logged 5. 5 is correct because if it was going to log the whole array with the new addition of "indigo", you would have to call on the const by console.log(colors). 


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: It is going to log 10. 
// b) Verify and explain: I was correct! It logged 10. It is correct because by adding .length to the end of cohort, it is counting the characters in that string.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will log 'o'
// b) Verify and explain: I was correct! It logged 'o'. It is correct because greeting[4] is outputing the 4th index in the string with H starting as 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will log 'Ruby'.
// b) Verify and explain: I was correct! It logged 'Ruby'. It was correct because by setting index = 1 and then console logging languages[index], it is going to log the first index in languages variable. "Javascript" is 0 which would make "Ruby" 1. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: It will log ["SATURDAY", "SUNDAY"]
// b) Verify and explain: I am correct! By attaching the built-in method .toUpperCase it will log the array all in uppercase. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: It will log 'number'.
// b) Verify and explain: I am correct! It logged 'number'. By using typeof, it will identify the type of data bring used, and combining it with dataTypes.length, it is taking that array and counting each character and spitting out a number. typeof will classify that number as a 'number'.
