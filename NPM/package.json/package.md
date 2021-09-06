# O que é o arquivo package.json

1 - É um arquivo no formato `JSON - JavaScript Object Notation`;

Ex: 
```json
{
  "name": "nodejs-rocketseat",
  "version": "1.0.0",
  "description": "Aprendendo node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/LuigiBelanda/NodeJS-Rocketseat.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/LuigiBelanda/NodeJS-Rocketseat/issues"
  },
  "homepage": "https://github.com/LuigiBelanda/NodeJS-Rocketseat#readme"
}
```

2 - Neste arquivo temos os principais detalhes do nosso projeto/pacote (name, version, description etc);