import { cons } from 'hexlet-pairs';

import templGame from '../templGame';
import getRandomNumber from '../utils';

const arrAction = ['+', '-', '*'];

const rule = 'What is the result of the expression?';
const question = () => {
  let sum = 0;
  const randomIndAction = Math.ceil(Math.random() * 3) - 1;
  const action = arrAction[randomIndAction];
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const str = `${num1} ${action} ${num2}`;
  switch (action) {
    case '+':
      sum = (num1 + num2).toString();
      break;
    case '-':
      sum = (num1 - num2).toString();
      break;
    case '*':
      sum = (num1 * num2).toString();
      break;
    default:
      sum = 0;
  }
  return cons(str, sum);
};

export default () => templGame(rule, question);
