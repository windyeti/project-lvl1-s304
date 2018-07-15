import templGame from '../templGame';
import { cons } from 'hexlet-pairs';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const question = () => {
  const randomNumber = Math.ceil(Math.random() * 20);
  return cons( randomNumber, isEven(randomNumber) ? 'yes' : 'no');
};

export default () => templGame(rule, question);
