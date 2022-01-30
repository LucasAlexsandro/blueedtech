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

    let itens = ['PEDRA', 'PAPEL', 'TESOURA'];
    let pontosJogador = 0;
    let pontosMaquina = 0;
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

    let nomeMaquina = Math.trunc(Math.random() * 8)

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
        while ((escolhaJogador != itens[0]) && (escolhaJogador != itens[1]) && (escolhaJogador != itens[2])) {
            console.log();
            console.log(`=====================================`);
            console.log(`ERRO, Você não fez a escolha de acordo com as regras!`)
            escolhaJogador = prompt(`Escolha entre: PEDRA - PAPEL - TESOURA: `).toLocaleUpperCase();
            console.log(`=====================================`);
            console.log();
        }

        let escolhaMaquina = Math.trunc(Math.random() * 3)

        // Verificação Escolha Jogador

        console.log(escolhaJogador);
        console.log(escolhaMaquina);

        //['PEDRA', 'PAPEL', 'TESOURA'];

        if (escolhaJogador == itens[0] && escolhaMaquina == 0) {
            console.log("Jogo empatado");
            jogoEmpatado++;
        } else if (escolhaJogador == itens[1] && escolhaMaquina == 1) {
            console.log("Jogo empatado");
            jogoEmpatado++;
        } else if (escolhaJogador == itens[2] && escolhaMaquina == 2) {
            console.log("Jogo empatado");
            jogoEmpatado++;
        }
        //['0 - PEDRA', '1 - PAPEL', '2 - TESOURA'];
        // Iniciando contagem sem ser empate
        else if (escolhaJogador == itens[0] && escolhaMaquina == 1) {
            console.log(`O jogador ${nomeMaquina} venceu a rodada!`)
            console.log(`O jogador ${nomeJogador} perdeu a rodada!`)
            pontosMaquina++;
        } else if (escolhaJogador == itens[1] == escolhaMaquina == 0) {
            console.log(`O jogador ${nomeJogador} venceu a rodada!`)
            console.log(`O jogador ${nomeMaquina} perdeu a rodada!`)
            pontosJogador++;
        } else if (escolhaJogador == itens[2] && escolhaMaquina == 1) {
            console.log(`O jogador ${nomeJogador} venceu a rodada!`)
            console.log(`O jogador ${nomeMaquina} perdeu a rodada!`)
            pontosJogador++;
        } else if (escolhaJogador == itens[1] && escolhaMaquina == 2) {
            console.log(`O jogador ${nomeMaquina} venceu a rodada!`)
            console.log(`O jogador ${nomeJogador} perdeu a rodada!`)
            pontosMaquina++;
        } else if (escolhaJogador == itens[2] && escolhaMaquina == 0){
            console.log(`O jogador ${nomeMaquina} venceu a rodada!`)
            console.log(`O jogador ${nomeJogador} perdeu a rodada!`)
            pontosMaquina++;
        }
        else if (escolhaJogador == itens[0] && escolhaMaquina == 2){
            console.log(`O jogador ${nomeJogador} venceu a rodada!`)
            console.log(`O jogador ${nomeMaquina} perdeu a rodada!`)
            pontosJogador++;
        }

    }

    console.log();
    console.log(`=====================================`);
    console.log("       RESULTADO FINAL DO JOGO       ")
    console.log(`=====================================`);
    console.log();
    if (pontosJogador > pontosMaquina) {
        console.log(`O jogador ${nomeJogador} venceu a partida com ${pontosJogador} pontos!`);
        console.log(`E o jogador ${nomeMaquina} perdeu com ${pontosMaquina} pontos!`);
    } else if (pontosMaquina > pontosJogador) {
        console.log(`O jogador ${nomeMaquina} venceu a partida com ${pontosMaquina} pontos!`);
        console.log(`E o jogador ${nomeJogador} perdeu com ${pontosJogador} pontos!`);
    } else if (pontosJogador == pontosMaquina) {
        console.log(`O jogador ${nomeJogador} e o jogador ${nomeMaquina} empataram com ${jogoEmpatado} pontos!`);
    }

    // DEFININDO SE DESEJA JOGAR NOVAMENTE!
    continuar = prompt("Deseja jogar novamente? 'S' ou 'N': ");
    if (continuar == 'n' || continuar == 'nao' || continuar == 'não') {
        console.log("Obrigado por jogar!")
    }
}