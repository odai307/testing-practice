# Testing Practice with Jest

This project is focused on practicing JavaScript testing with Jest. It includes a variety of functions that are tested for correctness using unit tests. The goal is to practice writing tests for different kinds of functions, such as string manipulation, mathematical operations, and array analysis.

## Description

This project contains the following functions, each of which is accompanied by a set of tests to ensure proper functionality:

1. **capitalize function**: 
   - Capitalizes the first letter of a string while keeping the rest of the string unchanged.
   - Example:
     ```js
     capitalize('hello');  // returns 'Hello'
     ```

2. **reverseString function**: 
   - Reverses the provided string.
   - Example:
     ```js
     reverseString('hello');  // returns 'olleh'
     ```

3. **calculator object**: 
   - Contains basic arithmetic operations: addition, subtraction, multiplication, and division.
   - Example:
     ```js
     calculator.add(3, 5);       // returns 8
     calculator.subtract(9, 4);  // returns 5
     ```

4. **caesarCipher function**: 
   - Shifts characters in a string by a given number (Caesar cipher).
   - Handles case preservation, punctuation, and wraps from 'z' to 'a'.
   - Example:
     ```js
     caesarCipher('hello', 3);   // returns 'khoor'
     caesarCipher('xyz', 3);     // returns 'abc'
     caesarCipher('HeLLo', 3);   // returns 'KhOOr'
     ```

5. **analyzeArray function**: 
   - Analyzes an array of numbers and returns an object containing:
     - `average`: The average of the array's numbers.
     - `min`: The smallest number in the array.
     - `max`: The largest number in the array.
     - `length`: The length of the array.
   - Example:
     ```js
     analyzeArray([1,8,3,4,2,6]); 
     // returns { average: 4, min: 1, max: 8, length: 6 }
     ```

## Tests

This project includes tests for the functions described above. The following tests are currently implemented:

1. **capitalize function tests**:
   - Tests that the first character of the string is capitalized.
   - Example test: `capitalize('hello')` should return `'Hello'`.

2. **reverseString function tests**:
   - Tests that the string is reversed correctly.
   - Example test: `reverseString('hello')` should return `'olleh'`.

3. **calculator tests**:
   - Tests for all basic arithmetic operations:
     - `add(a, b)`
     - `subtract(a, b)`
     - `multiply(a, b)`
     - `divide(a, b)`
   - Example test: `calculator.add(3, 5)` should return `8`.

4. **caesarCipher function tests**:
   - Tests for different cases of shifting letters, maintaining lettercase, and handling punctuation.
   - Example test: `caesarCipher('Hello, World!', 3)` should return `'Khoor, Zruog!'`.

5. **analyzeArray function tests**:
   - Tests that the function calculates the correct `average`, `min`, `max`, and `length` of an array.
   - Example test: `analyzeArray([1,8,3,4,2,6])` should return `{ average: 4, min: 1, max: 8, length: 6 }`.

These tests ensure that the functions perform as expected and handle edge cases appropriately (such as punctuation in `caesarCipher` or division by zero in the `calculator`).

The project uses **Jest** as the testing framework, and all tests are located in `.test.js` files.

---

You can run the tests using the following command:

```bash
npm test
