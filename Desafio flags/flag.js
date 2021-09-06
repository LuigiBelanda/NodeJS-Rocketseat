const getFlag = require('./fun');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`);