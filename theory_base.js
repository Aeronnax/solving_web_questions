//#region Задание 1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.
// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.
// const isPrimeNumber = (num) => {

// };

// function isPrimeNumber(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
//#endregion

//#region  Задание 2
// Напишите функцию func(), которая принимает num, min, max:
// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.

// function func(num, min, max) {
//   if (num < min) {
//     return min ** 2;
//   }
//   if (num > max) {
//     return max ** 2;
//   }
//   if (num < max - (max - min) / 2) {
//     return num ** 2;
//   }
//   return Math.floor(num);
// }

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

//#endregion

//#region  Задание 3
// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.
// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа).
//  Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
// function isPerfectNumber(number) {
//   if (number <= 1) {
//     return false;
//   }

//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === number;
// }
// console.log(isPerfectNumber(4));
//#endregion
//#region
// Задание #4
// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition.
// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.
// Примечание. Нельзя использовать приведение числа к строке.

// function getLastNumber(num) {
//   return num % 10;
// }

// function getNumberLength(num) {
//   return Math.ceil(Math.log10(num + 1));
// }

// function splitNumberToPosition(num, positionLeftToRight) {
//   const numLength = getNumberLength(num);

//   const positionRightToLeft = Math.abs(numLength - positionLeftToRight) - 1;

//   return Math.floor(num / 10 ** positionRightToLeft); // 456 / 10^1 = 45.6
// }

// function getNumberDigit(number, digitPosition) {
//   const numLength = getNumberLength(number);

//   if (digitPosition < 0) return;
//   if (digitPosition + 1 > numLength) return;

//   const splitedNumber = splitNumberToPosition(number, digitPosition);

//   return getLastNumber(splitedNumber);
// }

// console.log(getNumberDigit(123, 0)); // 1
// console.log(getNumberDigit(123, 1)); // 2
// console.log(getNumberDigit(123, 2)); // 3
// console.log(getNumberDigit(1, 2)); // undefined

// console.log(`${num}`.length); // 6

// function getNumberDigit(number, digitPosition) {
//   let count = 0;
//   let num = number;

//   while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
//   }

//   if (digitPosition > count) {
//     return undefined;
//   }

//   let position = count - digitPosition + 1;
//   let digit = 0;

//   while (position > 0) {
//     digit = number % 10;
//     number = Math.floor(number / 10);
//     position--;
//   }

//   return digit;
// }
// console.log(getNumberDigit(456, 1));
//#endregion
