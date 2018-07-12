#!/usr/bin/env node

import { getName } from '../getName';

const name = getName();

console.log(`Вы ввели имя: ${name}`);