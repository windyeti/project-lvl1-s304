import readlineSync from 'readline-sync';

import greet from './index';

export default (rule, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  if (rule) console.log(rule);
  const name = greet();
  if (!getQuestion) return;
  const timeTry = 3;
  for (let i = 0; i < timeTry; i += 1) {
    const currentQuestion = getQuestion();
    console.log(`Question: ${currentQuestion}`);
    const rightAnswer = getRightAnswer(currentQuestion);
    const currentAnswer = readlineSync.question('Your answer: ');
    const isCorrect = () => currentAnswer === rightAnswer;
    if (isCorrect()) {
      console.log('Correct');
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations,  ${name}!`);
};
