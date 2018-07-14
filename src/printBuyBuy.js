export default (result, name) => {
  if (result) {
    console.log(`Congratulations,  ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};
