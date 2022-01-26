
let num;
let main = document.getElementById("main");
let button = document.getElementById("button");
let grid = document.getElementsByClassName("grid");
let cw = main.clientWidth;

button.addEventListener("click", () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  num = document.getElementById("number").value;
  createGrid(num);
  //console.log(cw);
});

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); };

function createGrid(num) {
  test = Number(num);
  //console.log(test);
  main.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  main.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      main.appendChild(createDiv(cw / num));
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

function paintGrid(el) {
  if(el.target.classList == 'grid'){
    let square = el.target;    
    square.style.backgroundColor = "black";
  }  
};

main.addEventListener("mousedown", event => {
  event.preventDefault();
  paintGrid(event);
});