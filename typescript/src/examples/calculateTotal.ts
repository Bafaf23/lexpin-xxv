interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number; // Optional discount percentage
}

function calculateTotal(items: Product[]): number {
  return items.reduce((total: number, item: Product) => {
    const discount = item.discount || 0;
    return total + (item.price - discount);
  }, 0);
}

// Try adding an object missing 'price'
// —TS will throw an error before you even run it!
const cart = [
  { id: 1, name: "Mechanical Keyboard", price: 150 },
  { id: 2, name: "Gaming Mouse", price: 50, discount: 10 },
];

console.log(calculateTotal(cart));