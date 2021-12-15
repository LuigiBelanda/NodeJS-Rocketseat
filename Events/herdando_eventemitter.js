const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name; // aqui pegamos o nome que passamos para a função e colocamos na propriedade name do objeto
}

inherits(Character, EventEmitter); // aqui herdamos todas as funções do EventEmitter para o Character, com isso tornamos ele uma função construtora, mas com propriedades do EventEmitter

const chapolin = new Character('Chapolin');
console.log(chapolin); // Output: Character { name: 'Chapolin' }
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log('Oh! E agora, quem poderá me defender?');

chapolin.emit('help');