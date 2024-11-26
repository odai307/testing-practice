import reverseString from "../reverseString";


test('reverses a string', () => {
    expect(reverseString('book')).toBe('koob');
    expect(reverseString('Horse')).toBe('esroH');
    expect(reverseString('come here')).toBe('ereh emoc');
    expect(reverseString('')).toBe('');
    expect(reverseString('b')).toBe('b');

    expect(() => reverseString(123)).toThrow(TypeError);
    
})