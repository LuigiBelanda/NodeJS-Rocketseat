console.log('Primeiro comando');
// node Primeiro\ arquivo\ e\ entendo\ globais/console.js

global.console.log('Segundo comando');
// console faz parte da var global do node

console.log(global);

console.log(__dirname);
// mostra o caminho pro dir que estamos, é também parte da var global do node