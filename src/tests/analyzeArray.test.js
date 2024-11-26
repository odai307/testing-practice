import analyzeArray from '../analyzeArray';

describe('analyzeArray', () => {
    test('correctly calculates stats for a regular array', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result).toStrictEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    test('correctly calculates stats for an array with negative numbers', () => {
        const result = analyzeArray([-1, -2, -3, -4, -5]);
        expect(result).toStrictEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5
        });
    });

    test('correctly calculates stats for an array with a single element', () => {
        const result = analyzeArray([10]);
        expect(result).toStrictEqual({
            average: 10,
            min: 10,
            max: 10,
            length: 1
        });
    });

    test('correctly calculates stats for an array with zeros', () => {
        const result = analyzeArray([0, 0, 0, 0]);
        expect(result).toStrictEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 4
        });
    });

    test('returns correct result for an empty array', () => {
        const result = analyzeArray([]);
        expect(result).toStrictEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        });
    });

    test('returns correct result when no array is passed', () => {
        const result = analyzeArray();
        expect(result).toStrictEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        });
    });
});
