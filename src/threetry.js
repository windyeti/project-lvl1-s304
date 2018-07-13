import readlineSync from 'readline-sync';

export default (name) => {
  let count = 0;
  while (count < 3) {
    const random = Math.ceil(Math.random() * 20);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if ((random % 2 === 0 && answer === 'yes') || (random % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${random % 2 === 0 ? 'yes' : 'no'}.\nLet's try again, ${name}`);
      return;
    }
    count += 1;
  }
  console.log(`Congratulations,  ${name}!`);
};
