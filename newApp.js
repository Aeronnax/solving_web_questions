// function getDivisibleNumbers(numbers, devisor) {
//   let divisebleNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % devisor === 0) {
//       divisebleNumbers.push(number[i]);
//     }
//   }
//   return divisebleNumbers;
// }
// console.log(getDivisibleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // Выводит: [2, 4, 6, 8, 10]

// В два раза старше
// Ваша функция принимает два аргумента:

// текущий возраст отца (лет)
// текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

// function yearFather(fatherAge, sonAge) {
//   let yearAgo = 0;
//   let isNegative = false;
//   if (fatherAge / 2 - sonAge < 0) {
//     isNegative = true;
//   }
//   while (fatherAge / 2 !== sonAge) {
//     if (isNegative) {
//       fatherAge--;
//       sonAge--;
//       yearAgo--;
//     } else {
//       fatherAge++;
//       sonAge++;
//       yearAgo++;
//     }
//   }
//   return yearAgo;
// }

// function calcAgeDiff(fatherAge, sonAge) {
//     if(sonAge > fatherAge) throw new Error('некорректные аргументы');
//     const diff = fatherAge - sonAge;
//     return diff - sonAge;
// }
// console.log(calcAgeDiff(50, 30));
// console.log(calcAgeDiff(30, 10));

// console.log(yearFather(40, 20));

// Считайте нечетные числа ниже n
// Если задано число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!

// function getOdd(num1) {
//   if (num1 % 2 !== 0) {
//     return (num1 - 1) / 2;
//   }
//   return num1 / 2;
// }
// console.log(getOdd(5));

// function stringToNumbers(str) {
//   return +str;
// }

// console.log(stringToNumbers("-21231321"));

// напиши цикл, который выводил числа от 1 до 30 ЧЕРЕЗ 5 чисел
// т.е. 1, 6, 12 и т.д.

// for (let i = 0; i < 30; i++){}
