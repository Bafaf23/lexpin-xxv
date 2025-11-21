/**
 * Classes
 *
 * A class is a blueprint for creating objects with predefined
 * properties and methods.
 */

class Person {
  constructor(firstName, lastName, age, country = "Venezuela") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }

  greet() {
    console.log("Hello!");
  }

  introduce() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. I live in ${this.country}.`
    );
  }
}

let person1 = new Person("José", "Guillen", 30, "USA");
let person2 = new Person("Daniel", "Miranda", 25);

console.log(person1);
console.log(person2);

console.log(person1.firstName);
console.log(person2.age);

person1.greet();

person2.introduce();

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }

  searchBall() {
    console.log(`${this.name} is searching for the ball.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log("Meow! Meow!");
  }

  chaseMouse() {
    console.log(`${this.name} is chasing a mouse.`);
  }
}

let perrito = new Dog("Firulais", "Labrador");
let gatito = new Cat("Mittens", "Gray");

console.log(perrito);
console.log(gatito);

perrito.bark();
perrito.searchBall();
perrito.eat();
perrito.sleep();

gatito.meow();
gatito.chaseMouse();
gatito.eat();
gatito.sleep();

/**
 * Ejercicios
 *
 * Crea una clase llamada Circle que tenga una propiedad radio
 * y un método para calcular el área del círculo.
 *
 * Crea una clase llamada Person con propiedades como nombre,
 * apellido y edad, y un método para mostrar una introducción
 * personal.
 * Crea otras 3 clases que hereden de Person: Student, Teacher
 * y Administrator. Cada una debe tener propiedades y métodos
 * adicionales específicos.
 * - Student: grade, enrollment (array de materias), study() (método
 * que imprima un mensaje)
 * - Teacher: subject, salary, teach() (método que imprima un
 * mensaje)
 * - Administrator: department, manage() (método que imprima un
 * mensaje)
 */
