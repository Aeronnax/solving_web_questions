//#region  Задание #1
// Дан объект машины.
// const car = {
//   name: 'Hendai Solaris',
// 	type: 'sedan',
// 	maxSpeed: '320',
// 	color: 'red',
// }
// Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта.
/* <article>
    <div>
        <h2>Hendai Solaris</h2>
        <span>sedan</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>320</span>
    </div>
    <div>
        <span>Color:</span>
        <span>red</span>
    </div>
</article> */
// const car = {
//   name: "Hendai Solaris",
//   type: "sedan",
//   maxSpeed: "320",
//   color: "red",
// };

// function getStringHtml(car) {
//   return `<article>
//   <div>
//       <h2>${car.name}</h2>
//       <span>${car.type}</span>
//   </div>
//   <div>
//       <span>Maximum speed:</span>
//       <span>${car.maxSpeed}</span>
//   </div>
//   <div>
//       <span>Color:</span>
//       <span>${car.color}</span>
//   </div>
// </article>`;
// }
// console.log(getStringHtml(car));
//#endregion
//#region  Задание 2
// Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

// const sentence = "Hello, how are you?";
// /**
//  *
//  * @param {string} sentence
//  */
// function countWords(sentence) {
//   return sentence.split(" ").length;
// }

// console.log(countWords(sentence)); // 4

// const sentence = "Hello,how    are you?";
// /**
//  *
//  * @param {string} sentence
//  */
// function countWords(sentence) {
//   return sentence
//     .replaceAll(/\W/g, " ")
//     .split(" ")
//     .filter((word) => !!word).length;
// }

// console.log(countWords(sentence)); // 4

//#endregion
//#region  Задание #3
// Необходимо написать функцию getInitials(), которая принимает полное имя в
// виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

// /**
//  *
//  * @param {string} sentence
//  * @returns {string[]}
//  */
// function getWords(sentence) {
//   return sentence
//     .replaceAll(/\W/g, " ")
//     .split(" ")
//     .filter((word) => !!word);
// }

// function getInitials(fullName) {
//   return getWords(fullName)
//     .map((item) => item[0].toUpperCase() + ".")
//     .join(" ");
// }

// const fullName = "John Doe";
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."
//#endregion
//#region  Задание #4

// Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает строку ”Google”
// с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.

// function generateGoogleString(num) {
//   let arrO = [];

//   if (num < 2) {
//     arrO = ["o", "o"];
//   } else {
//     arrO = new Array(num).fill("o");
//   }
//   return "G" + arrO.join("") + "gle";
// }

//#endregion

//#region  Задание #5
// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке.

// /**
//  *
//  * @param {string} str
//  * @returns {number}
//  */
// function countVowels(str) {
//   const voWels = "аоиеёэыуюяaeiouy";
//   return str.split("").filter((char) => voWels.includes(char)).length;
// }

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4

//#endregion
