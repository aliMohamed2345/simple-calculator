const result = document.querySelector(".calc-container form input");
const numbers = document.querySelectorAll(".buttons .digits button");
const ops = document.querySelectorAll(".buttons .operations button");
let entries = [];
function GetTheResult(arr) {
  let total = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "+":
        total += parseInt(arr[i + 1]);
        console.log(arr[i + 1]);
        break;
      case "*":
        total *= parseInt(arr[i + 1]);
        break;
      case "-":
        total -= parseInt(arr[i + 1]);
        break;
      case "/":
        total /= parseInt(arr[i + 1]);
        break;
      case "%":
        total %= parseInt(arr[i + 1]);
        break;
    }
  }
  result.value = total;
  entries = [];
  return total;
}
function ChooseOperation(operation) {
  switch (operation.innerHTML) {
    case "+":
      entries.push(result.value);
      entries.push("+");
      result.value = ``;
      break;
    case "-":
      entries.push(result.value);
      entries.push("-");
      result.value = ``;
      break;
    case "x":
      entries.push(result.value);
      entries.push("*");
      result.value = ``;
      break;
    case "/":
      entries.push(result.value);
      entries.push("/");
      result.value = ``;
      break;
    case "%":
      entries.push(result.value);
      entries.push("%");
      result.value = ``;
      break;
    case "DEL":
      result.value = result.value.slice(0, -1);
      break;
    case "AC":
      result.value = ``;
      entries = [];
      break;
    case "=":
      entries.push(result.value);
      result.value = ``;
      GetTheResult(entries);
      break;
  }
}
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    result.value += e.target.innerHTML;
  });
});
ops.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (result.value) {
      ChooseOperation(e.target);
    }
  });
});
