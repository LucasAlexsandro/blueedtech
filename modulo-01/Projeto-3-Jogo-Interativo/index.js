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
*/

/* HISTORIA DO JOGO



*/

console.clear();
console.log();
const prompt = require("prompt-sync")();

/*============================== DEFININDO INICIO DO CODIGO =====================================*/

// IDEIA PARA DEFINIÇÃO DE INIMIGOS DO PROJETO
let inimigos = [
    {
        nome: 'Monster',
        level: 1,
        dano: 10,
        frase: ""
    },
    {
        nome: 'Monster 2',
        level: 3,
        dano: 20,
        frase: ""
    },
    {
        nome: 'Monster 3',
        level: 4,
        dano: 30,
        frase: ""
    }
];

function menuInicial()
{
    console.log("############ MENU INICIAL #############");
    console.log();
    console.log("[1] - COMEÇAR UM NOVO JOGO");
    console.log("[2] - RESETAR O JOGO");
    console.log("[3] - SAIR DO JOGO");
    console.log();
    console.log("#######################################");
}

let dificuldade = ['easy', 'hard', 'veryhard'];

function criarPersonagem()
{
    console.log("############ MENU INICIAL #############");
    console.log();
    console.log("[1] - CRIAR PERSONAGEM");
    console.log("[2] - VOLTAR AO MENU");
    console.log();
    console.log("#######################################");
}


let level = ['noob', 'expert', 'mestre']


// let personagem = {
//     nome,
//     idade,
//     forca,
//     level,
//     moedas,
//     fome,
//     xp
// }