let currColor = "black";
function createDivs(val) {
  if (val < 1 || val > 100) return;
  const numDivs = val * val;
  let arrDivs = [];
  const c = document.querySelector("div");
  const divwh = 700 / val;
  console.log(divwh);
  for (let i = 0; i < numDivs; i++) {
    arrDivs[i] = document.createElement("div");
    arrDivs[i].setAttribute("class", "div");
    arrDivs[i].addEventListener("mouseover", changeColour);
    c.appendChild(arrDivs[i]);
  }
}

function getInput(e) {
  const allDivs = document.querySelectorAll(".div");
  allDivs.forEach((element) => {
    element.remove();
  });
  const temp = document.getElementById("grid");
  let val = document.getElementById("numOf").value;
  temp.style.gridTemplateRows = `repeat(${val}, 1fr)`;
  temp.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
  createDivs(val);
}

function changeColour(e) {
  e.target.style.backgroundColor = currColor;
}

function updateColor(col) {
  const allBtn = document.querySelectorAll(".btn");
  allBtn.forEach((element) => {
    element.classList.remove("selected");
  });
  document.getElementById(col).classList.add("selected");
  currColor = col;
}

function reset() {
  console.log("d");
  const all = document.querySelectorAll(".div");
  all.forEach((element) => {
    element.style.backgroundColor = "white";
  });
}
