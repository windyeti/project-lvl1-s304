import whatYourName from '.';

export default (message = '') => {
  console.log('Welcome to the Brain Games!');
  if (message) console.log(message);
  return whatYourName();
};
