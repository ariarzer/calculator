const toRPN = require('../rpn.js');

const cases = [
  { name: '1 + 1', equal: ['1', '1', '+'] },
  { name: '1 + 1 + 1', equal: ['1', '1', '+', '1', '+'] },
  { name: '1 + 10 + 100 + 1000', equal: ['1', '10', '+', '100', '+', '1000', '+'] },
  { name: '1 * 1', equal: ['1', '1', '*'] },
  { name: '1 * 1 * 1', equal: ['1', '1', '*', '1', '*'] },
  { name: '1 + 10 * 100/1000', equal: ['1', '10', '100', '*', '1000', '/', '+'] },
  { name: '( ( 1 + 1 ) * 1 ) + 1 / ( 1 + 1 * 1 ) * 1', equal: ['1', '1', '+', '1', '*', '1', '1', '1', '1', '*', '+', '/', '1', '*', '+'] },
  { name: '1+1/1', equal: ['1', '1', '1', '/', '+'] },
  { name: '1+10+100+1000', equal: ['1', '10', '+', '100', '+', '1000', '+'] },
  { name: '20*554/(34+456/45)', equal: ['20', '554', '*', '34', '456', '45', '/', '+', '/'] },
];

cases.forEach(({ name, equal }) => {
  test(`for "${name}"`, () => {
    expect(toRPN(name)).toEqual(equal);
  });
});
