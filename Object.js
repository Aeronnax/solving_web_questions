//#region Задание #1
// Создайте класс Circle, который имеет поле radius, а также метод getArea(), высчитывающий площадь круга и округляющий её до двух знаков после запятой.
// Сделайте так, чтобы код ниже работал:
// const circle = new Circle(5);
// console.log(circle.getArea());
// class People {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     return this.name;
//   }
// }
// const dima = new People("Дима");
// console.log(dima.sayName());

// class Circle {
//   radius;
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     const square = Math.PI * Math.pow(this.radius, 2);
//     return square.toFixed(2);
//   }
// }
// const circle = new Circle(5);

// console.log(circle.getArea());

//#endregion
//#region Задание #2

// Реализуйте класс Product, который имеет поля name и price. Также он имеет метод priceWithDiscount(),
// который возвращает обновленную цену с учетом переданной скидки (в процентах). Метод не изменяет само значение price в объекте, а только выводит обновленное.
// Сделайте так, чтобы код ниже работал: .

// class Product {
//   name;
//   price;
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   priceWithDiscount(discount) {
//     const discountPrice = (discount / 100) * this.price;
//     return this.price - discountPrice;
//   }
// }
// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800

//#endregion
//#region Задание #3
// Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:
// addFriend() — принимает имя нового друга и добавляет его в массив friends;
// showFriends() — выводит в консоль строку со всеми друзьями через запятую.
// Сделайте так, чтобы код ниже работал:

// class Person {
//   friends = [];
//   addFriend(people) {
//     this.friends.push(people);
//   }
//   showFriends() {
//     return this.friends.join(", ");
//   }
// }

// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь
// console.log(person.showFriends());
//#endregion
//#region Задание #4

// 1. Создайте класс Animal с полями name, favoriteFood, а также методами:

// makeSound() — вывести звук животного в консоль;
// sayName() — вывести имя животного в консоль;
// sayInfo() — вывести любимое блюдо животного в консоль.
// 2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. Переопределите для них метод makeSound(),
// чтобы он всегда возвращал соответствующий звук животного.
// 3. Сделайте так, чтобы код ниже работал:
// class Animal {
//   name;
//   favoriteFood;
//   constructor(name, food) {
//     this.name = name;
//     this.favoriteFood = food;
//   }
//   makeSound() {
//     return null;
//   }
//   sayName() {
//     return `My name is ${this.name}`;
//   }
//   sayInfo() {
//     return `${this.name}'s favorite food is ${this.favoriteFood}`;
//   }
// }
// class Cat extends Animal {
//   makeSound() {
//     return "Meow";
//   }
// }
// class Dog extends Animal {
//   makeSound() {
//     return "Gav!";
//   }
// }

// const dog = new Dog("Rex", "Meat");
// const cat = new Cat("Barsik", "Fish");

// console.log(cat.makeSound()); // Meow
// console.log(dog.makeSound()); // Gav!

// console.log(dog.sayName()); // My name is Rex
// console.log(cat.sayName()); // My name is Barsik

// console.log(dog.sayInfo()); // Rex's favorite food is Meat
// console.log(cat.sayInfo()); // Barsik's favorite food is Fish
//#endregion
//#region Задание #5
// Создайте объект foo со свойством a равным 5. Также добавьте ему два метода:
// bar() — с помощью ключевого слова function;
// baz() — с помощью стрелочной функции.
// Внутри методов выведите в консоль this.a и затем выполните следующий код:
// foo.bar();
// foo.baz();
// Проанализируйте результаты вызовов и определите для себя, почему произошел тот или иной вы
// const foo = {
//   a: 5,
//   bar: function () {
//     console.log(this.a);
//   },
//   baz: () => {
//     console.log(this.a);
//   },
// };
// foo.bar();
// foo.baz();
//#endregion
//#region Задание #6

//Дан следующий фрагмент кода:
//Отредактируйте код так, чтобы при его работе выводились корректные номера коробок. Функцию produceBox() править нельзя.
// const boxFactory = {
//   type: "box",
//   count: 0,
//   produce: function () {
//     this.count++;
//     return "Box №" + this.count;
//   },
// };

// const produceBox = (produceFn) => {
//   const boxName = produceFn();
//   console.log(boxName);
// };

// for (let i = 0; i < 25; i++) {
//   produceBox(boxFactory.produce.bind(boxFactory));
// }

//#endregion
