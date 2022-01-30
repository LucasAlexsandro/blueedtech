const prompt = require("prompt-sync")();
console.clear();

// Iniciando o jogo
console.log();
console.log(`=====================================`);
console.log("     SEJA BEM VINDO AO JOKENPÔ       ")
console.log(`=====================================`);
console.log();

let continuar = prompt("Deseja começar o jogo? Digite: S ou N  ")

while (continuar == 'S' || continuar == 's') {

    let elementos = ['PEDRA', 'PAPEL', 'TESOURA'];
    let pontosJogador = 0;
    let pontosPC = 0;
    let jogoEmpatado = 0;

    // Validação de nome de usuário do PC E DO HUMANO
    let nomeJogador = prompt("Digite o nome do jogador: ");

    while (nomeJogador.length < 2) {
        console.log("![ALERTA]! Nome de jogador não é válido, insira novamente! ");
        jogador = prompt("Digite o nome do jogador: ");
    }

    let nomeGerado = [
        'Marvin',
        'Ciborgue',
        'R2-D2',
        'RoboCop',
        'J.A.R.V.I.S',
        'Wall-e',
        'Bumblebee',
        'Baymax'
    ];

    let nomePC = Math.trunc(Math.random() * 8)

    // DEFININDO QUANTIDADE DE RODADAS

    let rodadas = +prompt("Digite a quantidade de rodadas que deseja jogar! ");
    let rodadaFinal = +prompt("Digite a quantidade de pontos: ");

    for (rodadas = 0; rodadas <= rodadaFinal; rodadas++) {

        // Definindo resposta do Jogador
        console.log(`=====================================`);
        console.log(`Olá ${nomeJogador} digite a sua jogada`)
        let escolhaJogador = prompt(`Escolha entre: PEDRA - PAPEL - TESOURA: `).toLocaleUpperCase();
        console.log(`=====================================`);
        console.log();


        // Validação de escolhas do jogador
        while ((escolhaJogador != elementos[0]) && (escolhaJogador != elementos[1]) && (escolhaJogador != elementos[2])) {
            console.log();
            console.log(`=====================================`);
            console.log(`ERRO, Você não fez a escolha de acordo com as regras!`)
            escolhaJogador = prompt(`Escolha entre: PEDRA - PAPEL - TESOURA: `).toLocaleUpperCase();
            console.log(`=====================================`);
            console.log();
        }

        let escolhaMaquina = Math.trunc(Math.random() * 3)

        // Verificação Escolha Jogador

        if (escolhaJogador == elementos[0]) {
            console.log(`O jogador ${nomeJogador} escolheu: ${elementos[0]}`)
        } else if (escolhaJogador == elementos[1]) {
            console.log(`O jogador ${nomeJogador} escolheu: ${elementos[1]}`)
        } else if (escolhaJogador == elementos[2]) {
            console.log(`O jogador ${nomeJogador} escolheu: ${elementos[2]}`)
        }

        // Verificação Escolha PC

        if (escolhaMaquina == 0) {
            console.log(`O Jogador ${nomeGerado[nomePC]} escolheu ${elementos[0]}`)
        } else if (escolhaMaquina == 1) {
            console.log(`O Jogador ${nomeGerado[nomePC]} escolheu ${elementos[1]}`)
        } else if (escolhaMaquina == 2) {
            console.log(`O Jogador ${nomeGerado[nomePC]} escolheu ${elementos[2]}`)
        }

        // Validações de Pontos

        if(escolhaJogador == escolhaMaquina){
            console.log(`O jogador ${nomeJogador} escolheu ${escolhaJogador}\n
                         E o jogador ${nomePC} escolheu ${escolhaMaquina}`);
            console.log('O jogo está empatado!');
        }

    }

    console.log("###########################################")
    console.log();
    continuar = prompt("Deseja jogar novamente? 'S' ou 'N': ");
    if (continuar == 'n' || continuar == 'nao' || continuar == 'não') {
        console.log("Obrigado por jogar!")
    }
}