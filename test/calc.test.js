const calc = require('../calc.js');

const cases = [
  { name: ['256', '4', '/', '3', '96', '3', '/', '+', '*'], be: 2240 },
  { name: ['34534', '56', '14', '/', '/', '0', '*'], be: 0 },
  { name: ['332', '45', '56', '8', '/', '5', '-', '*', '-'], be: 242 },
  { name: ['+', '45', '56', '/', '*', '/', '-'], be: NaN },
];

cases.forEach(({ name, be }) => {
  test(`for "${name}"`, () => {
    expect(calc(name)).toBe(be);
  });
});
