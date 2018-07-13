import welcome from './welcome';

export default (message = '', game) => {
  const name = welcome(message);
  if (game) {
    if (game()) {
      console.log(`Congratulations,  ${name}!`)
    } else {
      console.log(`Let's try again, ${name}`)
    }
  }
};
