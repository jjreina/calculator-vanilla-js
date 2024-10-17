const mockData = [
  { textContent: "C", "data-key": "clear" },
  { textContent: "-", "data-key": "-" },
  { textContent: "/", "data-key": "/" },
  { textContent: "x", "data-key": "*" },
  { textContent: "7", "data-key": "7" },
  { textContent: "8", "data-key": "8" },
  { textContent: "9", "data-key": "9" },
  { textContent: "-", "data-key": "-" },
  { textContent: "4", "data-key": "4" },
  { textContent: "5", "data-key": "5" },
  { textContent: "6", "data-key": "6" },
  { textContent: "+", "data-key": "+" },
  { textContent: "1", "data-key": "1" },
  { textContent: "2", "data-key": "2" },
  { textContent: "3", "data-key": "3" },
  { textContent: "=", "data-key": "equal", class: "equal tall" },
  { textContent: "0", "data-key": "0", class: "wide shift" },
  { textContent: ".", "data-key": ".", class: "shift" },
];

/********* Design *********************/

const createLiElemtents = (mockData) => {
  let liElements = mockData.map((object) => {
    let anchor = document.createElement("a");
    anchor.textContent = object.textContent;
    anchor.setAttribute("data-key", object["data-key"]);
    anchor.href = "#";
    anchor.className = object.class;
    let li = document.createElement("li");
    li.appendChild(anchor);
    return li;
  });
  return liElements;
};

const cleateUlElement = (liElements) => {
  let ul = document.createElement("ul");
  liElements.forEach((li) => {
    ul.appendChild(li);
  });
  ul.id = "buttons";
  ul.className = "buttons";
  return ul;
};

let liKeys = [];
let divScreen = null;
const createCalculatorComponent = () => {
  let divCalculator = document.createElement("div");
  divCalculator.className = "calculator";
  divScreen = document.createElement("div");
  divScreen.id = "screen";
  divScreen.className = "screen";
  divCalculator.appendChild(divScreen);
  liKeys = createLiElemtents(mockData);
  divCalculator.appendChild(cleateUlElement(liKeys));
  return divCalculator;
};

document.body.appendChild(createCalculatorComponent());

/********* Funcionality ***************/
const addToDisplay = (value) => (divScreen.textContent += value);
const clearDisplay = () => (divScreen.textContent = "");
const calculate = () => (divScreen.textContent = eval(divScreen.textContent));

liKeys.forEach((li) => {
  li.firstElementChild.addEventListener("click", (e) => {
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
});
