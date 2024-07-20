//All questions should be printed to your Browser's console using console.log()

// //  1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 103];
// // Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// //   Do not use numbers to reference the last element, find it programmatically.
// //  ages[7] - ages[0] is not allowed!
// // Use the pop method to extract the last element of the array,
// //     the shift element to extract the first element of the array,
// //     declare variable ageSub to hold the difference
// //     console.log to print to console
// let ageSubtract = ages.pop() - ages.shift();
// console.log(ageSubtract);
// // Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// Use a loop to iterate through the array and calculate the average age.
// declare variable sum to hold the sum of the array
let sum = 0;
// use a for loop to iterate each element
for (let i = 0; i < ages.length; i++) {
  // use plus equals to add each iteration of the array to the sum variable
  sum += ages[i];
}
// Create a variable averageOfSum to hold the average, use the .length method to determine the number of elements,
// divide sum by number of elements, held by averageOfSum, printed by console.log
let averageOfSum = sum / ages.length;
console.log(averageOfSum);
