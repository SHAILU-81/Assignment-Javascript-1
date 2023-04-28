// Number
let num = 42;
console.log(typeof num); // Output: "number"

// String
let str = "Hello, World!";
console.log(typeof str); // Output: "string"

// Boolean
let bool = true;
console.log(typeof bool); // Output: "boolean"

// Null
let nullValue = null;
console.log(typeof nullValue); // Output: "object" (this is a known bug in JavaScript)

// Undefined
let undefinedValue;
console.log(typeof undefinedValue); // Output: "undefined"

// Object
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: "object"

// Array
let arr = [1, 2, 3, 4];
console.log(typeof arr); // Output: "object"

// Function
let add = function(a, b) {
  return a + b;
};
console.log(typeof add); // Output: "function"
