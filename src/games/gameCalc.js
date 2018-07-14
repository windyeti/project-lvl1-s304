import printWelcome from '../printWelcome';
import printRule from '../printRule';
import greet from '..';
import printQuestion from '../printQuestion';
import getAnswer from '../getAnswer';
import printResult from '../printResult';
import printBuyBuy from '../printBuyBuy';

const getSum = (num1, num2, action) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

export default () => {
  let result = true;
  const arrAction = ['+', '-', '*'];
  printWelcome();
  printRule('What is the result of the expression?');
  const name = greet();
  for (let i = 0; i < 3; i += 1) {
    const randomIndAction = Math.ceil(Math.random() * 3) - 1;
    const action = arrAction[randomIndAction];
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const question = `${num1} ${action} ${num2}`;
    printQuestion(question);
    const answer = getAnswer();
    result = printResult(+answer, getSum(num1, num2, action));
    if (!result) break;
  }
  printBuyBuy(result, name);
};
