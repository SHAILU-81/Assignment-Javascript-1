// Prompt user to enter a number
let number = prompt("Enter a number:");

// Create a multiplication table in the textbook format for the entered number
console.log(`Multiplication table for ${number}`);

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}


// Example output for the input of 5:
// Multiplication table for 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


