// Valid variables
let validVariable1 = 10;
const validVariable2 = "Hello world!";

// Invalid variables
let invalidVariable1 = 5 / "foo";
const invalidVariable2 = true + "bar";

console.log(validVariable1); // Output: 10
console.log(validVariable2); // Output: "Hello world!"
console.log(invalidVariable1); // Output: NaN
console.log(invalidVariable2); // Output: "truebar"
