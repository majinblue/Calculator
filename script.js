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
