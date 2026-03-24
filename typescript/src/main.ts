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

const counterDisplay = document.getElementById("counter") as HTMLSpanElement;

const incrementBtn = document.getElementById(
  "increment-btn",
) as HTMLButtonElement;
const decrementBtn = document.getElementById(
  "decrement-btn",
) as HTMLButtonElement;

let counter: number = 0;

incrementBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = String(counter);
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = String(counter);
});
