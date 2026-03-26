import csv

data = [
    {"id": 1, "product": "Product A", "price": 10.0},
    {"id": 2, "product": "Product B", "price": 20.0},
    {"id": 3, "product": "Product C", "price": 30.0},
]

with open("inventory.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["id", "product", "price"])
    writer.writeheader()
    writer.writerows(data)

with open("inventory.csv", "r") as file:
    reader = csv.DictReader(file)

    expensive_items = []
    for row in reader:
        print(row)

        if float(row["price"]) >= 20.0:
            expensive_items.append(row)

print("Expensive items:")
for item in expensive_items:
    print(f"{item['product']} - ${item['price']}")
