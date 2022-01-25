
let num;
let main = document.getElementById("main");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  num = document.getElementById("number").value;
  reset(num);
  //console.log(main.clientWidth)
});

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); };

function createGrid(num) {
  test = Number(num);
  console.log(test);
  main.style.gridTemplateColumns = "repeat(1fr, 1px)";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      main.appendChild(createDiv(main.clientWidth / num));
    }
  }
};

function createDiv(size) {
  let div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.classList.add('grid');
  return div;
}

function reset(num) {
  if (isNumber(num)) {
    if (num > 100) {
      main.innerHTML = "Diese Zahl ist zu groß!";  
    } else {
      createGrid(num);
    }
  } else {
    main.innerHTML = "Du hast keine Zahl eingegeben.";
  }
};
