/**
 * Even more exercises
 * 
 * 1. Declare two variables, a = 10 and b = 3.
 * Calculate the remainder when a is divided by b and store it
 * in a variable called remainder.
*/

let a = 10;
let b = 3;
let remainder = a % b;
console.log(remainder)

/**
 * 2. Declare a variable age = 25.
 * Write an expression using a comparison operator to check if age
 * is greater than or equal to 18. Store the result in a variable called
 * isAdult.
*/

let age = 25;
let isAdult = age >= 18;
console.log(isAdult)

/**
 * 3. Declare a boolean variable isRaining = false.
 * Use the logical NOT operator (!) to reverse its value and store
 * the result in shouldStayInside.
*/

let isRaining = false;
let shouldStayInside = !isRaining;
console.log(shouldStayInside);

/**
 * 4. Declare a variable counter = 5. Use the post-increment operator (++)
 * once. What is the value of counter after the operation?
*/

let counter = 5;
counter++
console.log(counter)

/**
 * 5. A configuration setting is valid if its status is a boolean OR its level
 * is a number greater than 50. Declare status = null and level = 75. Write a
 * single expression to check the validity and store the boolean result in
 * isValidConfig.
*/

let status = null;
let level = 75;
let isValidConfig = (typeof status === "boolean") || level > 50;
console.log(isValidConfig);

/**
 * 6. Calculate the result of the expression: (5 * 4) + (20 / 5) - 3
 * WITHOUT executing the script.
*/

let result = (5 * 4) + (20 / 5) - 3;
console.log(result);

/**
 * 7. Declare numString = "5" and numInt = 5. Compare them first using the
 * loose equality operator (==) and then using the strict equality operator
 * (===). Store the results in looseResult and strictResult.
*/

let numString = "5";
let numInt = 5;
let looseResult = numString == numInt;
let strictResult = numString === numInt;
console.log(looseResult);
console.log(strictResult);

/**
 * 8. Determine the final value of x after the following operations:
 * let x = 10;
 * x = x * 2 + 5 % 3;
 * WITHOUT executing the script.
*/

let x = 10;
x = x * 2 + 5 % 3;
console.log(x);

/**
 * 9. Determine if an integer year = 2024 is a leap year using only operators.
 * Other forms of code are not allowed. :)
 */

// A year is a leap year if it is divisible by 4, unless it is divisible by 100 but not by 400
// 1. Check if the year is divisible by 4.
// 2. If the year is divisible by 100, it is not a leap year.
// 3. If a year is divisible by 400, it is a leap year.

let year = 2025;
let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
console.log(isLeapYear)