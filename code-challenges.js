// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.
    //Pseudo-Code:
        //Create a function called longerString
        //longerString is going to take two parameters: string1 and string2
        // If first string is longer than the second one, return first string; else return the second string.
        //return the string with more characters
// One set has to be commented out because theyre sharing a const longerString.
Set one: // Output: banana
const fruit1 = "apple"
const fruit2 = "banana"
const longerString = (fruit1, fruit2) => {
    if(fruit1.length > fruit2.length) {
        return `${fruit1}`
    } else {
        return `${fruit2}`
    }
}
console.log(longerString(fruit1, fruit2)) //Output: banana

// Set two: // Output: cherry
const fruit3 = "cherry"
const fruit4 = "kiwi"
const longerString = (fruit3, fruit4) => {
    if(fruit3.length > fruit4.length) {
        return `${fruit3}`
    } else {
        return `${fruit4}`
    }
}
console.log(longerString(fruit3, fruit4)) //Output: cherry

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
    //Pseudo-Code:
        // Function Signature
            //input: number
            //output: string indicating whether number is below boiling point, at boiling point, or above boiling point.
        //Process: 
            //Create a function called howHot that takes in a number called temp1, temp2, temp3. Also create an if/ else if statement.
            //The boiling point is 212 degrees Fahrenheit: if temp is below that it is below boiling point, if temp is higher, it is above boiling point, if temp is 212, it is at boiling point.
const temp1 = 42
const temp2 = 350
const temp3 = 212
const howHot = (temp1) => {
    if(temp1 > 212) {
        return `${temp1} is above boiling point`
    } else if(temp1 === 212) {
        return `212 is at boiling point`
    } else if (temp1 < 212) {
        return(`${temp1} is below boiling point`)
    }
} 
console.log(howHot(temp1)) // Output: 42 is below boiling point

const howHot2 = (temp2) => {
    if(temp2 > 212) {
        return `${temp2} is above boiling point`
    } else if(temp2 === 212) {
        return `212 is at boiling point`
    } else if (temp2 < 212) {
        return(`${temp2} is below boiling point`)
    }
} 
console.log(howHot2(temp2)) // Output: 350 is above boiling point

const howHot3 = (temp3) => {
    if(temp3 > 212) {
        return `${temp3} is above boiling point`
    } else if(temp3 === 212) {
        return `212 is at boiling point`
    } else if (temp3 < 212) {
        return(`${temp3} is below boiling point`)
    }
} 
console.log(howHot3(temp3)) // Output: 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
    //Pseudo-Code: 
        //Function Signature
            //input: number
            //output: number adding up all the index or numbers in the both array
        //Process: 
            //Create a function called allNumbersAdded that takes in a parameter of ().
            //Have a return where myNumbers1.length and myNumbers2.length is added together.
            //Call on allNumbersAdded() with console log.
            // Can also go straight to using a console log with a built in method.
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
const allNumbersAdded = () => {
    return myNumbers1.length + myNumbers2.length
}
console.log(allNumbersAdded()) //Output: 10. 
//Another Solution:
console.log(myNumbers1.length + myNumbers2.length) //Output: 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"
    //Pseudo-Code:
        //Function Signature:
            //input: console log a built in method and a string
            //output: a string that is reversed
        //Process:
            //Since there is no way to reverse a string, what first needs to be done is .split the string into an array with "".
            //Then .reverse to reverse the characters.
            //After .join back the characters with "" so it becomes one word. 
const currentCohort = "Alpha 2022"
console.log(currentCohort.split("").reverse().join("")) // -> 2202 ahplA


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
    //Psuedo-Code:
        //Function Signature:
            //input: numbers in myArray
            //output: if the number is even or odd
        //Process: Create a for loop with starting at i = 0, keep the loop going if index is less than the length of myArray using .length, and have it i++ so it runs through each number in the array.
        //Create an if/else statement in the loop where if is met by the condition: myArray 5 2 == 0 for even; else console log "odd"

const myArray = [13, 34, 5, 10, 27, 42]
for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }  
} // Output: odd, even, odd, even, odd, even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
    //Psuedo-Code:
        //Function Signature:
            //input: two numbers
            //output: subtract those two numbers to get a result
        //Process: 
            //Create a function called subtractNumbers with two parameters.
            //Create an if/else statement with relational operators. See if number1 is bigger than number2, if it is subtract number1 from number2; else subtract number2 from number1.
            //If//else statement to see if number3 is bigger than number, if so, subtract number3 from number4; if not, subtract number4 from number3.
            //Console log to call out functions.

//One set has to be commented out because there is const with the same name. 
// Set one:
const number1 = 58
const number2 = 100
const subtractNumbers = (number1, number2) => {
    if(number1 < number2){
        return number2 - number1
    } else {
        return number1 - number2
    }
}
console.log(subtractNumbers(number2, number1)) // Output: 42


// Set two:
const number3 = 27
const number4 = 24
const subtractNumbers = (number3, number4) => {
    if(number3 < number4){
        return number4 - number3
    } else {
        return number3 - number4
    }
}
console.log(subtractNumbers(number3, number4))


