//#region Задание #1
// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

// const birthDate = new Date("1998-10-23");

// const calculateAge = (birthday) => {
//   let year = new Date();
//   const dif = year - birthday;
//   const yearMs = 1000 * 60 * 60 * 24 * 365;
//   return Math.floor(dif / yearMs);
// };
// const age = calculateAge(birthDate);

// console.log(age);

//#endregion
//#region Задание #2
// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

// const getDateDifference = (data1, data2) => {
//   const dif = data1 - data2;
//   const yearday = 1000 * 60 * 60 * 24;
//   return Math.abs(Math.floor(dif / yearday));
// };
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9

// const date1 = new Date("2027-06-01");
// const date2 = new Date("2027-06-10");

//#endregion
//#region Задание #3
//Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной.
// const getTimeUntilDate = (date) => {
//   const yearDay = 1000 * 60 * 60 * 24;
//   const yearHours = 1000 * 60 * 60;
//   const yearMin = 1000 * 60;
//   const yearSec = 1000;
//   const dif = date - new Date();
//   const allDate = {
//     days: date / yearDay,
//     hours: date / yearHours,
//     minutes: date / yearMin,
//     seconds: date / yearSec,
//   };
//   return allDate;
// };

// const getTimeUntilDate = (date) => {
//   const ms = {
//     day: 1000 * 60 * 60 * 24,
//     hours: 1000 * 60 * 60,
//     minutes: 1000 * 60,
//     seconds: 1000,
//   };

//   let currentDate = new Date();
//   let targetDate = new Date(date);

//   let dif = targetDate - currentDate;

//   const days = Math.floor(dif / ms.day);
//   dif = dif - days * ms.day;

//   const hours = Math.floor(dif / ms.hours);
//   dif = dif - hours * ms.hours;

//   const minutes = Math.floor(dif / ms.minutes);
//   dif = dif - minutes * ms.minutes;

//   const seconds = Math.floor(dif / ms.seconds);
//   let allDate = {
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
//   return allDate;
// };

/*
3456 см

м = 34,
дм = 5,
см = 6

*/

// const targetDate = new Date("2023-12-31T23:59:59");
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);

// { days: 100, hours: 20, minutes: 45, seconds: 31 }

//#endregion
//#region Задание #4
//Напишите функцию isWeekends(), которая проверяет, является ли указанная дата выходным днем.
// /**
//  *
//  * @param {Date} date
//  */
// const isWeekend = (date) => {
//   if (date.getDay() === 0 || date.getDay() === 6) {
//     return true;
//   } else return false;
// };

// const date1 = new Date("2027-07-10"); // Суббота
// console.log(date1.getDay());
// const date2 = new Date("2027-07-12"); // Понедельник

// console.log(isWeekend(date1)); // true
// console.log(isWeekend(date2));

//#endregion
//#region Задание #5
//Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false.
// const isLeapYear = (year) => {
//   if (year % 4 !== 0) {
//     return false;
//   } else if (year % 100 !== 0) {
//     return true;
//   } else if (year % 400 !== 0) {
//     return true;
//   }
// };

// console.log(isLeapYear(2028)); // false
// console.log(isLeapYear(2024)); // true

//#endregion
//#region Задание #6

// function getLastDayOfMonth(date) {
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const lastDay = new Date(year, month + 1, 0).getDate();
//   return lastDay;
// }

// const test1 = new Date("2023-10-20");

// console.log(getLastDayOfMonth(test1)); // 31
//#endregion
