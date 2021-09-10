const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0 ) => {
    process.stdout.write(questions[index] + "\n\n\n")
    // output: O que eu aprendi hoje?
};

ask();

// sempre que escrevermos algo no console e dermos enter ele vai pegar oq escrevemos
// e trazer como output, o processo continua rodando alias.
process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n');
    process.exit();
    // colocamos o process.exit() para encerrar o processo, se não ele roda até darmos CTRL + C
});