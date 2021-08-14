// function statement
function greet() {
    console.log("Hi");
}

// Funciton are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// Function expression
var greetMe = function() {
    console.log("Hello");
}

greetMe();

// Using function expression on the fly.
logGreeting(function() {
    console.log("On the fly");
});
