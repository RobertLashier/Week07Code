//All questions should be printed to your Browser's console using console.log()

// //10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
// //function with one parameter to take array(arr)
// function averageElements(arr) {
//   // declare variable sum to hold the sum of the array
//   let sum = 0;
//   // use a for loop to iterate each element
//   for (let i = 0; i < arr.length; i++) {
//     // use plus equals to add each iteration of the array to the sum variable
//     sum += arr[i];
//   }
//   // Create a variable averageOfSum to hold the average, use the .length method to determine the number of elements,
//   // divide sum by number of elements, held by averageOfSum, printed by console.log
//   var averageOfSum = sum / arr.length;
//   //readout of average of numbers in array, met expected results
//   console.log(averageOfSum);
// }
// //called function and gave array as argument
// averageElements([60, 30]);

// // 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// //declaring function name with two parameters to take the arrays to be compared
// function greaterTrue(arr1, arr2) {
//   //instantiating variable to hold total of the string
//   let arr1Total = 0;
//   //using for loop to add each array element to the total
//   for (var i = 0; i < arr1.length; i++) {
//     arr1Total += arr1[i];
//   }
//   //instantiating variable  to hold average calculated
//   var arr1Average = arr1Total / arr1.length;

//   //instantiating variable to hold total of the string
//   let arr2Total = 0;
//   //using for loop to add each array element to the total
//   for (var j = 0; j < arr2.length; j++) {
//     arr2Total += arr2[j];
//   }
//   //instantiating variable  to hold average calculated
//   var arr2Average = arr2Total / arr2.length;
//   // if else statement to determine boolean and print to console
//   if (arr1Average > arr2Average) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// // calling the function and giving two arrays as arguments
// greaterTrue([2, 3, 4, 5], [6, 7, 8, 9]);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// declared and initilaized isIt for the boolean parameter with false as a base state
var isIt = false;
function willBuyDrink(isHotOutside, moneyInPocket) {
  // conditional that show both arguments must be met to return a true value
  if (isHotOutside === false && moneyInPocket > 10.5) {
    //changes state to true if both arguments are met
    isIt = true;
  }
  // read out of results of boolean condition. All test arguments gave expected results
  console.log(isIt);
}
// called the function and passed in arguments.
willBuyDrink(true, 15);
