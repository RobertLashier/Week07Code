//All questions should be printed to your Browser's console using console.log()

// 2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Declare variable names and populate array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Instantiate variable nameLengthSum to hold sum of each array element's length
let nameLengthSum = 0;
// use a for of loop to declare variable name for each loop element and loop for each element
// used naming convention name of names to show relationsip of element to array
for (const name of names) {
  // use plus equals and .length method to add each element's length to nameLengthSum
  nameLengthSum += name.length;
}
// Outside of loop:
// declare new varible for averageOfLength, calculate its value by dividing nameLengthSum by
// number of elements in the array using .length method on the array variable names.
let averageOfLength = nameLengthSum / names.length;
//print average name length to console
console.log(averageOfLength);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// Not a loop, used concat method on array
console.log(names.concat());
