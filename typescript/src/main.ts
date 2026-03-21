const title = document.getElementById("main-title") as HTMLHeadingElement;
const changeTitleBtn = document.getElementById(
  "change-title-btn",
) as HTMLButtonElement;

changeTitleBtn.addEventListener("click", () => {
  title.textContent = "Title Changed!";
  title.style.color = "blue";
  title.style.transition = "color 0.5s ease";
});

const userInput = document.getElementById("user-input") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const listContainer = document.getElementById(
  "list-container",
) as HTMLUListElement;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (userInput.value.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = userInput.value;

    newItem.onclick = () => {
      newItem.remove();
    };

    listContainer.appendChild(newItem);
    userInput.value = "";
  }
});
