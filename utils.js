// First Function: no return, just accepting a text as an input with any number of parameter and print it by 
// concatenating it with labels/other text.
function welcome(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
  }
  
  // Second Function: return a double value for converting a measurement unit to another one, it can accept a 
  // double single value as parameter for the initial measurement unit.
  function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  
  // Third Function: to do any math operation against a numeric value(s), it can accept one, or more than one 
  // value (argument) and then return the result of applying a math formula 
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Fourth Function: any advanced function of your choice
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  // Export the functions
  module.exports = {
    welcome,
    convertCelsiusToFahrenheit,
    factorial,
    sum
  };