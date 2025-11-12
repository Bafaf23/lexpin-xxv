/**
 * Conditionals in JavaScript
 *  Conditionals allow you to execute code based on certain conditions.
 * The most common conditional statements are if, else if, and else.
 * The syntax of an if statement is as follows:
 *  if (condition) {
 *    Code to be executed if the condition is true
 *  }
 */

let age = 9;
if (age >= 18) {
  console.log("Congrats! You can have a driver license!");
} else {
  console.log("You're too young to drive, buy a skateboard!");
}

let temperature = 30;
let isRaining = true;

if (temperature >= 28 && !isRaining) {
  console.log("Se está quemando el Zulia.");
}

// Pizza Cuadrado (50$) > McDonald's (30$) >= Arturo's (20$)
let people = 1;
let budgetPerPerson = 8;
let totalBudget = budgetPerPerson * people;

if (totalBudget >= 40) {
  console.log("Let's go to Pizza Cuadrado!");
} else if (totalBudget < 40 && totalBudget > 20) {
  console.log("Let's go to McDonald's");
} else if (totalBudget >= 10) {
  console.log("Let's go to Arturo's");
} else {
  console.log("We don't have enough money to eat out. Sale arepa.");
}

// Exercises

/**
 * 1. Create a variable to store the current hour (0 - 23).
 * Write a conditional statement that print:
 *    "Los esqueletos salen de su tumba" if the hour is between 1 and 5.
 *    "Los esqueletos están trabajando" if the hour is between 9 and 17.
 *    "Los esqueletos están durmiendo" for any other hour.
 */

let hour = 20;

if (hour >= 1 && hour <= 5) {
  console.log("Los esqueletos salen de su tumba");
} else if (hour >= 9 && hour <= 17) {
  console.log("Los esqueletos están trabajando");
} else {
  console.log("Los esqueletos están durmiendo");
}

/** 2. Create a variable to store a numeric grade (1 - 20).
 * Write a conditional statement that prints:
 *    "Approved" if the grade is 11 or higher.
 *    "Failed" if the grade is lower than 11.
 *
 *    Optional: Add conditionals to print:
 *      "A++" if the grade is 18 or higher.
 *      "A" if the grade is between 16 and 17.
 *      "B" if the grade is between 14 and 15.
 *      "C" if the grade is between 11 and 13.
 *      "D" if the grade is 10 or lower.
 */

let note = 10;

if (note >= 18) {
  console.log("A++");
} else if (note >= 16 && note <= 17) {
  console.log("A");
} else if (note >= 14 && note <= 15) {
  console.log("B");
} else if (note >= 11 && note <= 13) {
  console.log("C");
} else {
  console.log("D");
}

/**
 * 3. Craeate a variable called dayOfWeek (1 - 7).
 * Write a conditional statement that prints the name of the day
 * corresponding to the number (1 = Monday, 2 = Tuesday, etc.).
 */

let dayOfWeek = 1;

if (dayOfWeek == 1) console.log("Monday");
else if (dayOfWeek == 2) console.log("Tuesday");
else if (dayOfWeek == 3) console.log("Wednesday");
else if (dayOfWeek == 4) console.log("Thursday");
else if (dayOfWeek == 5) console.log("Friday");
else if (dayOfWeek == 6) console.log("Saturday");
else if (dayOfWeek == 7) console.log("Sunday");
else console.log("Invalid day");

/**
 * 4. (LEGENDARY EXCERSISE) Create a variable to store the birthdate of a person and prints the corresponding zodiacal sign based on the birthdate.
 */

// No :3

/**
 * Switch Statement
 * The switch statement is an alternative to using multiple if-else statements
 * when you need to compare a single variable against multiple values.
 * 
 * The syntax of a switch statement is as follows:
 *    switch (expression) {
 *      case value1:
 *        Code to be executed if expression equals value1
 *        break;
 *      case value2:
 *        Code to be executed if expression equals value2
 *        break;
 */

let fruit = "Strawberry";

switch (fruit) {
  case "Apple":
    console.log("It's an apple.");
    break;
  case "Banana":
    console.log("It's a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
  default:
    console.log("Invalid day");
    break;
}