import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

import greet from '.';

export default (rule, getQuestion, timeTry) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = greet();
  for (let i = 0; i < timeTry; i += 1) {
    const currentQuestion = getQuestion();
    console.log(`Question: ${car(currentQuestion)}`);
    const rightAnswer = cdr(currentQuestion);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (currentAnswer === rightAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations,  ${name}!`);
};
