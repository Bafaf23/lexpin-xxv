def add_user(username: str, email: str) -> None:
    with open("users.txt", "a") as file:
        file.write(f"{username},{email}\n")


def delete_user(username: str) -> None:
    with open("users.txt", "r") as file:
        lines = file.readlines()

    with open("users.txt", "w") as file:
        for line in lines:
            if line.split(",")[0] != username:
                file.write(line)


def update_user(username: str, new_email: str) -> None:
    with open("users.txt", "r") as file:
        lines = file.readlines()

    with open("users.txt", "w") as file:
        for line in lines:
            user, email = line.strip().split(",")
            if user == username:
                file.write(f"{username},{new_email}\n")
            else:
                file.write(line)


def get_user(username: str) -> str:
    with open("users.txt", "r") as file:
        for line in file:
            user, email = line.strip().split(",")
            if user == username:
                return f"Username: {user}, Email: {email}"
    
    return "User not found"


# add_user("santiaguito", "santiaguito@email.com")
# add_user("el_bryant", "el_bryant@email.com")

# delete_user("santiaguito")
# update_user("el_bryant", "el_bryant_new@email.com")

print(get_user("el_bryant"))
print(get_user("jonh_doe"))
