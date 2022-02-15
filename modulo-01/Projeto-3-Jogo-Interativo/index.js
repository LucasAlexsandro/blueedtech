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

let nomePersonagem = prompt('Qual o nome do seu Personagem? ');
let idadePersonagem = +prompt('Qual a idade do seu Personagem? ');

// DEFININDO INIMIGOS
let monstros = {

    //Monstro  de dano Baixo
    monstroFacil: {
        nome: 'Grifo',
        level: 1,
        dano: 10,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

    // Monstro de Dano Médio
    monstroMedio: {
        nome: 'Estrige',
        level: 3,
        dano: 20,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },
    // Monstro de Maior Dano
    monstroDificil: {
        nome: 'Monster 3',
        level: 5,
        dano: 30,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    }
}

// DEFININDO O PERSONAGEM

let personagem = {
    nome: nomePersonagem,
    idade: idadePersonagem,
    dano: 30,
    level: 0,
    cash: 0,
    fome: 0,
    espada: "Luz das Cinzas",
    missoesFinalizadas: 0,
    reinoInicial: "TEMERIA",
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
    // Retira a vida do personagem
    retiraVida: function (valor) {
        if (this.vida < 1) {
            console.log("Você Morreu!");
        } else {
            this.vida = this.vida - valor;
        }
    },
    // Aumenta a Vida
    aumentaVida: function (valor) {
        if (this.vida > 100) {
            console.log("Sua vida está totalmente cheia!");
        } else {
            this.vida = this.vida + valor;
        }
    },
    // Escolhe o reino
    escolhaReino: function (valor) {
        this.reinoInicial = valor;
    },
    //Aumenta a Fome
    aumentaFome: function () {
        this.fome = 20;

        if (this.fome > 100) {
            console.log("Você morreu, Fim de Jogo!!!!")
        }
    },
    //Aumenta o Dano do Personagem
    aumentaDano: function (valor) {
        this.dano = this.dano = valor;

        if (this.dano >= 100) {
            console.log("Seu dano está no máximo!")
        }
    },
    // Diminui a FOME
    diminuiFome: function (valor) {
        this.fome - valor

        if (this.fome < 0) {
            console.log("Você não está com fome!");
        }
    }
}

// Definindo Mercado

let mercado = [
    {espada: 'Em chamas', dano: function(){
        personagem.dano = +20;
    }},
    {espada: 'Endemoniada', dano: function(){
        personagem.dano = +25;
    }},
    {espada: 'Massacre', dano: function(){
        personagem.dano = +30;
    }}  
]

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
        console.log("O horário do jogo é: " + tempoJogo.horario + ' Hrs');
        console.log("O dia do jogo é: " + tempoJogo.dia);
    }

}

// FUNCTIONS

// DEFININDO MISSÕES

function missao1() {
    console.log("************** MISSÃO INICIAL **************")
    console.log();
    console.log(`Você recebeu a missão de matar um monstro que está atormentando a vila no reino de ${personagem.reino}`);
    console.log();
    console.log(`O monstro ${monstros.monstroFacil.nome} está rodeando você!`);
    console.log(`Ele faz um primeiro ataque, mas você acaba esquivando...`);
    console.log("Deseja atacar? [SIM] - [NÃO]")
    let ataque = prompt("---> ");

    if(ataque == 'sim'){
        for(let i; monstros.monstroFacil.vida < 0; personagem.dano++){
        console.log(`A vida do monstro é: ${monstros.monstroFacil.vida}`);
    }
    }

}

function missao2(valor) {

}

function missao3(valor) {

}

function missao4(valor) {

}

function missao5(valor) {

}

// INICIANDO O GAME


inicioJogo = true;
while (inicioJogo == true) {
    // INICIANDO TESTOS INICIAIS DO JOGO

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
    console.log();

    // DEFININDO MISSÃO INICIAL DO REINO ESCOLHIDO

    confirmaAcao = 'n';

    do {
        console.log(`
          Olá ${personagem.nome} Bem vindo ao Reino de ${personagem.reinoInicial}
          --------------------------------------------
          Você recebeu uma missão inicial do reino para
          mostrar o seu valor! 
          ---------------------------------------------
      `)
        tempoJogo.informaTempo();

        confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")

    } while (confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");

    console.log();
    console.clear();

    missao1();
    tempoJogo.alteraTempo(10);

    // JORNADA ATÉ OUTRA CIDADE
    console.log("Você está a caminho da cidade mais proxima para encontrar novas missões....")
    tempoJogo.alteraTempo(20);

    // SEGUNDA MISSÃO - CASO O JOGADOR DECIDA ACEITAR

    // TERCEIRA MISSÃO QUE VEM AO JOGADOR ACEITAR A SEGUNDA MISSÃO - SÓ APARECE CASO ELE ACEITE A SEGUNDA

    // QUARTA MISSÃO DEPOIS DE UMA LONGA JORNADA

    console.log("Você encontrou um mercador no caminho, deseja comprar uma espada mais forte?");
    let mercador = prompt("sim ou nao");

    if(mercador == 'sim'){
        for(let i of mercado){
            console.log(i);
        }
    }


    // PERGUNTANDO SE O JOGADOR DESEJA JOGAR NOVAMENTE!;
   
    
}