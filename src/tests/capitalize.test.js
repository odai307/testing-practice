import capitalize from "../capitalize";


test('capitalize a string', () => {
    expect(capitalize('random')).toBe('Random');
})