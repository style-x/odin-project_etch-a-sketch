
let num;
let main = document.getElementById("main");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  num = document.getElementById("number").value;
  reset(num);
});

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function reset(num) {
  if (isNumber(num)) {
    if (num > 100) {
      main.innerHTML = "Diese Zahl ist zu groß!";  
    } else {
      main.innerHTML = "Hier wird ein DIV mit " + num + " Zeilen und Spalten erstellt.";
    }
  } else {
    main.innerHTML = "Du hast keine Zahl eingegeben.";
    console.log(num);
  };

};