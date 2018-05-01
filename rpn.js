function toRPN(expr) {
  const numbesr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['+', '-', '*', '/'];
  const priority = {
    '-': 1,
    '+': 1,
    '*': 2,
    '/': 2,
  };

  const result = [];
  const stack = [];

  for (let i = 0; i < expr.length; i += 1) {
    if (numbesr.includes(expr[i])) {
      if (numbesr.includes(expr[i - 1])) {
        result[result.length - 1] += expr[i];
      } else {
        result.push(expr[i]);
      }
    }
    if (operators.includes(expr[i])) {
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

  while (stack.length !== 0) {
    result.push(stack.pop());
  }
  return result;
}

module.exports = toRPN;
