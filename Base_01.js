// Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], удовлетворяющие одному из условий:
// Число нечетное
// Число кратно 12
//2
// function numChec(num1) {
//   if (num1 % 2 !== 0) {
//     return true;
//   }
//   return false;
// }

// function multiplicity2(num1) {
//   if (num1 % 12 === 0) {
//     // ===(num1 % 12, 0): boolean
//     return true;
//   }
//   return false;
// }
// function getNumbers() {
//     for (let a = 0; a < 1000; a++) {
//       if (numChec(a) || multiplicity2(a)) {
//         console.log(a);
//       }
//     }
//   }
//   getNumbers();

//Число нечетное
// || = ИЛИ
// true || true = true
// true|| false = true
// false || true = true
// false || false = false

// false && (false && (true && (false && false))) => ||(false, ||(false, ))

// && = И
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// const array = [1, 10, 15, -100, -23, 19, 15032];
// const array2 = array.map(function (num) {
//   return num * 1.25;
// });
// console.log(array2);
// console.log(array);
// 3
// Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
// Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
// Выведите оба массива в консоль.

// const array = [1, 10, 15, -100, -23, 19, 15032];
// const array2 = array.map(function (num) {
//   return num * 1.25;
//});
// console.log(array2);
// console.log(array);

// const arr = [1, 10, 15, -100, -23, 19, 15032];
// const newArr = [];

// for(const i of arr) {
// 	newArr.push(i * 1.25);
// }

// console.log(arr);
// console.log(newArr);
// let iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value);
// }
// // 10
// // 20
// // 30
// let iterable = [10, 20, 30];

/**
 * @param {number[]} arr
 */
// function getElements(arr) {
//   for (let index = 0; index <= arr.length - 1; index++) {
//     const value = arr[index]; arr[0]
//     console.log(value);
//   }
// }

// getElements(iterable);

// const obj = {
//   a: 1,
//   b: "2",
//   c: true,
// };
// const obj2 = {
//   ["1"]: 1,
//   ["b"]: "2",
//   ["c"]: true,
// };
// for (const key in obj) {
//   console.log(obj[key]);
// }
//4
// Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".
// Если функция была вызвана без указания name, то выведите строку "Hello, someone!".
// Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.
//   if (5  !== 0) {
//     return true;
// //   }
// function sayHello(name) {
//   if (name === undefined) {
//     return "Hello, someone!";
//   }
//   return "Hello, " + name + "!";
// }
// console.log(sayHello("zAL"));
// const hello = (name) => {
//   if (name) {
//     // if (Boolean(name)) {
//     return "Hello, " + name + "!"; // "Hello, " + String(1) + "!" // Number("2") // Boolean(1) // Boolean("2")
//   }
//   return "Hello, someone!";
// };

// console.log(hello(0));
// console.log(hello(" "));

// function test() {
//   return 123;
// }

// function sayHello(name = "someone") {
//   console.log(`Hello, ${name}!`); // "Hello, " + name + "!"
// }
// sayHello();

// const sayHello = (name = "someone") => {
//   console.log(`Hello, ${name}!`);
// };

// Boolean(1) // Boolean("2")
// console.log(1, Boolean(1));
// console.log(2, Boolean(2));
// console.log('"2"', Boolean("2"));
// console.log(0, Boolean(0));
// console.log('"0"', Boolean("0"));
// console.log('""', Boolean(""));
// console.log('" "', Boolean(" "));
// console.log(undefined, Boolean(undefined));

// const a = 5;

// console.log(a > 0 ? "положительное" : "отрицательное"); // ?(a > 0,'положительное','отрицательное')

// const check = () => {
//   if (a > 0) {
//     return "положительное";
//   } else {
//     return "отрицательно";
//   }
// };
// console.log(check());

// a + b; // +(a, b)

//5
// Напишите функцию calc(), которая принимает в параметры a и b, а также operation.
// В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.
// function calc(a, b, operation) {
//   if (operation === "+") {
//     return a + b;
//   }
//   if (operation === "-") {
//     return a - b;
//   }
//   if (operation === "/") {
//     return a / b;
//   }
//   if (operation === "*") {
//     return a * b;
//   }
// }
// console.log(calc(1, 2, "+"));

// function calc2(a, b, operation) {
//   switch (operation) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "/":
//       return a / b;
//     case "*":
//       return a * b;
//     default:
//       return;
//   }
// }
// function calc3(a, b, operation) {
//   let result;
//   const arr = [];
//   switch (operation) {
//     case "+":
//       result = a + b;
//       arr.push("+");
//     case "-":
//       result = a - b;
//       arr.push("-");
//     case "/":
//       result = a / b;
//       arr.push("/");
//     case "*":
//       result = a * b;
//       arr.push("*");
//   }

//   console.log(arr);
//   return result;
// }
// console.log(calc3(2, 5, "-"));

// function calc4(a, b, operation) {
//   let result;
//   switch (operation) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "/":
//       result = a / b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//   }

//   return result;
// }
// console.log(calc4(2, 5, "-"));

// Создайте переменную age, присвоив ей числовое значение.
// Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
// "Взрослый" — если age больше или равно 18
// "Детский" — если age меньше 18
// Выведите переменные в консоль.

// function getTicketCategory(age) {
//   return age >= 18 ? "Взрослый" : "Детский";
// }
// console.log(getTicketCategory(18));

// const getTicketCategory2 = (age) => (age >= 18 ? "Взрослый" : "Детский");
// console.log(getTicketCategory2(18));
// let a = 2;
// let b = 24;
// let f = 22;
// let c = Math.random(a, b, f);
// console.log(c);
