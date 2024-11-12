function sum(a, b) {
  return a + b;
}

// old exports language
// module.exports = sum;

// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(string) {
  let firstChar = string[0];
  let upperFirstChar = firstChar.toUpperCase();

  return string.replace(firstChar, upperFirstChar);
}

// A reverseString function that takes a string and returns it reversed.
function reverse(string) {
  return string.split("").reverse().join("");
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
// Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
// Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase.
//  For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
// Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged.
//  For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
// For this one, you may want to split the final function into a few smaller functions.
// One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones.
// So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured
// that your smaller helper functions are doing what they’re supposed to.

function caesarCipher(string, key) {
  // turn string to an array
  // loop through each letter of the array
  // apply key to the letter
  // insert resulting letter into new array

  // apply modulo to key if > 26
  if (key > 26) {
    key = key % 26;
  }

  const array = string.split("");

  const shiftedArray = [];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    let pattern = /[a-zA-Z]/;

    // test char for alpha
    if (pattern.test(array[i])) {
      console.log("is true");

      // test char for case

      let charCode = array[i].charCodeAt(0);

      if (charCode > 64 && charCode < 91) {
        // uppercase

        if (charCode + key > 90) {
          shiftedArray.push(String.fromCharCode(charCode + key - 91 + 65));
        } else if (charCode + key < 65) {
          shiftedArray.push(String.fromCharCode(90 - (64 - (charCode + key))));
        } else {
          shiftedArray.push(String.fromCharCode(key + charCode));
        }
      } else {
        // lowercase

        if (charCode + key > 122) {
          shiftedArray.push(String.fromCharCode(charCode + key - 123 + 97));
        } else if (charCode + key < 97) {
          shiftedArray.push(String.fromCharCode(122 - (96 - (charCode + key))));
        } else {
          shiftedArray.push(String.fromCharCode(key + charCode));
        }
      }
    } else {
      //non alpha char
      shiftedArray.push(array[i]);
    }
  }
  let cipher = shiftedArray.join("");
  console.log(shiftedArray);

  return cipher;
}

// analyzeArray

// An analyzeArray function that takes an array of numbers and returns an object with the
//following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//    average: 4,
//    min: 1,
//    max: 8,
//    length: 6
// };

function analyzeArray(array) {
  // average of array
  // min of array/
  // max of array
  // length of array

  array.length;

  return {
    average:
      array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { sum, capitalize, reverse, calculator, caesarCipher, analyzeArray };
