let screen = document.getElementById("screen");
const buttons = document.querySelectorAll("#buttons a");

const addToDisplay = (value) => (screen.textContent += value);
const clearDisplay = () => (screen.textContent = "");
const calculate = () => (screen.textContent = eval(screen.textContent));

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.dataset.key == "clear") {
        clearDisplay();
      } else if (e.target.dataset.key == "equal") {
        calculate();
      } else {
        addToDisplay(e.target.dataset.key);
      }
    } catch (error) {
      alert(error);
    }
  });
}
