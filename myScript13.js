//All questions should be printed to your Browser's console using console.log()

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//Function to house a switch statement choosing various doors to save the lady or....????
//Function and parameter named
function ladyOrTiger(whichDoor) {
  //Declared variable text for input and readout from switch
  let text;
  // the following commented text was to be attached to a button, either in html or javascript
  //   whichDoor =
  //     ("Choose your door, East, West, North, or South. Save the lady, or....",
  //     "Choose carefully");
  //switch statement to offer choices of doors with results as output
  switch (whichDoor) {
    //door choice
    case "East":
      //output text
      text =
        "Oh, no! You are facing a rather large tiger, and he is about to....";
      //break to exit switch
      break;
    case "West":
      text = "You are facing a stone wall. Try again";
      break;
    case "North":
      text = "You are facing a brick wall. Try again";
      break;
    case "South":
      text = "You are a Hero. Take the ladies hand and return home in Glory!";
      break;
    // dropthrough to provide feedback if instructions not met
    default:
      text =
        "That's not an option. Choose your door, East, West, North, or South";
  }
  //Readout. All test arguments gave expected results
  console.log(text);
}
// called the function and passed in arguments.
ladyOrTiger("West");
