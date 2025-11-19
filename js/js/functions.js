/**
 * Functions
 * 
 * A function is a block of code designed to perform a particular
 * task. It is executed when "called" or "invoked".
 */

// Function without parameters and without return value
function greet() {
  console.log("Hi :3");
}

// Function with parameters and without return value
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

// Function with parametes and reuturn value
function sum(a, b) {
  let result = a + b;
  return result;
}

greet(); // Calling the function
greetUser("Yeferson"); // Calling the function with an argument

console.log(sum(3, 5));

let add = sum(7, 2);
console.log(add);

/**
 * Ejercicios
 * 
 * Crea una función que reciba un nombre y un apellido y devuelva
 * un saludo personalizado (es decir, usando el nombre completo
 * recibido).
 * 
 * Crea una función que reciba la altura y peso de una persona y
 * retorne el índice de masa corporal (IMC).
 * 
 * Crea una función que retorne verdadero si se le envía un número
 * entero o flotante y falso en el caso contrario.
 */