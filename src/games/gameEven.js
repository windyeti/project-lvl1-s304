import { cons } from 'hexlet-pairs';
import templGame from '../templGame';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const question = () => {
  const randomNumber = Math.ceil(Math.random() * 20);
  return cons(randomNumber, isEven(randomNumber) ? 'yes' : 'no');
};
const timeTry = 3;

export default () => templGame(rule, question, timeTry);
