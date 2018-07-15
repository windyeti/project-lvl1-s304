import templGame from '../templGame';
import { cons, car, cdr, toString } from 'hexlet-pairs';

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

export default () => templGame(rule, question);
