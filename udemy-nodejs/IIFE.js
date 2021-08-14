var firstname = "Jane";

// Immediately invoked function expression
(function(lastname) {
    var firstname = "John";
    console.log(firstname + " " + lastname);
}("Doe"));

console.log(firstname);