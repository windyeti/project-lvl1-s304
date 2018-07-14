import templGame from '../templGame';

export default () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  const question = () => Math.ceil(Math.random() * 20);
  const rightAnswer = (currentQuestion) => currentQuestion % 2 === 0 ? 'yes' : 'no';
  templGame(rule, question, rightAnswer);
};

