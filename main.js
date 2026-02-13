//Task 1 - Race numbers are assigned randomly. We've provided the necessary code at the top of the file. 
let raceNumber = Math.floor(Math.random() * 1000);

//Task 2 - Create a variable that indicates whether a runner registered early or not. Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
let earlyRegistered = false;

//Task 3 - Create a variable for the runner’s age and set it equal to a number. You’ll change this later as you test different runner conditions.=
let runnerAge = 18;

//Task 4 - Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.

if (runnerAge > 18 && earlyRegistered === true) {
  raceNumber += 1000;
}

//Task 5 - Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

//Task 6 - Since we already checked for early adults, we can now write a statement for late adults: else if runner is over 18 AND did not register early, they will race at 11:00am. Write the corresponding else if statement. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.

//Task 7 For people who are under 18 (regardless of registration), log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.

if (runnerAge > 18 && earlyRegistered === true) {
  console.log(`Race number: ${raceNumber}. Your race will begin at 9:30am.`);
} else if (runnerAge > 18 && earlyRegistered === false) {
  console.log(`Race number: ${raceNumber}. Your race will begin at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Race number: ${raceNumber}. Your race will begin at 12:30pm.`);
} else {
  console.log(`Race number: ${raceNumber}. Please go to the registration desk.`);
}
