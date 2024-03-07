import {
  sum,
  formatDate,
  getLocalMonth,
  getMonths,
  fill,
  reverse,
  compact,
  fromPairs,
  Employer,
  grouped,
  Role,
  without,
  unique,
  isEqual,
  flatten,
  chunk,
  intersection,
  removeElementFromArray,
} from "./Tasks";

test("функция работает", () => {
  //   const sum = jest.fn((a: number, b: number) => a  b);
  //   expect(sum).toBeCalled();
  expect(sum(1, 2)).toBe(3);
  //   expect(sum).toBeCalled();
});

test("сравнение объектов", () => {
  expect({ name: "Илья", age: 23 }).toStrictEqual({ name: "Илья", age: 23 });
  expect({ name: "Илья", age: 23 }).not.toBe({ name: "Илья", age: 23 });
});

test("formatDate", () => {
  const date = new Date(2023, 9, 13);
  expect(formatDate(date, "ru")).toBe("13.10.2023");
  expect(formatDate(date, "en")).toBe("10/13/2023");
  expect(formatDate(date, "zh")).toBe("2023/10/13");
});

test("getLocalMonth", () => {
  expect(getLocalMonth(0, "ru")).toBe("январь");
  expect(getLocalMonth(0, "en")).toBe("January");
  expect(getLocalMonth(0, "zh")).toBe("一月");
});

test("getMonths", () => {
  expect(getMonths("ru")).toStrictEqual([
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ]);
  expect(getMonths("en")).toStrictEqual([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  expect(getMonths("zh")).toStrictEqual([
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]);
});

test("fill", () => {
  expect(fill(3, "a")).toStrictEqual(["a", "a", "a"]);
});
test("reverse", () => {
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
  expect(reverse(["Витя", "Петя", "Илья", "Катя", "Рома"])).toStrictEqual([
    "Рома",
    "Катя",
    "Илья",
    "Петя",
    "Витя",
  ]);
});
test("compact", () => {
  expect(compact([0, 1, false, 2, undefined, "", 3, null])).toStrictEqual([
    1, 2, 3,
  ]);
});
test("fromPairs", () => {
  expect(
    fromPairs([
      ["a", 1],
      ["b", 2],
    ])
  ).toStrictEqual({ a: 1, b: 2 });
});

test("grouped", () => {
  const employers: Employer[] = [
    {
      id: 0,
      name: "Дима",
      role: "admin",
    },
    {
      id: 0,
      name: "Илья",
      role: "user",
    },
  ];

  expect(Array.from(grouped(employers, (item) => item.role))).toStrictEqual<
    [Role, Employer[]][]
  >([
    [
      "admin",
      [
        {
          id: 0,
          name: "Дима",
          role: "admin",
        },
      ],
    ],
    [
      "user",
      [
        {
          id: 0,
          name: "Илья",
          role: "user",
        },
      ],
    ],
  ]);

  expect(
    Array.from(
      grouped([1, 2, -3, 0, -8, 15], (item) =>
        item >= 0 ? "positive" : "negative"
      )
    )
  ).toStrictEqual<["positive" | "negative", number[]][]>([
    ["positive", [1, 2, 0, 15]],
    ["negative", [-3, -8]],
  ]);
});

test("without", () => {
  expect(without([1, 2, 3, 1, 2], 1, 2)).toStrictEqual([3]);
});
test("unique", () => {
  expect(unique([1, 2, 1, 2, 3])).toStrictEqual([1, 2, 3]);
});

test("isEqual", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  const arr3 = [1, 2, 3, 5];
  const arr4 = [1, 2, 3, 4, 5];
  expect(isEqual(arr1, arr2)).toBe(true);
  expect(isEqual(arr1, arr3)).toBe(false);
  expect(isEqual(arr1, arr4)).toBe(false);
});
test("flatten", () => {
  expect(flatten([1, 2, [3, 4, [5]]])).toStrictEqual([1, 2, 3, 4, 5]);
});
test("chunk", () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7],
  ]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]);
});

test("intersection", () => {
  const arr1 = [1, 2];
  const arr2 = [2, 3];
  const arr3 = ["a", "b"];
  const arr4 = ["b", "c"];
  const arr5 = ["b", "e", "c"];
  const arr6 = ["b", "b", "e"];
  const arr7 = ["b", "c", "e"];
  const arr8 = ["b", "e", "c"];

  expect(intersection(arr1, arr2)).toStrictEqual([2]);

  expect(intersection(arr3, arr4, arr5)).toStrictEqual(["b"]);

  expect(intersection(arr6, arr7, arr8)).toStrictEqual(["b", "e"]);
});

test("removeElementFromArray", () => {
  expect(removeElementFromArray([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  expect(removeElementFromArray([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
});
