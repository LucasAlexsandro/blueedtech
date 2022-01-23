//Fazendo o require do prompt
const prompt = require("prompt-sync")();

// INICIANDO A HISTÓRIA

console.log();
console.log(`
    ################ SINOPSE ####################
    #  Um astronalta que viajou para o espaço   #
    #  em busca de um novo planeta habitável    #
    #  para a população da terra                #
    ############################################`
);
console.log();

// DEFININDO O PERSONAGEM - E SUAS VERIFICAÇÕES

let nomePersonagem = prompt("Digite o nome do personagem: ");

while(nomePersonagem.length < 3){
    console.log("!ALERTA! - Você não informou um nome válido, insira corretamente os dados!");
    nomePersonagem = prompt("Digite o nome do personagem: ");
}

let idadePersonagem = +prompt("Digite a idade do personagem: ");

while(idadePersonagem < 18){
    console.log("!ALERTA! - Você não informou uma idade válida para a missão, insira corretamente os dados!");
    idadePersonagem = +prompt("Digite a idade do personagem: ");
}


console.log();
console.log();

// INFORMANDO OBJETIVOS

console.log(`
        ################ INTRODUÇÃO #####################
        Olá ${nomePersonagem}, seja bem vindo a sua hitória!!!
`)
console.log(`
        A terra está passando por vários eventos naturais e a escassez de comida está muito grande \n
        Precisaremos de sua ajuda para uma missão espacial em busca de um novo planeta \n
        que seja habitável para os humanos
`);

console.log();
console.log();


// CRIANDO PERGUNTAS

let pergunta1 = prompt("A decolagem da nave foi bem sucedida? ");
console.log();
let pergunta2 = prompt("A nave conseguiu se estabilizar no espaço? ");
console.log();
let pergunta3 = prompt("Houve um problema sistemico na nave e você precisou pilotar manualmente, você conseguiu realizar a pilotagem? ");
console.log();
let pergunta4 = prompt("Conseguiu achar um planeta hábitavel? ");
console.log();
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
console.log(`Você completou ${contadorSim} objetivos da missão`);
console.log(`Você não completou ${contadorNao} objetivos da missão`);
console.log();

//Exibindo informação final de acordo com a resposta informada

if (contadorSim === 0) {
    console.log("Você falhou miseravelmente.");
}
if (contadorSim === 1 || contadorSim === 2) {
    console.log("Você falha, mas ainda consegue fugir da situação.");
}
if (contadorSim === 3) {
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
}
if (contadorSim === 4) {
    console.log("Depois de muito esforço você conquista seu objetivo de chegar ao planeta, mas não transmitiu a mensagem para a terra");
}
if (contadorSim === 5) {
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
}