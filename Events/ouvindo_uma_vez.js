const { EventEmitter } = require('events');

const ev = new EventEmitter();

// com o once no lugar do on ouvimos o evento uma vez só
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message);
}); 

ev.emit('saySomething', "Luigi"); 
ev.emit('saySomething', "Luigi22"); 
ev.emit('saySomething', "Luigi33"); 

/*

Output:
Eu ouvi você:  Luigi

*/