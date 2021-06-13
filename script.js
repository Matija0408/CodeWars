let grades = [1, 2, 3, 4, 5];
let grades3 = [4, 4, 4, 3, 3, 5, 5, 5];
let grades2 = [2, 4, 1, 5, 2, 3, 1];

function reverseArray(prop) {
  return prop.reverse();
}
console.log(grades);
console.log(reverseArray(grades));

let word = "This is a sentence";

function reverseString(prop) {
  return prop.split(" ").reverse().join(" ");
}

console.log(reverseString(word));

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
// function getAverage(array) {
//   return Math.floor(
//     array.reduce(function (sum, x) {
//       return sum + x;
//     })
//   );
// }

// function getAverage2(array) {
//   return Math.floor(
//     array.reduce(function (sum, x) {
//       return sum + x;
//     }) / array.length
//   );
// }

// function calcAverage(prop) {
//   return Math.floor(prop.reduce((sum, x) => sum + x) / prop.length);
// }
// console.log(calcAverage(grades3));
// // function getAverage(marks) {
// //   return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// // }

// function calcAverage(array) {
//   return Math.floor(
//     array.reduce(function (sum, x) {
//       return sum + x;
//     }) / array.length
//   );
// }

// let a = 3;
// let b = 4;

// let sum = (a, b) => a + b;
// console.log(sum(a, b));
// console.log(sum);

// function average(prop) {
//   return Math.floor(prop.reduce((sum, x) => sum + x) / prop.length);
// }

// console.log(average(grades2));
