// addTwoNumbers function
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

// convertHoursToMinutes function
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

// getGreeting function
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

// addAndMultiplyBy5 function
function addAndMultiplyBy5(num1, num2) {
  const add = addTwoNumbers(num1, num2);
  return add * 5;
}

var addAndMult5 = addAndMultiplyBy5(10, 5);
console.log('addAndMult5', addAndMult5);

// multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multAndDivide5 = multiplyAndDivideBy5(35, 10);
console.log('multAndDivide5', multAndDivide5);

// subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtract', subtract);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

// cube
function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cubed', cubed);
