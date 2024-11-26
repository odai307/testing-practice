import calculator from "../calculator";

describe('Calculator tests', () => {
    test('tests for addition', () => {
        expect(calculator.add(3, 5)).toBe(8);
        expect(calculator.add(-2, 5)).toBe(3);
        expect(calculator.add(4, -6)).toBe(-2);
        expect(calculator.add(-7, -6)).toBe(-13);
    });

    test('tests for subtraction', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(-3, -3)).toBe(0);
        expect(calculator.subtract(-3, 5)).toBe(-8);
        expect(calculator.subtract(2, -7)).toBe(9);
    });

    test('tests for division', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(2, 4)).toBeCloseTo(0.5, 1);
        expect(calculator.divide(5, 3)).toBeCloseTo(1.67, 2);
        expect(calculator.divide(0, 8)).toBe(0);
    });

    test('division by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
    });

    test('tests for multiplication', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-3, 5)).toBe(-15);
        expect(calculator.multiply(4, -4)).toBe(-16);
        expect(calculator.multiply(0, 4)).toBe(0);
    })
})