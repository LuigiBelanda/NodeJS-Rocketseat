const { EventEmitter } = require('events');

const ev = new EventEmitter();

// aqui colocamos um observador em nosso evento, usamos como parâmetro o nome do evento queremos ouvir
// com isso usamos como argumento também uma função, onde passamos o que deve ser feito caso haja alguma coisa no evento
ev.on('saySomething', () => {
    console.log('Eu ouvi você (ouvindo eventos!)');
}); 

ev.emit('saySomething'); 

/*
Output:

Eu ouvi você (ouvindo eventos!)
*/

ev.on('saySomething2', (message) => {
    console.log('Eu ouvi você: ', message);
}); 

ev.emit('saySomething2', "vento]"); 
// a frase "[Passando dados para o evento]" é uma das coisas que estamos passando para o ev.on(), neste caso chamamos de message, que será usado na mensagem para o user