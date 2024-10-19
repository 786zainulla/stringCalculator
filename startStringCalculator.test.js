// stringCalculator.test.js
const { add } = require('./stringCalculator.js');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single number returns the number', () => {
    expect(add('5')).toBe(5);
});

test('two numbers return their sum', () => {
    expect(add('1,2')).toBe(3);
});

test('handles newlines as separators', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add('//;\n1;2;3')).toBe(6);
});

test('throws error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});

test('ignores non-numeric values', () => {
    expect(add('1,2,x,3')).toBe(6);
});

test('Test', () => {
    expect(add('//;\n1;2')).toBe(3);
});
test('Test L5', () => {
    expect(() => add('-35,x,-87,y')).toThrow('Negative numbers not allowed: -35, -87');
});

test('handles large numbers correctly', () => {
    expect(add('1000,2000,3000')).toBe(6000);
});

test('handles multiple custom delimiters', () => {
    expect(add('//[;][#]\n1;2#3')).toBe(6);
});

test('handles long strings with many numbers', () => {
    const longInput = Array.from({ length: 1000 }, (_, i) => i + 1).join(',');
    expect(add(longInput)).toBe(500500); // Sum of first 1000 numbers
});

test('throws error for multiple negative numbers', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4');
});

test('ignores non-numeric values mixed with valid numbers', () => {
    expect(add('1,2,three,4,five,6')).toBe(13); // Non-numeric values are ignored
});

test('handles very large numbers', () => {
    expect(add('999999999,1')).toBe(1000000000); // Check for overflow issues
});

test('handles custom delimiters of varying lengths', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
    expect(add('//[**][%%]\n1**2%%3')).toBe(6);
});

test('handles empty strings between delimiters', () => {
    expect(add('1,,2,3')).toBe(6); // Empty values should be ignored
    expect(add('//;\n1;;2;3')).toBe(6); // Custom delimiter with empty values
});

test('handles negative numbers with custom delimiters', () => {
    expect(() => add('//;\n1;-2;3')).toThrow('Negative numbers not allowed: -2');
});

test('handles very long input with mixed delimiters', () => {
    const longInput = '1,2,3\n4,5,6\n7,8,9\n10,11,12\n' + '13,14,15\n' + '16,17,18\n' + '19,20,21\n' + '22,23,24\n' + '25,26,27\n' + '28,29,30';
    expect(add(longInput)).toBe(465); // Sum of numbers from 1 to 30
});