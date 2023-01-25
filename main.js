let countEl = document.getElementById("count-el");
let count = 0;
let = saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  // variable that contain both count and dash separator
  let countStr = count + " - ";
  //render the value in the saveEl using innerText
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;
}
