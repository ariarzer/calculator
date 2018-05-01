function toRPN(exprArg) {
  const numbesr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['+', '-', '*', '/'];
  const priority = {'-': 1, '+': 1, '*': 2, '/': 2};

  const expr = (exprArg.split(' '));

  const result = [];
  const stack = [];

  for (let i = 0; i < expr.length; i++) {
    if (numbesr.includes(expr[i][0])) {
      result.push(expr[i]);
    }
    if (operators.includes(expr[i])) {
      while (priority[expr[i]] <= priority[stack[stack.length - 1]]) {
        if (stack.length !== 0) {
          result.push(stack.pop());
        }
      }
      stack.push(expr[i]);
    }
  }

  for (let i = stack.length; i > 0; i--) {
    result.push(stack.pop());
  }
  return result;
}

module.exports = toRPN;
