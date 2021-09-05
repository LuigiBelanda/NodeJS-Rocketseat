// módulos nativos

// No Node. js, um module é uma coleção de funções e objetos do JavaScript que podem ser utilizados por aplicativos externos.
const path = require('path');

console.log(path.basename(__filename));
// output: require.js

console.log(path.basename("/Users//starter/docs.js"));
// output: docs.js



// meus módulos
const myModule = require('../Criando módulos/exports');

console.log(myModule);