// What is Map


// // Example-1
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);
// console.log(newArr);

// // Example-2
// const numbers = [1,2,3,4];
// const newArr = numbers.map(double);
// function double(num){
//     return num*2;
// }
// console.log(newArr);

// // example - 3 (function inside map)
// const numbers = [1,2,3,4];
// const newArr = numbers.map(function double(num){
//     return num*2;
// });

// console.log(newArr);

// // Example - 4 (Arrow function)
// const numbers = [1,2,3,4];
// const newArr = numbers.map((num) => num*2)
// console.log(newArr);

/*---------------------------------------*/

// // Example - 5 (Implementation of map using array)
// const radius = [2, 3, 4, 5];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// console.log(radius.map(area));

// Implementation of map using array
// const calculate = function (arr, logic) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//       output.push(logic(arr[i]));
//   }
//   return output;
// };
// console.log(calculate(radius,area));

/*---------------------------------------*/

// What is Filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
// const arr = [11, 4, 8, 16, 13, 6];

// // Example - 1 (Filter odd values)

// function isOdd(x){
//     return x%2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// Example - 2 (Values greate than 10)

// function greaterThan10(x){
//     return x>10;
// }
// const output = arr.filter((x) => x > 10);
// console.log(output);

/*------------------------------------------------------------------*/
// What is reduce
const arr = [1,3,2,5,6,9];

// Example -1 (Find sum using array and filter)
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// Example - 2 (Find max)
// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max,curr){
//     if(curr>max)max=curr;
//     return max;
// },0);
// console.log(output);

/*-------------------------------------------------------------------------*/
// End Examples

// Example -1 Find firstname+lastname
const users = [
  { firstName: "Kishan", lastName: "Prajapati", age: 21 },
  { firstName: "Sahil", lastName: "Patel", age: 28 },
  { firstName: "Virat", lastName: "Kohli", age: 34 },
  { firstName: "Rohit", lastName: "Sharma", age: 34 },
];

// const output = users.map((x) => x.firstName + " "+ x.lastName);
// console.log(output);

// Example -2 output: {21:1, 34:2, 28:1}

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=acc[curr.age]+1;
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log(output);

// Example -3 First Name of students whose age is greater than 30

const output = users.filter((x) => x.age > 30).map((x) => x.firstName);
console.log(output);


