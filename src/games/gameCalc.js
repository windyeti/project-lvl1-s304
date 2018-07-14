import templGame from '../templGame';

export default () => {
  const rule = 'What is the result of the expression?';
  const question = () => {
    const arrAction = ['+', '-', '*'];
    const randomIndAction = Math.ceil(Math.random() * 3) - 1;
    const action = arrAction[randomIndAction];
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    return `${num1} ${action} ${num2}`;
  };
  const rightAnswer = (currentQuestion) => {
    const arrCurrentQuestion = currentQuestion.split(' ');
    switch (arrCurrentQuestion[1]) {
      case '+':
        return (Number(arrCurrentQuestion[0]) + Number(arrCurrentQuestion[2])).toString();
      case '-':
        return (Number(arrCurrentQuestion[0]) - Number(arrCurrentQuestion[2])).toString();
      case '*':
        return (Number(arrCurrentQuestion[0]) * Number(arrCurrentQuestion[2])).toString();
      default:
        return false;
    }
  };
  templGame(rule, question, rightAnswer);
};
