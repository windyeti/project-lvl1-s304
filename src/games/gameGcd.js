import { cons } from 'hexlet-pairs';

import templGame from '../templGame';
import getRandomNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const findMaxDivisor = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return false;
};

const question = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const str = `${num1} ${num2}`;
  const maxDivisor = findMaxDivisor(num1, num2);
  return cons(str, maxDivisor.toString());
};

export default () => templGame(rule, question);
