const isNumber = arg => (!((Number.isNaN(+arg)) || (arg === ' ')));

const isOperator = (arg) => {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(arg);
};

function toRPN(expr) {
  const priority = {
    '-': 1,
    '+': 1,
    '*': 2,
    '/': 2,
  };

  const result = [];
  const stack = [];

  for (let i = 0; i < expr.length; i += 1) {
    if (isNumber(expr[i])) {
      if (isNumber(expr[i - 1])) {
        result[result.length - 1] += expr[i];
      } else {
        result.push(expr[i]);
      }
    }
    if (isOperator(expr[i])) {
      while (priority[expr[i]] <= priority[stack[stack.length - 1]]) {
        if (stack.length !== 0) {
          result.push(stack.pop());
        }
      }
      stack.push(expr[i]);
    }
    if (expr[i] === '(') {
      stack.push('(');
    }
    if (expr[i] === ')') {
      while (stack[stack.length - 1] !== '(') {
        if (stack.length !== 0) {
          result.push(stack.pop());
        }
      }
      stack.pop();
    }
  }

  return result.concat(stack.reverse());
}

module.exports = toRPN;
