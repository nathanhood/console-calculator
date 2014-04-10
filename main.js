var response = prompt('What equation do you want to run? or (q)uit');

while(response !== 'q') {
  if(response === 'add') {
    var firstNumber = prompt('Enter first number');
    firstNumber = parseInt(firstNumber);
    var secondNumber = prompt('Enter second number');
    secondNumber = parseInt(secondNumber);
    function add(x, y) {
      return x + y;
    }
    console.log('The sum is ' + add(firstNumber, secondNumber));
  } else if(response === 'subtract') {
    var firstNumber = prompt('Enter first number');
    firstNumber = parseInt(firstNumber);
    var secondNumber = prompt('Enter second number');
    secondNumber = parseInt(secondNumber);
    function subtract(x, y) {
      return x - y;
    }
    console.log('The difference is ' + subtract(firstNumber, secondNumber));
  } else if(response === 'multiply') {
      var firstNumber = prompt('Enter first number');
      firstNumber = parseInt(firstNumber);
      var secondNumber = prompt('Enter second number');
      secondNumber = parseInt(secondNumber);
      function multiply(x, y) {
        return x * y;
      }
      console.log('The multiplication is equal to ' + multiply(firstNumber, secondNumber));
  } else if(response === 'divide') {
      var firstNumber = prompt('Enter first number');
      firstNumber = parseInt(firstNumber);
      var secondNumber = prompt('Enter second number');
      secondNumber = parseInt(secondNumber);
      function divide(x, y) {
        return x / y;
      }
      console.log('The division is equal to ' + divide(firstNumber, secondNumber));
  } else if(response === 'exponent') {
    var firstNumber = prompt('Enter first number');
    firstNumber = parseInt(firstNumber);
    var secondNumber = prompt('Enter second number');
    secondNumber = parseInt(secondNumber);
    function exponent(x, y) {
      return Math.pow(x, y);
    }
    console.log('The exponent is equal to ' + exponent(firstNumber, secondNumber));
  } else if(response === 'root') {
    var firstNumber = prompt('Enter first number');
    firstNumber = parseInt(firstNumber);
    var secondNumber = prompt('Enter second number');
    secondNumber = parseInt(secondNumber);
    function root(x) {
      return Math.pow(x, .5);
    }
    console.log('The square root is equal to ' + root(firstNumber, secondNumber));
  } else {
    console.log('Not available. Options: add, subtract, divide, multiply, exponent, root, factorial');
  }
  var response = prompt('What equation do you want to run? or (q)uit');
}
