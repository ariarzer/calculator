const isNumber = arg => (!((Number.isNaN(+arg)) || (arg === ' ')));

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
        result[result.length - 1] += symbol;
      } else {
        result.push(symbol);
      }
    }
    if (isOperator(expr[i])) {
      while (priority[symbol] <= priority[stack[stack.length - 1]]) {
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
      while (stack[stack.length - 1] !== '(') {
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
