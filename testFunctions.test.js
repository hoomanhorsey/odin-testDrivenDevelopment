// insert tests

// old import text
// const sum = require("./testFunctions");

import {
  sum,
  capitalize,
  reverse,
  calculator,
  caesarCipher,
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

test("caesarCipher, 'zzz' apply shift factor of 1 becomes 'aaa'", () => {
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});

test("caesarCipher, '9string' apply shift factor of 1 becomes '9tusjoh'", () => {
  expect(caesarCipher("9string", 1)).toBe("9tusjoh");
});

test("caesarCipher, '9str !ing' apply shift factor of 1 becomes '9tus !joh'", () => {
  expect(caesarCipher("9st !ring", 1)).toBe("9tu !sjoh");
});
