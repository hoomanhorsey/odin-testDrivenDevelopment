// insert tests

// old import text
// const sum = require("./testFunctions");

import {
  sum,
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testFunctions";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalize
test("'lowercasestring' is returned as 'Lowercasestring'", () => {
  expect(capitalize("lowercasestring")).toMatch(/^[A-Z]/);
});

test("Input strings and output strings match", () => {
  expect(capitalize("lowercasestring").slice(1)).toEqual(
    "lowercasestring".slice(1)
  );
});

// Reverse

test("'string' is returned as 'gnirts'", () => {
  expect(reverse("string")).toBe("gnirts");
});

// calculator

test("calculator, adds 20 + 5 to equal 25 ", () => {
  expect(calculator.add(20, 5)).toBe(25);
});

test("calculator, subtracts 20 -5 to equal 15", () => {
  expect(calculator.subtract(20, 5)).toBe(15);
});
test("calculator, divides 20 by 5 to equal 4", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});
test("calculator, multiplies 20 by 5 to equal 100 ", () => {
  expect(calculator.multiply(20, 5)).toBe(100);
});

// caesarCipher
test("caesarCipher, 'string' apply shift factor of 1 becomes 'tusjoh'", () => {
  expect(caesarCipher("string", 1)).toBe("tusjoh");
});

test("caesarCipher, 'string' apply shift factor of -1 becomes 'rsqhmf'", () => {
  expect(caesarCipher("string", -1)).toBe("rsqhmf");
});

test("caesarCipher, 'string' apply shift factor of 27 becomes 'tusjoh'", () => {
  expect(caesarCipher("string", 27)).toBe("tusjoh");
});
test("caesarCipher, 'string' apply shift factor of 1 becomes 'tusjoh'", () => {
  expect(caesarCipher("string", 4)).toBe("wxvmrk");
});

test("caesarCipher, 'ZZZ' apply shift factor of 1 becomes 'AAA'", () => {
  expect(caesarCipher("ZZZ", 3)).toBe("CCC");
});
test("caesarCipher, 'zzz' apply shift factor of 1 becomes 'aaa'", () => {
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});
test("caesarCipher, 'AAA' apply shift factor of -1 becomes 'ZZZ'", () => {
  expect(caesarCipher("AAA", -1)).toBe("ZZZ");
});
test("caesarCipher, 'aaa' apply shift factor of -1 becomes 'zzz'", () => {
  expect(caesarCipher("aaa", -1)).toBe("zzz");
});

test("caesarCipher, '9string' apply shift factor of 1 becomes '9tusjoh'", () => {
  expect(caesarCipher("9string", 1)).toBe("9tusjoh");
});

test("caesarCipher, '9str !ing' apply shift factor of 1 becomes '9tus !joh'", () => {
  expect(caesarCipher("9st !ring", 1)).toBe("9tu !sjoh");
});

test("caesarCipher, 'Hello, World!' apply shift factor of 3 becomes 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray , '[1, 8, 3, 4, 2, 6] becomes object 'average': 4,'min': 1,'max': 8,'length': 6,", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray , '[6, 4, 5, 6, 7, 8, 9, 4, 5, 12, 11] becomes object 'average': 7,'min': 4,'max': 12,'length': 11,", () => {
  expect(analyzeArray([6, 4, 5, 6, 7, 8, 9, 4, 5, 12, 11])).toEqual({
    average: 7,
    min: 4,
    max: 12,
    length: 11,
  });
});
