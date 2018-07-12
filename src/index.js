import readlineSync from 'readline-sync';

export default () => {
    const response = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${response}`);
}
