// a. Swap the values of variables A and B
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`);

// b. Find the missing numbers from 1 to 100
const numbers = [
  1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

const allNumbers = Array.from(Array(100).keys()).map((x) => x + 1);

const missingNumbers = allNumbers.filter(function (x) {
  return numbers.indexOf(x) === -1;
});
console.log(missingNumbers);