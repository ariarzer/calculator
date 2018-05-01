const calc = require('./calc.js');
const toRPN = require('./rpn.js');

function calculate(expr) {
  return calc(toRPN(expr));
}

module.exports = calculate;
