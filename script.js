// Global Variables
let operator;
let secNum;
let displayValue = 0;

// Main Functions
const add = function(x,y) {
    return x + y
}

const subtract = function(x,y) {
    return x - y    
}

const multiply = function(x,y) {
    return x * y
}

const divide = function(x,y) {
    return x / y
}

const operate = function() {
    console.log(displayValue)
    console.log(secNum)
    console.log(operator)
    switch (operator) {
        case "sub":
            newNum = displayValue - secNum;
            displayValue = newNum;
            break;
        case "multi":
            newNum = displayValue * secNum;
            displayValue = newNum;
            break;
        case "div":
            newNum = displayValue / secNum;
            displayValue = newNum;
            break;
        case "add":
            newNum = displayValue + secNum;
            displayValue = newNum;
            break;
        }
        console.log(displayValue)
        const display = document.querySelector('#display');
        display.textContent=displayValue;
}

// CALC Working
const run = function() {
    const display = document.querySelector('#display');
    display.textContent=displayValue;
}

// NUMBERS
const ce = function() {
    console.log(displayValue);
    displayValue = "";
    console.log(displayValue);
    const display = document.querySelector('#display');
    display.textContent=displayValue;
}

const number = function(buttonNum) {
    displayValue = displayValue + buttonNum;
    const display = document.querySelector('#display');
    display.textContent=displayValue; 
    console.log(displayValue)    
}

// Function Buttons
const subButton = function() {
    operator = "sub"
    console.log(operator)    
}

const addButton = function() {
    operator = "add"
    console.log(operator)    
}

const multiButton = function() {
    operator = "multi"
    console.log(operator)    
}

const divButton = function() {
    operator = "div"
    console.log(operator)    
}