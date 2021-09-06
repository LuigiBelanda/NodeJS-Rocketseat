# Criando e rodando scripts

1 - para rodar scripts usamos no terminal o comando `npm run nome_do_script`

Ex: `npm run test`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

2 - Podemos mudar o nome do nosso script para start, com isso temos algumas diferenças: 1º não precisamos colocar o `run` no comando npm, apenas colocamos `npm start`

```json
"scripts": {
    "start": "node index.js"
},
```

No caso acima ainda estamos executando o arquivo index.js na raiz do projeto, o que nos trará como output o seguinte:

```
> nodejs-rocketseat@1.0.0 start /home/luigi/Programing/NodeJS-Rocketseat
> node index.js

Iniciando teste
```

Código que está no arquivo index.js:

```js
console.log('Iniciando teste');
```