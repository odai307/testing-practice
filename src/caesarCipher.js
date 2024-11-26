export default function caesarCipher(string, number) {
    number = number % 26;
    let newString = '';
    for (let char of string) {
        // Check if Upper Case
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            let totalCharCode = char.charCodeAt(0) + number;
            if (totalCharCode > 90) {
                totalCharCode = totalCharCode - 26;
            } else if (totalCharCode < 65) {
                totalCharCode = totalCharCode + 26;
            }
            newString += String.fromCharCode(totalCharCode);
        }

        //Check if Lower Case
        else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            let totalCharCode = char.charCodeAt(0) + number;
            if (totalCharCode > 122) {
                totalCharCode = totalCharCode - 26;
            } else if (totalCharCode < 97) {
                totalCharCode = totalCharCode + 26;
            }
            newString += String.fromCharCode(totalCharCode);
        }
        // Non alphabetical characters remain
        else {
            newString += char;
        }
    }
    return newString;
}

const myString = 'a, b, c, d';
console.log(caesarCipher(myString, -1));