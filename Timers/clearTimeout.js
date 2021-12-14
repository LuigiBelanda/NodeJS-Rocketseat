// clearTimeout cancela um setTimeout
const timeOut = 3000;
const finished = () => console.log('Done!');

/*
console.log(setTimeout(finished, timeOut));

Output:

Timeout {
  _idleTimeout: 3000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 139,
  _onTimeout: [Function: finished],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}

Done!
*/

let timer = setTimeout(finished, timeOut);
clearTimeout(timer); // tira o timeOut de 3000 milissegundos da função
