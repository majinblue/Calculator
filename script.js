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

// When a button is clicked, take the value of it's text content and toss it into the end of an array. Then display the all of the array elements on the screen within the 'display' div.
let numberArray = [];
// Since I do not want to call the function as soon as the script is loaded, I will get the textContent from the event.target instead of passing in the element as an argument. This also allows me to use it on as the function for all my button listeners
const getNumber = () => {
    let buttonNumber = event.target.textContent;
    // Place the new number at the end of the array
    numberArray.push(buttonNumber);
    // Log the array in the console to see if the values are returning correctly.
    console.log(numberArray)
    return;
}

// Create a variable to store the h1 element within the display div
const numberDisplay = document.querySelector('h1')

// Create variables to store the button elements for manipulation
const buttonZero = document.querySelector('#zero')
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector("#two")
const buttonThree = document.querySelector("#three")
const buttonFour = document.querySelector("#four")
const buttonFive = document.querySelector("#five")
const buttonSix = document.querySelector("#six")
const buttonSeven = document.querySelector("#seven")
const buttonEight = document.querySelector("#eight")
const buttonNine = document.querySelector("#nine")

// Add an event listener to each button that runs the getNumber function whenever there is a click
buttonZero.addEventListener('click', getNumber)
buttonOne.addEventListener('click', getNumber)
buttonTwo.addEventListener('click', getNumber)
buttonThree.addEventListener('click', getNumber)
buttonFour.addEventListener('click', getNumber)
buttonFive.addEventListener('click', getNumber)
buttonSix.addEventListener('click', getNumber)
buttonSeven.addEventListener('click', getNumber)
buttonEight.addEventListener('click', getNumber)
buttonNine.addEventListener('click', getNumber)
