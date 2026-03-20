// <T> is a placeholder for a type that is determined
// when the function is called
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const stringArray = wrapInArray("Hello"); // Type is string[]
const numberArray = wrapInArray(42);  // Type is number[]
const booleanArray = wrapInArray(true); // Type is boolean[]

console.log(stringArray);
console.log(numberArray);
console.log(booleanArray);

// This prevents you from doing something silly like:
// stringArray[0].toFixed(); // Error: toFixed does not exist on type 'string'