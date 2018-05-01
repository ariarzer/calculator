const toRPN = require('../index.js');

//

test('for 1+1', () => {
  expect(toRPN('1 + 1')).toEqual(['1', '1', '+']);
});

test('for 1-1', () => {
  expect(toRPN('1 + 1')).toEqual(['1', '1', '+']);
});

test('for 1*1', () => {
  expect(toRPN('1 * 1')).toEqual(['1', '1', '*']);
});

test('for 1/1', () => {
  expect(toRPN('1 * 1')).toEqual(['1', '1', '*']);
});

//

test('for 1+1+1', () => {
  expect(toRPN('1 + 1 + 1')).toEqual(['1', '1', '+', '1', '+']);
});

test('for 1-1-1', () => {
  expect(toRPN('1 - 1 - 1')).toEqual(['1', '1', '-', '1', '-']);
});

test('for 1/1/1', () => {
  expect(toRPN('1 / 1 / 1')).toEqual(['1', '1', '/', '1', '/']);
});

test('for 1*1*1', () => {
  expect(toRPN('1 * 1 * 1')).toEqual(['1', '1', '*', '1', '*']);
});

//

test('for 1+1*1', () => {
  expect(toRPN('1 + 1 * 1')).toEqual(['1', '1', '1', '*', '+']);
});

test('for 1+1/1', () => {
  expect(toRPN('1 + 1 / 1')).toEqual(['1', '1', '1', '/', '+']);
});

test('for 1*1+1', () => {
  expect(toRPN('1 * 1 + 1')).toEqual(['1', '1', '*', '1', '+']);
});

test('for 1/1-1', () => {
  expect(toRPN('1 / 1 - 1')).toEqual(['1', '1', '/', '1', '-']);
});

//

test('for 1+10+100+1000', () => {
  expect(toRPN('1 + 10 + 100 + 1000')).toEqual(['1', '10', '+', '100', '+', '1000', '+']);
});

test('for 1+10*100/1000', () => {
  expect(toRPN('1 + 10 * 100 / 1000')).toEqual(['1', '10', '100', '*', '1000', '/', '+']);
});
