# 1. Create a program that reads a text file and counts the number of
# words in it.
# Prase: The quick brown fox jumps over the lazy dog.
# Output: 9

with open("text.txt", "r") as file:
    text = file.read()
    words = len(text.split())
    print(words)

# 2. Create a program that write a csv file with the following data:
# name, age, city (with at least 5 entries), reads it and prints:
#     - The count of people from each city.
#     - The average age of all the people.
#     - The name of the oldest person.
#     - The count of all the people whose age is below 18.

import csv

data = [
    {"name": "Alice", "age": 30, "city": "New York"},
    {"name": "Bob", "age": 25, "city": "Los Angeles"},
    {"name": "Charlie", "age": 35, "city": "New York"},
    {"name": "David", "age": 20, "city": "Chicago"},
    {"name": "Eve", "age": 15, "city": "Los Angeles"},
]

with open("people.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name", "age", "city"])
    writer.writeheader()
    writer.writerows(data)

with open("people.csv", "r") as file:
    reader = csv.DictReader(file)

    city_count = {}
    total_age = 0
    oldest_person = {"name": "", "age": 0}
    below_18_count = 0

    for row in reader:
        city = row["city"]
        age = int(row["age"])
        name = row["name"]

        city_count[city] = city_count.get(city, 0) + 1
        total_age += age

        if age > oldest_person["age"]:
            oldest_person = {"name": name, "age": age}

        if age < 18:
            below_18_count += 1

print("City count:")
for city, count in city_count.items():
    print(f"{city}: {count}")

average_age = total_age / sum(city_count.values())
print(f"Average age: {average_age:.2f}")

print(f"Oldest person: {oldest_person['name']} - {oldest_person['age']} years old")

print(f"Count of people below 18: {below_18_count}")

# 3. Create a program that reads a json file with the following structure:
# {
#     "employees": [
#         {"name": "Alice", "department": "HR", "salary": 50000},
#         {"name": "Bob", "department": "IT", "salary": 60000},
#         {"name": "Charlie", "department": "HR", "salary": 55000},
#         {"name": "David", "department": "IT", "salary": 65000},
#         {"name": "Eve", "department": "Finance", "salary": 70000}
#     ]
# }
# The program should:
#     - Calculate and print the average salary for each department.
#     - Find and print the name of the employee with the highest salary.

import json

with open("sample.json", "r") as file:
    data = json.load(file)

    department_salaries = {}
    highest_salary = {"name": "", "salary": 0}

    for employee in data["employees"]:
        department = employee["department"]
        salary = employee["salary"]
        name = employee["name"]

        if department not in department_salaries:
            department_salaries[department] = []
        department_salaries[department].append(salary)

        if salary > highest_salary["salary"]:
            highest_salary = {"name": name, "salary": salary}

    print("Average salary by department:")
    for department, salaries in department_salaries.items():
        average_salary = sum(salaries) / len(salaries)
        print(f"{department}: {average_salary:.2f}")

    print(f"Highest salary: {highest_salary['name']} - {highest_salary['salary']}")