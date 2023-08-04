// Global Variables
let operator = "";
let operatorClicked = false;
let secNum = "";
let displayValue = "";

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
        case "minus":
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
        secNum = "";
        const secDisplay = document.querySelector('#secDisplay');
        secDisplay.textContent=secNum;

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
    secNum = "";
    operator = 0;
    operatorClicked = false
    console.log(displayValue);
    const display = document.querySelector('#display');
    display.textContent=displayValue;
    const secDisplay = document.querySelector('#secDisplay');
    secDisplay.textContent=secNum;
    const opDisplay = document.querySelector('#opDisplay');
    opDisplay.textContent=secNum;
    }

const number = function(buttonNum) {
    if (operatorClicked == true) {
        secNum = secNum + buttonNum;
        console.log("secNum",secNum);
        const secDisplay = document.querySelector('#secDisplay');
        secDisplay.textContent=secNum;
    } else {
        displayValue = displayValue + buttonNum;
        console.log("displayValue",displayValue);
        const display = document.querySelector('#display');
        display.textContent=displayValue;
    }
}
  

// Function Buttons
const subButton = function() {
    operator = "minus"
    operatorClicked = true
    const secDisplay = document.querySelector('#opDisplay');
    secDisplay.textContent="minus";
    console.log(operator)    
}

const addButton = function() {
    operator = "add"
    operatorClicked = true
    const secDisplay = document.querySelector('#opDisplay');
    secDisplay.textContent="plus";
    console.log(operator)    
}

const multiButton = function() {
    operator = "multi"
    operatorClicked = true
    const secDisplay = document.querySelector('#opDisplay');
    secDisplay.textContent="multi";
    console.log(operator)    
}

const divButton = function() {
    operator = "div"
    operatorClicked = true
    const secDisplay = document.querySelector('#opDisplay');
    secDisplay.textContent="by";
    console.log(operator)    
}