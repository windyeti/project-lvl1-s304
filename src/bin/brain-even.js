#!/usr/bin/env node

import getName from '../getName';
import threetry from '../threetry';

const name = getName();

console.log('Answer "yes" if number even otherwise answer "no".');

threetry(name);
