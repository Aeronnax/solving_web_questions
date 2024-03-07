//#region Задание #1
//Определите порядок вывода в следующем фрагменте кода без его запуска.
// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

// const request = new Promise((resolve, reject) => {
//   try {
//     const responce = "123";
//     setTimeout(() => {
//       throw "error";
//       resolve(responce);
//     }, 1000);
//     // throw "error";
//     // resolve(responce);
//   } catch (e) {
//     reject(e);
//   }
// });

// request
//   .then((responce) => {
//     console.log(responce);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//#endregion
//#region Задание #2
// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу.
// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API.
// const idList = document.getElementById("list");

// /**
//  *
//  * @param {string} ulText
//  */
// const addElementInDocument = (ulText) => {
//   const li = document.createElement("li");

//   const textContent = document.createTextNode(ulText);
//   li.appendChild(textContent);

//   idList.append(li);
// };

// /**
//  * @returns {Promise<{userId: nunber; id: number; title: string; completed: boolean}[]>}
//  */
// const getTasks = async () => {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await resp.json();

//     return data;
//   } catch (err) {}
// };
// const fillTodos = async () => {
//   const data = await getTasks();
//   data.forEach((item) => {
//     addElementInDocument(item.title);
//   });
// };
// fillTodos();

//#endregion
//#region Задание #3
//Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API.

// function sumWithDelay(delay, a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, delay);
//   });
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();
//#endregion
//#region Задание #4
//Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с
//задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

// const USERS = [
//   { id: "001", name: "Алексей", age: 25 },
//   { id: "002", name: "Иван", age: 28 },
//   { id: "003", name: "Егор", age: 30 },
// ];

// /**
//  * @param {any[]} array
//  * @param {(item: any, index: number, array: any[]) => boolean} callbackFn
//  * @returns {any | undefined}
//  */
// const find = (array, callbackFn) => {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (callbackFn(element, index, array)) {
//       return element;
//     }
//   }
//   return;
// };

// console.log(find(USERS, (item) => item.id == 2));

// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = USERS.find((user) => {
//         return user.id == id;
//       });
//       if (user !== undefined) {
//         resolve(user);
//       } else {
//         reject(new Error("Пользователь не найден"));
//       }
//     }, 2500);
//   });
// }

// async function start() {
//   try {
//     const result = await fetchUser("001");
//     console.log(result); // { id: '001', name: "Алексей", age: 25 }
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log(err.message);
//     }
//   }
// }

// start();
//#endregion
