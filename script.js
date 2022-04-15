// Create a function that adds two numbers together
function add(num1, num2) {
    return num1 + num2
}
// Create a function that subtracts two numbers
function subtract(num1, num2) {
    return num1 - num2
}
// Create a function that multiplies two numbers
function multiply(num1, num2) {
    return num1 * num2
}
// Create a function that divides two numbers
function divide(num1, num2) {
    return num1 / num2
}

// Create a function that takes in an operator and 2 numbers, and then calls one of the above functions
function operate(operator, num1, num2) {
    // Based on the operator passed in, run the corresponding function. (e.g.) If the plus sign '+' is passed in, run the add function with the numbers passed in
    switch (operator) {
        case '+': 
            add(num1, num2);
            break;
        case '-': 
            subtract(num1, num2);
            break;
        case '*': 
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

// Create a variable to store the h1 element within the display div
const numberDisplay = document.querySelector('h1')
let displayNumber;

// When a button is clicked, take the value of it's text content and toss it into the end of an array. Then display the all of the array elements on the screen within the 'display' div.
let numberArray = [];
// Since I do not want to call the function as soon as the script is loaded, I will get the value of  'textContent' from the event.target instead of passing in the element as an argument. This also allows me to use it on as the function for all my button listeners
const getNumber = () => {
    let buttonNumber = event.target.textContent;
    // Place the new number at the end of the array
    numberArray.push(buttonNumber);
    // Converts all the array elements into a string, remove the commas, and store them in the displayNumber variable.
    displayNumber = numberArray.toString().replace(/,/g, '');
    // Display each element of the array in the 'numberDisplay' h1 tag
    numberDisplay.textContent = displayNumber;
    
    // Log the array in the console to see if the values are returning correctly.
    console.log(numberArray)
    console.log(displayNumber)
    return;
}



// Create variables to store the button elements for manipulation
const btnZero = document.querySelector('#zero')
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector("#two")
const btnThree = document.querySelector("#three")
const btnFour = document.querySelector("#four")
const btnFive = document.querySelector("#five")
const btnSix = document.querySelector("#six")
const btnSeven = document.querySelector("#seven")
const btnEight = document.querySelector("#eight")
const btnNine = document.querySelector("#nine")
// Store the button elements within an array so I can perform operations on the whole set at once when needed.
const numberButtonArr = [
    btnZero,
    btnOne,
    btnTwo,
    btnThree,
    btnFour,
    btnFive,
    btnSix,
    btnSeven,
    btnEight,
    btnNine
]
// Add an event listener to each btn that runs the getNumber function whenever there is a click
numberButtonArr.forEach(btn => btn.addEventListener('click', getNumber));

