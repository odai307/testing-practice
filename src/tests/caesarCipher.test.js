import caesarCipher from "../caesarCipher";

describe('caesarCipher', () => {

    test('shifts letters correctly for positive shift', () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
        expect(caesarCipher("abc", 1)).toBe("bcd");
        expect(caesarCipher("xyz", 3)).toBe("abc");
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    });

    test('shifts letters correctly for negative shift', () => {
        expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
        expect(caesarCipher("bcd", -1)).toBe("abc");
        expect(caesarCipher("abc", -3)).toBe("xyz");
    });

    test('wraps around correctly for shift larger than 26', () => {
        expect(caesarCipher("abc", 30)).toBe("efg");  // 30 % 26 = 4, so "a" becomes "e"
        expect(caesarCipher("xyz", 30)).toBe("bcd");  // Same reasoning
        expect(caesarCipher("ABC", 52)).toBe("ABC");  // 52 % 26 = 0, no change
    });

    test('keeps non-alphabetical characters unchanged', () => {
        expect(caesarCipher("Hello, World! 123", 3)).toBe("Khoor, Zruog! 123");
        expect(caesarCipher("123", 3)).toBe("123");
        expect(caesarCipher("!@#", 5)).toBe("!@#");
    });

    test('handles shift of 0 correctly', () => {
        expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
    });

});
