<?php
# Comments

// This is a single-line comment
# This is also a single-line comment
/* This is a multi-line comment
   that spans multiple lines */

# Echo

echo "<h1>My first PHP heading</h1>";

# Variables and data types

$x = 5;
echo $x;

echo "</br>";

/* PHP supports the following data types:
  string, int, float, bool, array, object, null, resource */

var_dump($x); // returns data type and value of $x

# Constants

function test() {
  define("PI", 3.14159);
}

test();
echo PI;
echo "</br>";

# Strings methods

$str = "Hello, World!";
echo strlen($str); // returns the length of the string
echo str_word_count($str); // returns the number of words in the string
echo strrev($str); // returns the reversed string
echo str_contains($str, "World"); // checks if "World" is in the string (returns true or false)
echo strpos($str, "World"); // returns the position of the first occurrence of "World"
echo str_replace("World", "PHP", $str); // replaces "World" with "PHP" in the string

# Operators

$a = 10;
$b = 20;

echo $a + $b; // addition
echo $a - $b; // subtraction
echo $a * $b; // multiplication
echo $a / $b; // division
echo $a % $b; // modulus
echo $a ** $b; // exponentiation

$c = True;
$d = False;

echo $c && $d; // logical AND
echo $c || $d; // logical OR
echo !$c; // logical NOT

# Conditional statements

## If ... Else ... Elseif

$age = 20;
if ($age < 18) {
  echo "You are a minor.";
} elseif ($age >= 18 && $age < 65) {
  echo "You are an adult.";
} else {
  echo "You are a senior.";
}

if ($age < 12) echo "You are a child.";

// Ternary operator
$result = $age < 18 ? "You are a minor." : "You are not a minor.";
echo $result;

## Switch statement

$day = "Monday";
switch ($day) {
  case "Monday":
    echo "Today is Monday.";
    break;
  case "Tuesday":
    echo "Today is Tuesday.";
    break;
  default:
    echo "Today is not Monday or Tuesday.";
}

## Match Expression

$day = "Monday";
echo match($day) {
  "Monday" => "Today is Monday.",
  "Tuesday" => "Today is Tuesday.",
  default => "Today is not Monday or Tuesday.",
};

$random_day = 3;
echo match($random_day) {
  1, 2, 3, 4, 5 => "It's a weekday.", 
  6, 7 => "It's the weekend.",
  default => "Invalid day.",
};

# Loops

## While Loop

$i = 1;
while ($i <= 5) {
  echo "The number is: $i <br>";
  $i++;
}

## Do...While Loop

$j = 1;
do {
  echo "The number is: $j <br>";
  $j++;
} while ($j <= 5);

## For Loop

for ($k = 1; $k <= 5; $k++) {
  echo "The number is: $k <br>";
}

// foreach Function
$colors = array("red", "green", "blue");
foreach ($colors as $value) {
  echo "Color: $value <br>";
}

## Break and Continue

for ($i = 1; $i <= 6; $i++) {
  if ($i == 3) {
    continue; // skips the rest of the loop when $i is 3
  }
  if ($i == 5) {
    break; // exits the loop when $i is 5
  }
  echo "The number is: $i <br>";
}

# Functions

function greet($name = "Guest") {
  return "Hello, $name!";
}

echo greet();
echo greet("Alice");

# Arrays

## Indexed Arrays

$fruits = array("apple", "banana", "cherry");
echo $fruits[0]; // outputs "apple"

## Associative Arrays
$car = array("brand" => "Toyota", "model" => "Corolla", "year" => 2020);
echo $car["brand"]; // outputs "Toyota"

## Multidimensional Arrays
$contacts = array(
  array("name" => "Alice", "email" => "alice@example.com"),
  array("name" => "Bob", "email" => "bob@example.com")
);
echo $contacts[0]["name"]; // outputs "Alice"

## Manipulating arrays

// We can also create arrays with brackets
$fruits = [
  "apple", 
  "banana", 
  "cherry",
];
echo $fruits[0]; // outputs "apple"

$fruits[0] = "orange";
echo $fruits[0]; // outputs "orange"

// We can update all values of an array using a loop
foreach ($fruits as $fruit) {
  $fruit = strtoupper($fruit);
  echo "$fruit <br>";
}

$fruits[] = "APPLE";

// Deleting elements from an array

$fruits = array("apple", "banana", "cherry");
array_shift($fruits); // removes the first element ("apple")

$fruits = array("apple", "banana", "cherry");
array_pop($fruits); // removes the last element ("cherry")

$fruits = array("apple", "banana", "cherry");
array_splice($fruits, 1, 1); // removes one element at index 1 ("banana")

$car = array(
  "brand" => "Toyota",
  "model" => "Corolla",
  "year" => 2020
);
unset($car["model"]); // removes the "model" element from the associative array

## Array methods

$numbers = array(1, 2, 3, 4, 5);

// count
echo count($numbers); // Count the number of elements in the array

// array_merge
$more_numbers = array(6, 7, 8);
$all_numbers = array_merge($numbers, $more_numbers); // Merge two arrays
print_r($all_numbers);

// in_array
// Returns true if a value exists in an array
if (in_array(3, $numbers)) {
  echo "3 is in the array.";
}

// array_search
// Returns the index of a value in an array
$index = array_search(4, $numbers);
echo "The index of 4 is $index.";

// sort
sort($numbers); // Sort the array in ascending order
print_r($numbers);

// rsort
rsort($numbers); // Sort the array in descending order
print_r($numbers);

// array_keys
$car_keys = array_keys($car); // Get all the keys of the array
print_r($car_keys);

// array_values
$car_values = array_values($car); // Get all the values of the array
print_r($car_values);

/* Exercise
  Create a series of forms that take two numbers as input and perform basic arithmetic operations (addition, subtraction, multiplication, division) using PHP.
*/

?>