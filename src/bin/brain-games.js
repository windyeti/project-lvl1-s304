#!/usr/bin/env node

import question from '..';

console.log('Welcome to the Brain Games!');
const response = question();
console.log(`Hello, ${response}`);