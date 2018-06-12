const isNumber = arg => (!((Number.isNaN(+arg)) || (arg === ' ')));

const last = arr => arr.length - 1;

const lastElem = arr => arr[arr.length - 1];

const isOperator = (arg) => {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(arg);
};

function toRPN(expressoin) {
  const priority = {
    '-': 1,
    '+': 1,
    '*': 2,
    '/': 2,
  };

  const result = [];
  const stack = [];

  expressoin.split('').forEach((symbol, i, expr) => {
    if (isNumber(symbol)) {
      if (isNumber(expr[i - 1])) {
        result[last(result)] += symbol;
      } else {
        result.push(symbol);
      }
    }
    if (isOperator(symbol)) {
      while (priority[symbol] <= priority[lastElem(stack)]) {
        if (stack.length !== 0) {
          result.push(stack.pop());
        }
      }
      stack.push(symbol);
    }
    if (symbol === '(') {
      stack.push('(');
    }
    if (symbol === ')') {
      while (lastElem(stack) !== '(') {
        if (stack.length !== 0) {
          result.push(stack.pop());
        }
      }
      stack.pop();
    }
  });

  return result.concat(stack.reverse());
}

module.exports = toRPN;
