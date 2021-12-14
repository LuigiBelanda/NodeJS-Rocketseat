// setTimeout vai rodar uma função depois de x milissegundos

const timeOut = 3000;
const finished = () => console.log('Done!');

// no setTimeout passamos dois valores, a função que queremos executar e o tempo que vai demorar para ela ser executada
// note que a função foi passada como referência, ou seja, não como finished(), se não ela seria executada imediatamente
setTimeout(finished, timeOut);
/* 
node Timers/setTimeout.js

output: Done!
*/

// Podemos dizer que a função finished() é um callback, pois ela foi criada e após 3 segundos ela é executada
// um exemplo disso é que a linha abaixo será mostrada primeiro que a função acima
console.log('Mostrar');

/*
Output:

Mostrar
Done!
*/