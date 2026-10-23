// Найти минимальное и максимальное значения из 
// чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

let numbers = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log('Минимальное:', min);
console.log('Максимальное:', max);
