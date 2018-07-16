import { cons } from 'hexlet-pairs';

import templGame from '../templGame';
import getRandomNumber from '../getRandomNumber';

const rule = 'Find the greatest common divisor of given numbers.';
const question = () => {
  const findDivisor = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);
    const str = `${num1} ${num2}`;
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    for (let i = min; i > 0; i -= 1) {
      if (max % i === 0 && min % i === 0) {
        return cons(str, i.toString());
      }
    }
    return findDivisor();
  };
  return findDivisor();
};

export default () => templGame(rule, question);
