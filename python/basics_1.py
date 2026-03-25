# This is a single-line comment


# Printing a message to the console
print("Hello, World!")


# Initializing variables and priting them
n = 73
print(f"The number is: {n}")


# Data types in Python
number_int = 42
number_float = 3.14
string = "Hello, Python!"
boolean = True
none_value = None  # Represents the absence of a value

# Data structures in Python
list = [1, 2, 3, 4, 5]  # A list is a mutable ordered collection of items
tuple = (1, 2, 3, 4, 5)  # A tuple is an immutable ordered collection of items
dictionary = {
    "name": "Alice",
    "age": 30,
}  # A dictionary is a collection of key-value pairs


# Operators in Python

# Arithmetic operators: +, -, *, /, **, %
sum_result = number_int + number_float  # Addition
difference_result = number_int - number_float  # Subtraction
product_result = number_int * number_float  # Multiplication
quotient_result = number_int / number_float  # Division
power_result = number_int**2  # Exponentiation
square_root_result = number_int**0.5  # Square root
module_result = number_int % 5  # Modulus

# Comparison operators: ==, !=, >, <, >=, <=
is_equal = number_int == number_float  # Equal to
is_not_equal = number_int != number_float  # Not equal to
is_greater = number_int > number_float  # Greater than
is_less = number_int < number_float  # Less than
is_greater_or_equal = number_int >= number_float  # Greater than or equal to
is_less_or_equal = number_int <= number_float  # Less than or equal to

# Logical operators: and, or, not
logical_and = boolean and True  # Logical AND
logical_or = boolean or False  # Logical OR
logical_not = not boolean  # Logical NOT


# Conditional statements

a = 50
b = 20

if a > 50:
    print("a is greater than 50")
elif a < 50:
    print("a is not greater than 50")
else:
    print("a is equal to 50")


# Loops

# While loop
counter = 0
while counter < 5:
    print(f"Counter: {counter}")
    counter += 1

# For ... in loop
for i in range(5):
    print(f"Iteration: {i}")


# Lists

# Accessing lists values
my_list = [1, 2, 3, 4, 5]
my_frankestein_list = [1, "two", 3.0, [4, 5], {"six": 6}]
print(f"My list: {my_list}")

print(f"Second element of my list: {my_list[1]}")

for item in my_list:
    print(f"Item: {item}")

# List methods
my_list.append(6)  # Adding an element to the end of the list
print(f"List after appending 6: {my_list}")

my_list.remove(3)  # Removing the first occurrence of the value 3
print(f"List after removing 3: {my_list}")

my_list.insert(2, 3)  # Inserting the value 3 at index 2
print(f"List after inserting 3 at index 2: {my_list}")

my_list.pop()  # Removing the last element of the list
print(f"List after popping the last element: {my_list}")

my_list.count(2)  # Counting the occurrences of the value 2 in the list
print(f"Count of 2 in the list: {my_list.count(2)}")

my_list.reverse()  # Reversing the list
print(f"List after reversing: {my_list}")

my_list.sort()  # Sorting the list in ascending order
print(f"List after sorting: {my_list}")

my_list.clear()  # Removing all elements from the list
print(f"List after clearing: {my_list}")

# Tuples

# Accessing tuple values
my_tuple = (1, 2, 3, 4, 5)
print(f"My tuple: {my_tuple}")

print(f"Second element of my tuple: {my_tuple[1]}")

for item in my_tuple:
    print(f"Item: {item}")

# Tuple methods
# Tuples are immutable, so they do not have methods that modify the tuple

my_tuple.count(2)  # Counting the occurrences of the value 2 in the tuple
print(f"Count of 2 in the tuple: {my_tuple.count(2)}")

my_tuple.index(
    3
)  # Finding the index of the first occurrence of the value 3 in the tuple
print(f"Index of 3 in the tuple: {my_tuple.index(3)}")

# Dictionaries

# Accessing dictionary values
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York",
}

print(f"My dictionary: {my_dict}")
print(f"Name: {my_dict['name']}")

for key in my_dict:
    print(f"Key: {key}, Value: {my_dict[key]}")

# Dictionary methods
my_dict["country"] = "Venezuela"  # Adding a new key-value pair to the dictionary
print(f"Dictionary after adding country: {my_dict}")

del my_dict["age"]  # Removing a key-value pair from the dictionary
print(f"Dictionary after deleting age: {my_dict}")

my_dict.update(
    {"name": "Anna"}
)  # Updating the value of an existing key in the dictionary
print(f"Dictionary after updating name: {my_dict}")

my_dict.clear()  # Removing all key-value pairs from the dictionary
print(f"Dictionary after clearing: {my_dict}")


# Input variables
user_input = input("Please enter something: ")
print(f"You entered: {user_input}")

age = int(input("Please, enter your age: "))
if age >= 18:
    print("You're allowed")
else:
    print("You're not allowed")
