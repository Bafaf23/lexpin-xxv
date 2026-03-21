function formatPadding(value: string | number): string {
  // TypeScript knows 'value' could be two things.
  // We must "narrow" the type to use specific methods.

  if (typeof value === "number") {
    return `${value}px`; // Here, value is treated strictly as a number
  }

  return value.trim(); // Here, value is treated strictly as a string
}

console.log(formatPadding(10));
console.log(formatPadding(" 2rem "));