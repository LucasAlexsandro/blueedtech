// FUNÇÕES DO JOGO
/* 
    - LOJA ONDE O PERSONAGEM PODE COMPRAR ARMAS MAIS FORTES
    - SISTEMA DE COMBATE
    - SISTEMA DE LEVEL
    - CADA ESCOLHA VAI AFETAR EM ALGO
    - MISTURA DE THE WITCHER COM ALGO
    - SISTEMA DE DIAS
    - SISTEMA DE MENU INICIAL
    - MODO DE JOGO [EASY - HARD - VERY HARD]
    // DEFINICAR UMA MISSÃO INICIAL PARA GANHAR COINS
*/

/* HISTORIA DO JOGO



*/

console.clear();
console.log();
const prompt = require("prompt-sync")();

/*============================== DEFININDO INICIO DO CODIGO =====================================*/

// MENU INICIAL

console.log();

console.log("############ MENU INICIAL #############");
console.log("Digite sua escolha");
console.log("[1] - COMEÇAR UM NOVO JOGO");
console.log("[2] - SAIR DO JOGO");
console.log("#######################################");
let escolhaMenu = +prompt("Digite sua escolha: ");;


// for(let vidas; vidas < totalVidas)


// SELECIONE A DIFICULDADE DO JOGO

// let niveisDificuldade = ['easy', 'hard', 'veryhard'];

// console.log("Digite sua escolha");
// console.log("[1] - EASY");
// console.log("[2] - HARD");
// console.log("[3] - VERYHARD");
// let dificuldade = +prompt();


let personagem = {
    nome: function(nomePersonagem){

    },
    idade:"",
    forca: "",
    level: "",
    moedas: "",
    fome: "",
    xp: "",
    vida: ""
}

// // IDEIA PARA DEFINIÇÃO DE INIMIGOS DO PROJETO
// let inimigos = [{
//         nome: 'Monster',
//         level: 1,
//         dano: 10,
//         frase: ""
//     },
//     {
//         nome: 'Monster 2',
//         level: 3,
//         dano: 20,
//         frase: ""
//     },
//     {
//         nome: 'Monster 3',
//         level: 4,
//         dano: 30,
//         frase: ""
//     }
// ];

// let level = ['noob', 'expert', 'mestre']


