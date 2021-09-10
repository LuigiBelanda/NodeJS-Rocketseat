const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
    // output: O que eu aprendi hoje?
};

ask();

const answers = []

// sempre que escrevermos algo no console e dermos enter ele vai pegar oq escrevemos
// e trazer como output, o processo continua rodando alias.
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    // caso o número de respostas seja menor que o número de questões pegamos a proxíma pergunta até terminar nosso array
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit();
    }
});