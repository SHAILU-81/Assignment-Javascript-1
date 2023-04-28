function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  }

//   To use this function, weu can call it with any number as the argument, like this:

console.log(fizzBuzz(15)); // output: "FizzBuzz"
console.log(fizzBuzz(9)); // output: "Fizz"
console.log(fizzBuzz(10)); // output: "Buzz"
console.log(fizzBuzz(7)); // output: "7"
