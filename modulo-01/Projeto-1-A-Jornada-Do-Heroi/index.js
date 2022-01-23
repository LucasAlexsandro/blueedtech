//Fazendo o require do prompt
const prompt = require("prompt-sync")();

//Iniciando a História

console.log();
console.log(`Um astronalta que viajou para o espaço em busca de um novo planeta habitável para a população da terra`);
console.log();

//Definindo o heroi

let nomeHeroi = prompt("Digite o nome do Herói: ");
let idadeHeroi = +prompt("Digite a idade do Herói: ");

console.log();
console.log();

//Informando Objetivo para o heroi

console.log(`
            Olá ${nomeHeroi}, seja bem vindo a sua hitória!!!
            `)
console.log(`
             A terra está passando por vários eventos naturais e a escassez de comida está muito grande \n
             Precisaremos de sua ajuda para uma missão espacial em busca de um novo planeta \n
             que seja habitável para os humanos
            `);


// CRIANDO PERGUNTAS

let pergunta1 = prompt("A decolagem da nave foi bem sucedida? ");
let pergunta2 = prompt("Houve um problema sistemico na nave e você precisou pilotar manualmente, você conseguiu realizar a pilotagem? ");
let pergunta3 = prompt("A decolagem da nave foi bem sucedida? ");
let pergunta4 = prompt("Conseguiu achar um planeta hábitavel? ");
let pergunta5 = prompt("Conseguiu transmitir a mensagem final informando se o planeta é habitável ou não? ");

let contadorSim = 0;
let contadorNao = 0;


// VALIDANDO RESPOSTAS

if (pergunta1 === 'sim') {
    contadorSim++;
} else {
    contadorNao++;
}
if (pergunta2 === 'sim') {
    contadorSim++;
} else {
    contadorNao++;
}
if (pergunta3 === 'sim') {
    contadorSim++;
} else {
    contadorNao++;
}
if (pergunta4 === 'sim') {
    contadorSim++;
} else {
    contadorNao++;
}
if (pergunta5 === 'sim') {
    contadorSim++;
} else {
    contadorNao++;
}

console.log();
console.log(`Você informou ${contadorSim} respostas SIM`);
console.log(`Você informou ${contadorNao} respostas NÃO`);
console.log();

//Exibindo informação final de acordo com a resposta informada

if (contadorSim == 0) {
    console.log("Você falhou miseravelmente.");
}
if (contadorSim == 1 || 2) {
    console.log("Você falha, mas ainda consegue fugir da situação.");
}
if (contadorSim == 3) {
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
}
if (contadorSim == 4) {
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
}
if (contadorSim == 5) {
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
} else {
    console.log("Opção inválida");
}