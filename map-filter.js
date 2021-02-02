const numbers = [2, 3, 4, 5, 6, 7, 8];
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// do it more elegant way with map
// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// })

// const result = numbers.map(function (element) {
//     return element * element;
// })

// const result = numbers.map(x => x*x);
// console.log(result);

// const result = numbers.filter(x => x > 5);
// console.log(result);

const result = numbers.find(x => x > 5); // returns only the first element
console.log(result);

