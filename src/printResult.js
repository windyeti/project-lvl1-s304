export default (answer, rightAnswer) => {
  if (rightAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return false;
};
