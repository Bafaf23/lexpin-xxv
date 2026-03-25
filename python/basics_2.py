# Functions

def greet(name: str) -> str:
    """This function greets the person with the given name."""

    return f"Hello, {name}!"


greeting = greet("Alice")
print(greeting)


# Returning multiple values from a function
def calculate(a: int, b: int) -> tuple[int, int]:
    """This function returns the sum and product of two numbers."""

    sum_result = a + b
    product_result = a * b

    return sum_result, product_result


sum_value, product_value = calculate(5, 10)
print(f"Sum: {sum_value}, Product: {product_value}")


# Functions with default parameters
def greet_with_default(name: str = "Guest") -> str:
    """This function greets the person with the given name or 'Guest' if no name is provided."""

    return f"Hello, {name}!"


greeting_default = greet_with_default()
print(greeting_default)


# Functions that returns None
def print_greeting(name: str = "Stranger") -> None:
    """This function prints a greeting message for the given name."""

    print(f"Hello, {name}!")

print_greeting()


# Lambda functions
# A lambda function is an anonymous function that can have any number of arguments but only one expression.
# It is often used for short, simple functions that are not reused elsewhere in the code.

square = lambda x: x**2  # A lambda function that returns the square of a number
print(square(5))


# Classes

class Person:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

    def greet(self) -> str:
        """This method returns a greeting message for the person."""

        return f"Hello, my name is {self.name} and I am {self.age} years old."
    
person = Person("Bob", 30)

for key, value in person.__dict__.items():
    print(f"{key}: {value}")

print(person.greet())

# Inheritance

class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        """This method returns a sound that the animal makes."""

        return "Some sound"
    

class Dog(Animal):
    def speak(self) -> str:
        """This method returns the sound that a dog makes."""

        return "Woof!"
    
    def pet(self) -> str:
        """This method returns a message that the dog is being petted."""

        return f"{self.name} is being petted."
    

animal = Animal("Generic Animal")
dog = Dog("Perro Salchicha Gordo Bachicha")

print(animal.speak())
print(dog.speak())
print(dog.pet())