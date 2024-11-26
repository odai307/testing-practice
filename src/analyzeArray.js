export default function analyzeArray(array) {
    if (!array || array.length === 0) {
        return { average: null, min: null, max: null, length: 0 }
    }
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const length = array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = sum / length;

    return { average, min, max, length }
}