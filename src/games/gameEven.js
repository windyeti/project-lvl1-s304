import { cons } from 'hexlet-pairs';

import templGame from '../templGame';
import getRandomNumber from '../getRandomNumber';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const question = () => {
  const randomNumber = getRandomNumber(20);
  return cons(randomNumber, isEven(randomNumber) ? 'yes' : 'no');
};

export default () => templGame(rule, question);
