import readlineSync from 'readline-sync';

export default () => {
  let count = 0;
  while (count < 3) {
    const random = Math.ceil(Math.random() * 20);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if ((random % 2 === 0 && answer === 'yes') || (random % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${random % 2 === 0 ? 'yes' : 'no'}.`);
      return false;
    }
    count += 1;
  }
  return true;
};
