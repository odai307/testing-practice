export default function reverseString(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return string.split('').reverse().join('');
}