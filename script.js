// Global Variables
let number;
let operator;
let secNum;

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
