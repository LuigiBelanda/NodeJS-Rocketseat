const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.emit('saySomething'); // utilizamos o .emit para emitir eventos
ev.emit('saySomething');

// Nos casos acima não acontece nada pq não estamos ouvindo esses eventos