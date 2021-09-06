# Versões das dependências

Exemplo de como ficam as dependências no package.json:
```json 
"dependencies": {
    "cfonts": "^2.9.3"
}
```

2 = major /
9 = minor /
3 = patch 

- ^2.9.3 = ^ (atualiza apenas o minor e patch)
```json 
"dependencies": {
    "cfonts": "^2.9.3"
}
```
- ~2.9.3 = ~ (atualiza só o patch)
```json 
"dependencies": {
    "cfonts": "~2.9.3"
}
```
- 2.9.3 = (mantém a versão)
```json 
"dependencies": {
    "cfonts": "2.9.3"
}
```
- Com o '*' ela atualiza todas as partes
```json 
"dependencies": {
    "cfonts": "*"
}
```

# Comandos 

- Com o comando `npm outdated` podemos ver qual a versão das dependências que estamos usando, qual a mais procurada e a mais recente;

- Com o comando `npm upgrade` atualizamos nossas dependências

- Com o comando `npm i nome_do_pacote@latest` pegamos a última versão do pacote que queremos

- Com o comando `npm i nome_do_pacote@x.x.x` (x.x.x = versão que queremos) pegamos a versão que queremos do pacote

- Com o comando `npm uninstall nome_do_pacote` desinstalamos qualquer pacote