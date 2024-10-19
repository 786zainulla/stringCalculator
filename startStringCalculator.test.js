// stringCalculator.test.js
const { add } = require('./TDDS.js');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single number returns the number', () => {
    expect(add('5')).toBe(5);
});

test('two numbers return their sum', () => {
    expect(add('1,2')).toBe(3);
});
