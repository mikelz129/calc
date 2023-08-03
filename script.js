// Global Variables
let number;
let operator;
let secNum;
let displayValue = 80085;

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

const operate = function(x,func,y) {
    return func(x,y)
}

// CALC Working

const changeBlue = function() {
    const display = document.querySelector('#display');
    display.setAttribute('style', 'color: blue; background: white;');
}

const run = function() {
    const display = document.querySelector('#display');
    display.textContent=displayValue;
}

