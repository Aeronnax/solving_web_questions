//#region Задание #1

// Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

// const sumNumbers = (...num1) => {
//   return num1.reduce((sum, num) => sum + num, 0);
// };

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

//#endregion
//#region Задание #2
//Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. Если массив пустой, то возвращается значение undefined.

// /**
//  *
//  * @param {number[]} arrayNum
//  */
// const findMaxValue = (arrayNum) => {
//   if (arrayNum.length === 0) {
//     return;
//   }

//   return Math.max(...arrayNum);
// };

// // сложить a, b, c если каждое из этих чисел больше 0
// // в остальных случаях возвращать undefined

// function calc(a, b, c) {
//   if (a > 0) {
//     if (b > 0) {
//       if (c > 0) {
//         return a + b + c;
//       }
//     }
//   }
//   return;
// }
// function calc(a, b, c) {
//   if (a <= 0) {
//     return;
//   }
//   if (b <= 0) {
//     return;
//   }
//   if (c <= 0) {
//     return;
//   }

//   return a + b + c;
// }

// console.log(findMaxValue([1, 2, 3]));

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

//#endregion
//#region Задание #3
//Напишите функцию calculateAverage(), которая принимает массив чисел и вычисляет их среднее арифметическое. Если массив пустой, то возвращается 0.
// /**
//  *
//  * @param {number[]} arrNumbers
//  * @returns {number}
//  */
// const calculateAverage = (arrNumbers) => {
//   if (arrNumbers.length === 0) {
//     return 0;
//   }
//   return arrNumbers.reduce((sum, num1) => sum + num1, 0) / arrNumbers.length;
// };

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0
//#endregion
//#region Задание #4
// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false.
// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево.

// /**
//  *
//  * @param {string} polindromStr
//  */
// const isPalindrome = (polindromStr) => {
//   for (let i = 0; i < polindromStr.length / 2; i++) {
//     const reversI = polindromStr.length - 1 - i;

//     if (polindromStr[reversI] !== polindromStr[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const isPalindrome = (string) => {
//   const loverString = string.toLowerCase();
//   return loverString === loverString.split("").reverse().join("");
// };
// console.log(isPalindrome("Level"));

//#region Задание #5

//Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов.
// /**
//  *
//  * @param {number[]} arr
//  */
// const removeDuplicates = (arr) => {
//   const voidArr = [];
//   arr.forEach((item) => {
//     if (voidArr.includes(item)) {
//       return;
//     }
//     voidArr.push(item);
//   });

//   return voidArr;
// };

// const removeDuplicatesSet = (arr) => {
//   return Array.from(new Set(arr));
// };

// const obj = {
//   a: 1,
//   b: 2,
//   ["str"]: 1,
//   a: 123,
//   [1]: 1,
//   [{ as: 12 }]: "dasdsa",
//   [{ b: 123 }]: "123",
// };

// const obj2 = {
//   ["a"]: undefined,
//   [1]: undefined,
// };

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray)); // []
//#endregion

//#region Задание #6
// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:
// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:
/**
 *
 * @param {number} value
 */
// function createCounter(value) {
//   let currentValue = value;
//   return {
//     inc: () => {
//       currentValue = currentValue + 1;
//     },
//     dec: () => {
//       currentValue = currentValue - 1;
//     },
//     get: () => {
//       return currentValue;
//     },
//   };
// }

// function Counter(value) {
//   if (typeof value !== "number") {
//     throw new Error("РАЗУЙ ГЛАЗА УЕБОК");
//   }
//   this.currentValue = value;

//   this.inc = function () {
//     this.currentValue = this.currentValue + 1;
//   };
//   this.dec = function () {
//     this.currentValue = this.currentValue - 1;
//   };
//   this.get = function () {
//     return this.currentValue;
//   };
//   this.fucking = function () {
//     return "fuck this all";
//   };
// }

// class Counter {
//   currentValue;
//   constructor(value) {
//     if (typeof value !== "number") {
//       throw new Error("РАЗУЙ ГЛАЗА УЕБОК");
//     }
//     this.currentValue = value;
//   }
//   inc() {
//     this.currentValue = this.currentValue + 1;
//   }
//   dec() {
//     this.currentValue = this.currentValue - 1;
//   }
//   get() {
//     return this.currentValue;
//   }
//   fucking() {
//     return "fuck this all";
//   }
// }

// const counter = new Counter(5);
// console.log(counter.get());
// counter.inc();
// counter.inc();
// counter.inc();
// counter.dec();
// console.log(counter.get());

// console.log(counter.fucking());

// Вывести индекс массива с середины  через цикл for

// function getIndex(index) {
//   for (i = 0; i < index.length / 2; i++) {
//     console.log("=========", i);
//   }
// }
// let arrI = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log(getIndex(arrI));
//#endregion

// Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите
// произведение элементов этого массива.
