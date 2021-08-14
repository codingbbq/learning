# Learn and Understand NodeJs

NodeJs is a C++ program with V8 embedded that has added a wealth of great features to make it suitable to be a server technology.

NodeJs is a server technology designed to able to use JavaScript to write server code.

### What does javascript need to manage a server?

- Organize code into reusable piece
- Deal with files
- Deal with database
- Communicate over internet
- Ability to accept request and send responses
- Deal with work that takes a long time

### Scope :

Where is code you have access to particular variable or function

### Object :

A collection of name value pairs.

### Inheritance :

One object gets access to the properties and methods of another object.

### Function Constructors :

A normal function that is used to construct objects.

### IIFE

Immediately invoked function expressions.

```cpp
// So we have an expression that has a function that gets invoked
(function () {
}());
```

### To Run a Node program

In your command line, type

```cpp
> node app.js
```

### Modules, Exports and Require

**Module** - A Reusable block of code whose existence does not accidentally impact other code.

---

*Functions in Javascript are first-class. That means we can pass them as variables*

---

### Creating module

You can use `require()` to import a module in your javascript file. However it does not mean that once you use require and import your .js file, we would have access to all their functions.

First you need to export something to be able to use it. i.e

```cpp
var greet = function() {
	console.log("Hello")'
}
module.exports = greet;
```

**require** is a function, that you pass a path too.

**module.exports** is what the require function returns.

this works because your code is actually wrapped in a function that is given these things as function parameters.

require will cache the module. So if you call the same module twice in a file, it will be just one cached object.

### Revealing module pattern :

Exposing only the properties and methods you want via an returned object. A very common and clean way to structure and protect.

### Mutate :

To change something. For eg. adding a method or property to an object means you've mutated the object.

---

Javascript is synchronous - One process executing at a time. Think of it as one line of code executing at a time.

NodeJS is asynchronous

### Callback :

A function passed to some other function and will be invoked at some point in time.

### Error-first callback :

Callbacks that take an error object as their first parameter.

### Abstract (base) class :

A type of constructor you never work directly with, but inherit from.