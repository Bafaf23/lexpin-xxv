/**
 * Mini proyecto
 *
 * Crear un script de JS que simule un cajero automático :D
 * El cajeros debe poseer las siguientes características y
 * permitir las siguientes operaciones:
 *
 * - Solicitar al usuario una entrada que indique la operación a realizar.
 *   Las posibles operaciones son:
 *      1) Depositar fondos.
 *      2) Retirar fondos.
 *      3) Mostrar balance.
 *      4) Culminar la sesión.
 *
 * - Las opciones "depositar" y "retirar" deben incrementar y reducir respectivamente
 * una variable destinada a almacenar el balance del usuario, el cual debe poder ser
 * visualizado a través de la opción "mostrar".
 *
 * - La opción "culminar la sesión" termina el script.
 *
 * - El programa debe responder correctamente si el usuario ingresa una opción
 * inválida y solicitar un nuevo ingreso de la información.
 *
 * - Utilizar prompt() para capturar entradas; alert() para manejar salidas y
 * console.log para crear el registro del desarrollador.
 *
 * - Opcional (LEYENDAS I):
 * Generar alertas adecuadas en caso de que el usuario intente retirar más de lo
 * que posee en su cuenta.
 *
 * - Opcional (LEYENDAS II):
 * Diseñar pequeños algoritmos que validen si el usuario está
 * introduciendo números y que den una respuesta adecuada en caso de que no lo haga.
 *
 * Fecha tentativa: 16-11-2025
 */

let balance = 0, amount = 0;
let operation = "", selection = "";

do {
  do {
    operation = parseInt(
      prompt(
        "Welcome to the ATM!\nPlease choose an option:\n1) Deposit Funds\n2) Withdraw Funds\n3) Show Balance\n4) End Session"
      )
    );

    switch (operation) {
      case 1:
        do {
          amount = parseFloat(prompt("Enter the amount to deposit:"));
          if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please enter a positive number.");
          }
        } while (isNaN(amount) || amount <= 0);

        balance += amount;
        alert("Deposit successful. New balance: " + balance);
        break;
      case 2:
        // Validate the amount first without mutating `balance` inside the loop.
        do {
          amount = parseFloat(prompt("Enter the amount to withdraw:"));
          if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please enter a positive number.");
          } else if (amount > balance) {
            alert("Insufficient funds. Your current balance is: " + balance);
          }
        } while (isNaN(amount) || amount <= 0 || amount > balance);

        balance -= amount;
        alert("Withdrawal successful. New balance: " + balance);
        break;
      case 3:
        alert("Current balance: " + balance);
        break;
      default:
        alert("Invalid option. Please try again.");
        break;
    }
  } while (operation < 1 || operation > 3);

  selection = prompt("Do you want to make another operation? (y/n)");
} while (selection === "y" || selection == "Y");
