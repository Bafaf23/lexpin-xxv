import json


def get_score(user_id: int) -> int:
    with open("response.json", "r") as file:
        data = json.load(file)

    for user in data["score_data"]:
        if user["user_id"] == user_id:
            return user["score"]

    return -1


def update_score(user_id: int, new_score: int) -> None:
    with open("response.json", "r") as file:
        data = json.load(file)

    for user in data["score_data"]:
        if user["user_id"] == user_id:
            user["score"] = new_score
            break

    with open("response.json", "w") as file:
        json.dump(data, file, indent=2)


print(get_score(1))
print(get_score(3))
print(get_score(9))

update_score(2, 49)
