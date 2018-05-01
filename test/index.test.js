const calculate = require('../index.js');

const cases = [
  { name: '1 + 1', be: 2 },
  { name: '(52-4)*158/96', be: 79 },
  { name: '(52-4)*158//96', be: NaN },
];

cases.forEach(({ name, be }) => {
  test(`for "${name}"`, () => {
    expect(calculate(name)).toBe(be);
  });
});
