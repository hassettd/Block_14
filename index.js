// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
    return numbers.length
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(number) {
  let sum = 0
  for (let i = 0; i < number.length; i++) {
      const num = number[i];
        console.log(num);
        sum += num  
    }
  return sum
  }
//ToDo

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(number) {
  let sum = 0
  for (let i = 0; i < number.length; i++) {
      const num = number[i];
        console.log(num);
        sum += num  
    }
  return sum / number.length
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(number) {
  let min = 0
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
        console.log(num);
        min = number[i];
  return min;
  
}
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(number) {
  let max = 0
  for (let i = 1; i < number.length; i++) {
      const num = number[i];
        console.log(num);
        max = number[i];
    }
  return max;
  console.log(minimumValue);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 /** */
function getRange(i) {
  let maximumValue = 5
  let minimumValue = 1
return (maximumValue - minimumValue);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(number) {
  let evens = []
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
  if(num % 2 === 0){
    evens.push(num)
  }
  


  
}
return evens;
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */

function getOdds(number) {
  let odds = []
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
  if(num % 2 !== 0){
    odds.push(num)
  }
  


  
}
return odds;
}