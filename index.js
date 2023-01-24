const inputfield = document.getElementById("input-field");
const plusMinus = document.getElementById("plus-minus");
const coma = document.getElementById("coma");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const equal = document.getElementById("equal");
const procent = document.getElementById("procent");
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");

window.onload = function () {
  document.getElementById("clear").click();
};

clear.addEventListener("click", function () {
  inputfield.textContent = "0";
});

plusMinus.addEventListener("click", function () {
  let inputValue = inputfield.textContent;
  if (inputValue.charAt(0) === "-") {
    inputfield.textContent = inputValue.substring(1);
  } else if (inputfield.textContent == "0") {
    inputfield.textContent = "-";
  } else {
    inputfield.textContent = "-" + inputfield.textContent;
  }
});
coma.addEventListener("click", function () {
  inputfield.textContent == 0
    ? (inputfield.textContent = 0 + ".")
    : (inputfield.textContent += ".");
});
one.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 1;
      break;
    case "0.":
      inputfield.textContent += 1;
      break;
    default:
      inputfield.textContent += 1;
      break;
  }
});
two.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 2;
      break;
    case "0.":
      inputfield.textContent += 2;
      break;
    default:
      inputfield.textContent += 2;
      break;
  }
});
three.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 3;
      break;
    case "0.":
      inputfield.textContent += 3;
      break;
    default:
      inputfield.textContent += 3;
      break;
  }
});
four.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 4;
      break;
    case "0.":
      inputfield.textContent += 4;
      break;
    default:
      inputfield.textContent += 4;
      break;
  }
});
five.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 5;
      break;
    case "0.":
      inputfield.textContent += 5;
      break;
    default:
      inputfield.textContent += 5;
      break;
  }
});
six.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 6;
      break;
    case "0.":
      inputfield.textContent += 6;
      break;
    default:
      inputfield.textContent += 6;
      break;
  }
});
seven.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 7;
      break;
    case "0.":
      inputfield.textContent += 7;
      break;
    default:
      inputfield.textContent += 7;
      break;
  }
});
eight.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 8;
      break;
    case "0.":
      inputfield.textContent += 8;
      break;
    default:
      inputfield.textContent += 8;
      break;
  }
});
nine.addEventListener("click", function () {
  switch (inputfield.textContent) {
    case "0":
      inputfield.textContent = null + 9;
      break;
    case "0.":
      inputfield.textContent += 9;
      break;
    default:
      inputfield.textContent += 9;
      break;
  }
});
zero.addEventListener("click", function () {
  inputfield.textContent == 0
    ? (inputfield.textContent = null + 0)
    : (inputfield.textContent += 0);
});

let inputNumber1;
let inputNumber2;
let inputResult;
let operation;

plus.addEventListener("click", function () {
  inputNumber1 = parseFloat(inputfield.textContent);
  operation = (a, b) => a + b;
  inputfield.textContent = null;
});

procent.addEventListener("click", function () {
  inputNumber1 = parseFloat(inputfield.textContent);
  operation = (a, b) => (a / 100) * b;
  inputfield.textContent = null;
});

minus.addEventListener("click", function () {
  inputNumber1 = parseFloat(inputfield.textContent);
  operation = (a, b) => a - b;
  inputfield.textContent = null;
});

division.addEventListener("click", function () {
  inputNumber1 = parseFloat(inputfield.textContent);
  operation = (a, b) => a / b;
  inputfield.textContent = null;
});

multiply.addEventListener("click", function () {
  inputNumber1 = parseFloat(inputfield.textContent);
  operation = (a, b) => a * b;
  inputfield.textContent = null;
});

equal.addEventListener("click", function () {
  inputNumber2 = parseFloat(inputfield.textContent);
  inputResult = operation(inputNumber1, inputNumber2);
  inputfield.textContent = inputResult;
});
