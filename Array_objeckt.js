//#region Задание 1

// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:
// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”
// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

// const obj = {
//   a: 1,
//   b: "2",
//   c: true,
// };

// for (const key in obj) {
//   console.log(obj[key]);
// }

// const john = {
//   name: "john",
//   age: 24,
//   pet: "stella",
// };
// const ann = {
//   name: "ann",
//   age: 22,
//   pet: "hamster",
// };

// function getInfo(people) {
//   console.log(
//     `Меня зовут ${people.name}, мне ${people.age}, у меня есть ${people.pet}`
//   );
// }

// function incrementAge(people) {
//   people.age = people.age + 1;
// }
// getInfo(john);
// incrementAge(john);
// getInfo(john);
// for (const key in john) {
//   console.log(`${key}: ${john[key]}`);
// }
//#endregion
//#region Задание 2
//
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

// function sum(array) {
//   let result = 0;
//   for (let i = 0; i <= array.length - 1; i++) {
//     result = result + array[i];
//   }
//   return result;
// }

/**
 *
 * @param {number[]} array
 */

//#endregion
//#region Задание 3
// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.
// const arr1 = [];
// arr1.push("Dima", "Ilya", "Kirill", "Kira", "Erbol");
// console.log(arr1);
// arr1.shift();
// arr1.pop();
// console.log(arr1);
//#endregion
//#region Задание 4
// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML.
// Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.
// <ul><li>Вася</li><li>Вася</li></ul>
// <li>Вася</li>

// const getLi = (name) => {
//   return `<li>${name}</li>`;
// };

// const getElementsList = (names) => {
//   let result = names.reduce((accum, item) => {
//     return accum + getLi(item);
//   }, "");
//   result = `<ul>` + result + `</ul>`;
//   return result;
// };

// const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

// console.log(getElementsList(names));
//#endregion
//#region Задание 5
// Задание #5
// Дан объект:
// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };
// Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.
// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// const { age, favColor, height, money, pet } = obj;

// console.log("age :>> ", age);
// console.log("favColor :>> ", favColor);
// console.log("height :>> ", height);
// console.log("money :>> ", money);
// console.log("pet :>> ", pet);
//#endregion
//#region Задание 6

// Даны объекты:
// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };
// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450
// };
// const obj2 = {/* ... */};
// console.log(obj2);
// /**
//  * {
//  *	age: 23,
//  *	favColor: 'blue',
//  *	height: 188,
//  *	pet: 'dog',
//  *	money: 11450
//  * }
//  */

// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.

// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// const updateObj = {
//   age: 23,
//   favColor: "blue",
//   money: 11450,
// };

// const obj2 = {...obj, ...updateObj};

// console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */

//#endregion
