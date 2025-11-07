// This is a simple comment

/**
 * This is a multi-line comment.
 * It purposely spans multiple lines to improve
 * redability and provide more detailed explanations.
 */

// Print "Hello World!" to the console
console.log("Hello World!");

// Variables and Data types
// JavaScript recommends use camelCase as the defualt naming convention

// String
let firstName = "Angélica"
console.log("Nice to meet you:", firstName)

// Integer
let x = 5
let y = 25
console.log("The sum of x + y =", x + y)

// Float
x = 3.5
console.log("Now, the sum of x + y =", x + y)

// Boolean (Only accepts two possible values: true or false)
let isJavaScriptFun = true
console.log("Is JavaScript fun?", isJavaScriptFun)

// Undefined
let z
console.log("The value of z is:", z)


// Some ways to print variables and strings together

// Comma separation
console.log("Hi! My name is", firstName + ". I am", y, "years old.")

// String concatenation
console.log("Hi! My name is " + firstName + ". I am " + y + " years old.")

// Template literals (Template strings: ` `)
// Spanish layout: AltGr (Right alt) + }
// English layout: ` (left of 1 key)
console.log(`Hi! My name is ${firstName}. I am ${y} years old.`)


// Operators
// Aritmetic operators: + - * / % ++ -- 

// Basic arithmetic operations
let a = 10
let b = 3
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)

// Modulus operator (Remainder of a division)
a = 2
b = 2
console.log("a % b =", a % b)


// Increment and Decrement operators
a = 10
b = 5

a++ // Allows to increase the value of a by 1
console.log("Now, a =", a)

b-- // Allows to decrease the value of b by 1
console.log("Now, b =", b)

// Bonus: Replicate increment with addition
a = a + 1
console.log("Again, now a =", a)

// Numeric Comparison operators: == != > < >= <=

a = 10
b = 5
c = 10
console.log("Is a equal to b?", a == b)
console.log("Is a different from b?", a != b)
console.log("Is a greater than b?", a > b)
console.log("Is a less than b?", a < b)
console.log("Is a greater than or equal to c?", a >= c)
console.log("Is a less than or equal to c?", c <= b)

// Logical operators: && (AND) || (OR) ! (NOT)
// - AND (&&): Returns true if both operands are true
// - OR (||): Returns true if at least one operand is true
// - NOT (!): Inverts the value of a boolean

let isSunny = true
let iHaveEnergy = false
console.log("Is it a good day for a walk?", isSunny && iHaveEnergy)

let iFeelTired = true
let iFeelThirsty = false
console.log("Should I drink a cup of coffee?", iFeelTired || iFeelThirsty)

let doILikeCoding = false
console.log("Do I like coding?", !doILikeCoding)

// JavaScript-specific operators
// Comparison operator: === !==
// - Strict equality (===): Compares both value and type
// - Strict inequality (!==): Compares both value and type for inequality

let num1 = 5       // Integer
let num2 = "5"     // String
console.log("Is num1 strictly equal to num2?", num1 === num2)
console.log("Is num1 strictly different from num2?", num1 !== num2)

// Exercises
// 1. Create two variables, assign them numeric values, and print their multiplication result.
// 2. Create a variable to store your age and print a message using template literals that includes your age.
// 3. Create three boolean variables and use logical operators to print the result of, at least, two different conditions.
// 4. Create a little script that initialize a numeric variable, then increment it by 1, and finally, compare it with the value of pi (3.14).