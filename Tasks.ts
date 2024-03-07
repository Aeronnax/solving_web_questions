// Потренироваться использовать эти методы массива:
// forEach
// find
// some
// filter
// sort
// reduce

//дан список пользователей:
// надо:
// вывести список всех ПОЛЬЗОВАТЕЛЕЙ (role = user), отсортированные по имени (A-Я)

// const USERS = [
//   { id: 0, name: "Саша", age: 26, role: "user" },
//   { id: 1, name: "Коля", age: 15, role: "admin" },
//   { id: 2, name: "Ваня", age: 37, role: "user" },
//   { id: 3, name: "Катя", age: 23, role: "user" },
// ];

/*  МЕТОДЫ МАССИВА
// function arrayOperations(arr) {
//   // forEach - перебирает все элементы массива
//   arr.forEach(function (item) {
//     console.log(item);
//   });

//   // find - находит первый элемент, удовлетворяющий условию
//   let foundItem = arr.find(function (item) {
//     return item > 5;
//   });
//   console.log("=", foundItem);

//   // some - проверяет, удовлетворяет ли хотя бы один элемент условию
//   let isSomeItemGreater = arr.some(function (item) {
//     return item > 10;
//   });
//   console.log("==", isSomeItemGreater);

//   // filter - фильтрует массив по заданному условию
//   let filteredArray = arr.filter(function (item) {
//     return item % 2 === 0;
//   });
//   console.log("===", filteredArray);

//   // sort - сортирует массив
//   let sortedArray = arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log("====", sortedArray);

//   // reduce - выполняет функцию для каждого элемента массива и возвращает результирующее значение
//   let sum = arr.reduce(function (acc, curr) {
//     return acc + curr;
//   }, 0);
//   console.log("=====", sum);
// }

// let numbers = [1, 5, 3, 8, 2];
// arrayOperations(numbers);
*/
// дан список пользователей:
// const USERS = [
//   { id: 0, name: "Саша", age: 26, role: "user" },
//   { id: 1, name: "Коля", age: 15, role: "admin" },
//   { id: 2, name: "Ваня", age: 37, role: "user" },
//   { id: 3, name: "Катя", age: 23, role: "user" },
// ];

// // надо:
// // вывести список всех ПОЛЬЗОВАТЕЛЕЙ (role = user), отсортированные по имени (A-Я)
// const roleUser = USERS.filter((user) => user.role === "user").sort((a, b) =>
//   a.name.localeCompare(b.name)
// );
// console.log(roleUser);

// const arr = Array.from({ length }, (_, index) => index);
// const arr = [...new Array(length)].map((_, index) => index);
// const arr = [...new Array(length)] // Получить пустой массив
// const arr = new Array(length);

// const arr = [16, 4, 7, 9];
// let sum = arr.reduce((acc, curr) => {
//   if (curr % 2 !== 0) {
//     return acc;
//   }
//   return acc + Math.sqrt(curr);
// }, 0);
// console.log(sum);
// Есть ферма животных, у всех животных есть имена и возраст. Животные бывают разных типов: Кошки, Собаки, Коровы. У каждого животного могут быть дети.
// Если животное является родителем этих детей, в свою очередь глубина семейного древа может достигать N либо 0.
// Опишите структуры данных для фермы животных и напишите функцию, которая делает подсчёт всех возрастов животных и выводит общий возраст для всей фермы.

// class Animal {
//   age: number;
//   name: string;
//   childrens: Animal[];

//   constructor(name: string, age: number, children: Animal[]) {
//     this.age = age;
//     this.name = name;
//     this.childrens = children;
//   }
// }

// const Semen = new Animal("Семен", 3, []);
// const Marusa = new Animal("Маруся", 8, [Semen]);
// const Oleg = new Animal("Олег", 9, [Semen]);

// const ferms: Animal[] = [Oleg, Marusa];

// const calcFermAges = (ferm: Animal[]): number => {
//   const animals = new Set<Animal>();

//   const addAnimalToMap = (animal: Animal): void => {
//     animals.add(animal);

//     animal.childrens.forEach((children) => addAnimalToMap(children));
//   };

//   ferm.forEach((animal) => addAnimalToMap(animal));

//   return Array.from(animals).reduce((acc, curr): number => {
//     return curr.age + acc;
//   }, 0);
// };

// console.log(calcFermAges(ferms));

export const sum = (a: number, b: number): number => a + b;

export const formatDate = (date: Date, locale: string): string => {
  return date.toLocaleDateString(locale);
};

export const getLocalMonth = (monthIndex: number, locale: string): string => {
  const date = new Date(2023, monthIndex, 1);
  return date.toLocaleDateString(locale, {
    month: "long",
  });
};
export const getMonths = (locale: string): string[] => {
  return [...new Array(12)].map((_, index): string => {
    return getLocalMonth(index, locale);
  });
};
//#region ======= ТИПЫ TS
// type User = {
//   id: number;
//   name: string;
// };
// type Role = "user" | "admin";
// interface Employee {
//   role: Role;
// }
// type CheckAdmin = (role: Role) => boolean;

// const user: Employee & User = {
//   name: "Илья",
//   id: 0,
//   role: "user",
// };

// const checkAdmin: CheckAdmin = (role) => role === "admin";
//#endregion

//#region ======= any и unknown
// const obj1: any = undefined;
// const obj2: unknown = "123";
// obj1.a;
// if (typeof obj2 === "object" && obj2 !== null) {
//   if ("a" in obj2) {
//     obj2.a;
//   }
// }
//#endregion

//#region ======= Пояснение про структуру памяти и Кортеджи
/*

Для языка С

_________________________________
|...|15| | | | | | | | | | | | | |
---------------------------------
      |
const strArr = new Array(length: 3, type: string);

const byteLentht = string.byteLentht = 2 байта;


strArr[0] = 15 + (3 * byteLentht: 2)

Для JS 

const arr = [
    1,
    'Илья'
] == {
    0: 1,
    1: Илья
}

const array: [number, string] = [1, "Илья"];

*/
//#endregion

//#region ======= Пояснение про Дженерики
export const grouped = <TElemnt, TGroup>(
  arr: TElemnt[],
  getGroup: (element: TElemnt) => TGroup
): Map<TGroup, TElemnt[]> => {
  const map = new Map<TGroup, TElemnt[]>();

  arr.forEach((item) => {
    const key = getGroup(item);
    const items = map.get(key);
    if (!items) {
      map.set(key, [item]);
      return;
    }
    items.push(item);
    map.set(key, items);
  });

  return map;
};

export type Role = "admin" | "user";

export interface Employer {
  name: string;
  id: number;
  role: Role;
}
//#endregion
/**
 * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 * Сложность задачи: 1 of 5
 * @param {number} arraySize - размер массива
 * @param {?} value - значение для массива
 * @returns {Array}
 */
export const fill = (arraySize: number, value: unknown): unknown[] => {
  return [...new Array(arraySize)].map(() => value);
};
/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
export const reverse = (array: unknown[]): unknown[] => {
  const reversedArray: unknown[] = [];

  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];

    reversedArray.push(element);
  }

  return reversedArray;

  //   return [...new Array(array.length)].map((_, index) => {
  //     const reverseIndex: number = array.length - 1 - index;

  //     return array[reverseIndex];
  //   });
};
//Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
/**
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
 * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
export const compact = (array: unknown[]): unknown[] => {
  return array.filter((value) => !!value);
};

/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Сложность задачи: 2 of 5
 * @param {Array} array - массив, значения которого массивы пар
 * @returns {Array}
 */

type Pair = [string, unknown];

type NewObject = Record<string, unknown>;

export const fromPairs = (array: Pair[]): NewObject => {
  return array.reduce((acc: NewObject, curr): NewObject => {
    const key = curr[0];
    const value = curr[1];
    acc[key] = value;
    return acc;
  }, {});
};
//Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
/**
 * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
 * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
 * Сложность задачи: 2 of 5
 * @param {Array} array - Массив с примитивными значениями
 * @param {?} args - лист значений для удаления
 * @returns {Array}
 */
export const without = (array: unknown[], ...args: unknown[]) => {
  return array.filter((item) => {
    return !args.includes(item);
  });
};

//Unique. Напишите функцию, которая убирает повторяющиеся значения.
/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * Сложность задачи: 2 of 5
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */
export const unique = (array: unknown[]): unknown[] => {
  return Array.from(new Set(array));
};

//IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
/**
 * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
 * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
 * Сложность задачи: 2 of 5
 * @param {Array} firstArray - Массив с примитивными значениями
 * @param {Array} secondArray - Массив с примитивными значениями
 * @returns {boolean}
 */
export const isEqual = (
  firstArray: unknown[],
  secondArray: unknown[]
): boolean => {
  if (firstArray.length != secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

//Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный. Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее.
/**
 * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
 * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Глубокий массив
 * @returns {Array}
 */
export const flatten = (array: unknown[]): unknown[] => {
  return array.reduce<unknown[]>((acc, curr): unknown[] => {
    if (Array.isArray(curr)) {
      return [...acc, ...flatten(curr)];
    }
    return [...acc, curr];
  }, []);
};

//Chunk. Напишите функцию, которая разделяет массив на части заданного размера.
/**
 * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
 */
export const chunk = (array: unknown[], size: number): unknown[][] => {
  const sliceArr: unknown[][] = [];
  for (let i = 0; i < array.length; i += size) {
    sliceArr.push(array.slice(i, i + size));
  }
  return sliceArr;
};

//Intersection. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
//Используйте примитивные типы данных.
/**
 * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
 * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
 * Сложность задачи: 4 of 5
 * @param {?} arrays - Массив примитивных значений
 * @returns {Array}
 */

const getMostMinArray = <T>(arrays: T[][]): T[] => {
  return arrays.reduce((acc: T[], curr): T[] => {
    if (curr.length < acc.length) {
      return curr;
    }
    return acc;
  });
};

export const removeElementFromArray = <T>(
  array: T[],
  removedElement: T
): T[] => {
  const resultArray = [...array];
  const indexRemovedArray = resultArray.indexOf(removedElement);
  if (indexRemovedArray == -1) {
    return resultArray;
  }
  resultArray.splice(indexRemovedArray, 1);
  return resultArray;
};

// arraysWithoutMinArray.reduce(
//   (acc: boolean, curr): boolean => {
//     if (!acc) {
//       return acc;
//     }
//     return curr.includes(item);
//   },
//   true
// );
const checkItemInAllArrays = <T>(item: T, arrays: T[][]): boolean => {
  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    if (!array.includes(item)) {
      return false;
    }
  }
  return true;
};

export const intersection = (...arrays: unknown[][]): unknown[] => {
  const minArray = getMostMinArray(arrays);
  const arraysWithoutMinArray = removeElementFromArray(arrays, minArray);

  const arrUnique: unknown[] = [];
  minArray.forEach((item) => {
    const isIncludeInAllArray = checkItemInAllArrays(
      item,
      arraysWithoutMinArray
    );

    if (isIncludeInAllArray && !arrUnique.includes(item)) {
      arrUnique.push(item);
    }
  });

  return arrUnique;
};
