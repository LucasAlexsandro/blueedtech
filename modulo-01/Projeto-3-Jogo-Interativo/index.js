// FUNÇÕES DO JOGO
/* 
    - LOJA ONDE O PERSONAGEM PODE COMPRAR ARMAS MAIS FORTES
    - SISTEMA DE COMBATE
    - SISTEMA DE LEVEL
    - CADA ESCOLHA VAI AFETAR EM ALGO
    - MISTURA DE THE WITCHER COM ALGO
    - SISTEMA DE DIAS - ok
    - SISTEMA DE MENU INICIAL - ok
    - MODO DE JOGO [EASY - HARD - VERY HARD]
    // DEFINICAR UMA MISSÃO INICIAL PARA GANHAR COINS - ok
*/

console.clear();
console.log();
const prompt = require("prompt-sync")();

// /*============================== DEFININDO INICIO DO CODIGO =====================================*/

// MENU INICIAL

console.log();

// console.log("############ MENU INICIAL #############");
// console.log("Digite sua escolha");
// console.log("[1] - COMEÇAR UM NOVO JOGO");
// console.log("[2] - SAIR DO JOGO");
// console.log("#######################################");
// let escolhaMenu = +prompt("Digite sua escolha: ");

// while(escolhaMenu != 1 && escolhaMenu != 2){
//     console.log("############ MENU INICIAL #############");
//     console.log("Digite sua escolha");
//     console.log("[1] - COMEÇAR UM NOVO JOGO");
//     console.log("[2] - SAIR DO JOGO");
//     console.log("#######################################");
//     escolhaMenu = +prompt("Digite sua escolha: ");

//     if(escolhaMenu == 2){
//         break;
//     }
// }


// IDEIA PARA DEFINIÇÃO DE INIMIGOS DO PROJETO
let monstros = {
    monstroFacil: {
        nome: 'Monster',
        level: 1,
        dano: 10,
        frase: "",
        vida: 100
    },
    monstroMedio: {
        nome: 'Monster 2',
        level: 1,
        dano: 20,
        frase: "",
        vida: 100
    },
    monstroDificil: {
        nome: 'Monster 3',
        level: 1,
        dano: 30,
        frase: "",
        vida: 100
    }
}

// DEFININDO O PERSONAGEM

let personagem = {
    nome: prompt('Qual o nome do seu Personagem? '),
    idade: prompt('Qual a idade do seu personagem? '),
    dano: 20,
    level: 0,
    cash: 0,
    fome: 0,
    missoesFinalizadas: 0,
    reinoInicial: "",
    xp: 0,
    vida: 100,
    status: function () {
        console.log(`#################### STATUS ####################`);
        console.log(`O nome do seu personagem é: ${this.nome}`);
        console.log(`A idade é: ${this.idade}`);
        console.log(`O level é: ${this.level}`);
        console.log(`A força: ${this.forca}`);
        console.log(`Quantidade de Cash do personagem: ${this.cash}`);
        console.log(`Quantidade de XP: ${this.xp}`);
        console.log(`################################################`);
    },
    retiraVida: function (valor) {
        this.vida = this.vida - valor;
    },
    aumentaVida: function (valor) {
        this.vida = this.vida + valor;
    },
    escolhaReino: function (valor) {
        this.reinoInicial = valor;
    },
    dificuldade: function (reinoInicial) {
        if (this.dificuldade == 1) {
            monstros.monstroFacil;
        } else if (this.dificuldade == 2) {
            monstros.monstroMedio;
        } else if (this.dificuldade == 3) {
            monstros.monstroDificil;
        }
    },
    aumentaFome: function(){
        this.fome = 20;

        if(this.fome > 100){
            console.log("Você morreu, Fim de Jogo!!!!")
        }
    },
    diminuiFome: function(valor){
        this.fome - valor

        if(this.fome < 0 ){
            console.log("Você não está com fome!");
        }
    }
}

// DEFININDO O TEMPO INICIAL DO JOGO
let tempoJogo = {
    horario: 7,
    dia: 1,

    alteraTempo: function (valor) {
        this.horario = this.horario + valor;

        if (this.horario >= 24) {
            this.resto = this.horario - 24;
            this.horario = 0;
            this.dia++;
        }
    },
    informaTempo: function () {
        console.log("O horário do jogo é: " + tempoJogo.horario);
        console.log("O dia do jogo é: " + tempoJogo.dia);
    }

}

// INICIANDO HISTÓRIA DO GAME

let confirmaAcao = 'n';

do {
    console.log(`
    Olá ${personagem.nome} bem vindo ao game RPG
    --------------------------------------------
    O objetivo do game é você realizar missões para 
    os habitantes em algum reino de sua escolha, 
    lembre-se que dependendo do reino o seu ganho
    ao concluir uma missão pode ser maior, mas com
    certeza os desafios também serão!
`)

    confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")

} while (confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");

console.clear();

// DEFININDO CIDADE DO JOGO

console.log(`#################### ESCOLHA O REINO ####################`);
console.log(`[1] - REINO 1`);
console.log(`[2] - REINO 2`);
console.log(`[3] - REINO 3`);
console.log(`################################################`);
let escolhaReino = +prompt('---> ');
personagem.escolhaReino(escolhaReino);

let reinoEscolhido = personagem.reinoInicial;
console.log("O Reino inicial é: " + personagem.reinoInicial);

// DEFININDO MISSÃO INICIAL DO REINO ESCOLHIDO

confirmaAcao = 'n';

do {
    console.log(`
    Olá ${personagem.nome} Bem vindo ao Reino de ${personagem.reinoInicial}
    --------------------------------------------
    Você recebeu uma missão inicial do reino para
    mostrar o seu valor! Mate o Monstro...
    ---------------------------------------------
    O horário agora é: ${tempoJogo.horario}
    O dia agora é: ${tempoJogo.dia}
`)

    confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")

} while (confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");


let missao1 = function () {
    if (personagem.reinoInicial == 0) {
        console.log('teste reino 1');
    } else if (personagem.reinoInicial == 1) {
        console.log('teste reino 2');
    } else if (personagem.reinoInicial == 2) {
        console.log('teste reino 3');
    }
}

function reino1(){

}

function reino2(){
    
}

function reino3(){
    
}
















// do {
//     console.log(`
//     ${personagem.nome} Você chegou a um mercador
//     --------------------------------------------

// `)
//     confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")
// }while(confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");