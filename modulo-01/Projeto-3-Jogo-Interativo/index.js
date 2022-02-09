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

    JOGADOR QUE RECEBE DINHEIRO AO MATAR MONSTROS

*/

console.clear();
console.log();
const prompt = require("prompt-sync")();

/*============================== DEFININDO INICIO DO CODIGO =====================================*/

// MENU INICIAL

// console.log();

// console.log("############ MENU INICIAL #############");
// console.log("Digite sua escolha");
// console.log("[1] - COMEÇAR UM NOVO JOGO");
// console.log("[2] - SAIR DO JOGO");
// console.log("#######################################");
// let escolhaMenu = +prompt("Digite sua escolha: ");;


// for(let vidas; vidas < totalVidas)


// SELECIONE A DIFICULDADE DO JOGO


let personagem = {
    nome: function getNome(nomePersonagem) {
        return this.nome;
    },
    dificuldade: function (niveisDificuldade) {
        if (niveisDificuldade == 1) {
            console.log()
        } else if (niveisDificuldade == 2) {
            console.log()
        } else if (niveisDificuldade == 3) {
            console.log()
        }
    },
    idade: "",
    forca: function(forcaPersonagem){
        if(this.dificuldade == 1){
            this.forca == 80;
        } else if (this.dificuldade == 2){
            this.forca == 90;
        } else if (this.dificuldade == 3){
            this.forca == 100
        }
    },
    level: "",
    cash: "",
    fome: "",
    xp: "",
    vida: "",
    status: ""
}

personagem.nome = prompt("Digite o nome do personagem: ");
console.log(personagem.nome)

personagem.dificuldade = ['easy', 'hard', 'veryhard'];

// console.log("Digite sua escolha");
// console.log("[1] - EASY");
// console.log("[2] - HARD");
// console.log("[3] - VERYHARD");
// let dificuldade = +prompt();

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