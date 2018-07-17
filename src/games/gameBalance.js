import { cons } from 'hexlet-pairs';

import templGame from '../templGame';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';

const changeArrNum = (arr) => {
  let max = arr[arr.length - 1];
  let maxInd = 0;
  let min = arr[0];
  let minInd = 0;
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    if (max < arr[i]) {
      max = arr[i];
      maxInd = i;
    }
    console.log('max', max);
  }
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
      minInd = i;
    }
    console.log('min', min);
  }
  console.log('TYPEOF', typeof arr[maxInd]);

  const newArr = [].slice.call(arr);
  newArr.splice(maxInd, 1, arr[maxInd] - 1);
  newArr.splice(minInd, 1, arr[minInd] + 1);

  console.log('arr[maxInd]', newArr[maxInd], maxInd);
  console.log('arr[minInd]', newArr[minInd], minInd);
  return newArr;
};

const isOne = arr => Math.max(...arr) - Math.min(...arr) === 1;

const getBalance = (num) => {
  let arrNum = num.toString().split('').map(Number);
  console.log('перед while', arrNum);
  while (!isOne(arrNum)) {
    arrNum = changeArrNum(arrNum);
    console.log('внутри while', arrNum);
  }
  console.log('после while', arrNum.sort().join(''));
  return arrNum.sort().join('');
};

const question = () => {
  const randomNumber = getRandomNumber(10000);
  // console.log('randomNumber', randomNumber);
  const num = getBalance(randomNumber);
  return cons(randomNumber.toString(), num);
};

export default () => templGame(rule, question);
