function calc(exprArr) {
  const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };
  const stack = [];

  exprArr.forEach((token) => {
    if (token in operators) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push(operators[token](+x, +y));
    } else {
      stack.push(token);
    }
  });
  return stack.pop();
}

module.exports = calc;
