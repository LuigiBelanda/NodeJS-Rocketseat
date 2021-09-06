console.log(process);

console.log("=========================");
console.log("=========================");

// lista de argumentos
console.log(process.argv);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}`);
// Input: node Pegando\ infos\ de\ processos/process.js Luigi Belanda 
/*
Output:

[
  '/usr/local/bin/node',
  '/home/luigi/Programing/NodeJS-Rocketseat/Pegando infos de processos/process.js',
  'Luigi',
  'Belanda'
]

Seu nome é Luigi Belanda
*/