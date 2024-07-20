//All questions should be printed to your Browser's console using console.log()

// // 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// // For example:
// const names = ["Kelly", "Sam", "Kate"]; // starting with this array
// const nameLengths = []; // create a new array
// for (let name of names) {
//   nameLengths.push(name.length);
// }
// console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
const nameLengths = [5, 3, 4];
//variable instantiated
let lengthSum = 0;
//for loop to add name lengths
for (let i = 0; i < nameLengths.length; i++) {
  lengthSum += nameLengths[i];
}
console.log(lengthSum);
