var operation = prompt("What operation will you like to perform: +, -, *, / ?");
var number1 = parseFloat(prompt("Input first number: "));
var number2 = parseFloat(prompt("Input second number: "));

if (operation == "+") {
  console.log(number1 + number2);
} else if (operation == "-") {
  console.log(number1 - number2);
} else if (operation == "*") {
  console.log(number1 * number2);
} else if (operation == "/") {
  console.log(number1 / number2);
}
