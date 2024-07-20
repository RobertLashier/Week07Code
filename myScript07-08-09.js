//All questions should be printed to your Browser's console using console.log()

// //7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// function concatFunction(word, n) {
//   // Used the repeat method on the variable word to iterate,
//   // used the n variable to set the number of iterations
//   // printed
//   console.log(word.repeat(n));
// }
// // Called the function and entered values for the arguments
// concatFunction("Hello", 5);

// // 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
// //Used an arrow function to be concise. No return required to pass out of scope.
// let fullName = (firstName, lastName) => firstName + " " + lastName;
// //Printed out arrow function with arguments entered.
// console.log("Billy", "Spears");

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function numbersGreaterThan(arr) {
  //declare variable for true/false condition and variable for sum of array members
  var ret = false;
  var arraySum = 0;
  //use a for loop to iterate each element
  for (let i = 0; i < arr.length; i++) {
    // use plus equals to add each iteration of the array to the sum variable
    arraySum += arr[i];
  }
  if (arraySum > 100) {
    ret = true;
  }
  console.log(ret);
}
numbersGreaterThan([111, 5]);
