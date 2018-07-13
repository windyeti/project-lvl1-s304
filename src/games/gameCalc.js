import readlineSync from 'readline-sync';

export default () => {
  let count = 0;
  while (count < 3) {
    const arrAction = ['+', '-', '*'];
    const indAction = Math.ceil(Math.random() * 3) - 1;
    const action = arrAction[indAction];
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    console.log(`Question: ${num1} ${action} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const getSum = () => {
      switch (action) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          return false;
      }
    };
    if (+answer === getSum()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getSum()}'.`);
      return false;
    }
    count += 1;
  }
  return true;
};
