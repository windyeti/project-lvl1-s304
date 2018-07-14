import printWelcome from '../printWelcome';
import printRule from '../printRule';
import greet from '..';
import makeQuestion from '../makeQuestion';
import printQuestion from '../printQuestion';
import getAnswer from '../getAnswer';
import printResult from '../printResult';
import printBuyBuy from '../printBuyBuy';

export default () => {
  let result = true;
  printWelcome();
  printRule('Answer "yes" if number even otherwise answer "no".');
  const name = greet();
  for (let i = 0; i < 3; i += 1) {
    const question = makeQuestion(Math.ceil(Math.random() * 20));
    printQuestion(question);
    const answer = getAnswer();
    const isEven = (question % 2 === 0) ? 'yes' : 'no';
    result = printResult(answer, isEven);
    if (!result) break;
  }
  printBuyBuy(result, name);
};
