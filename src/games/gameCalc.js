import { cons } from 'hexlet-pairs';

import templGame from '../templGame';

const rule = 'What is the result of the expression?';
const question = () => {
  const arrAction = ['+', '-', '*'];
  const randomIndAction = Math.ceil(Math.random() * 3) - 1;
  const action = arrAction[randomIndAction];
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  const str = `${num1} ${action} ${num2}`;
  const sum = () => {
    switch (action) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      default:
        return false;
    }
  };
  return cons(str, sum());
};
const step = 3;

export default () => templGame(rule, question, step);
