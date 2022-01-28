const prompt = require("prompt-sync")();
console.clear();

console.log(`=====================================`);
console.log("SEJA BEM VINDO AO JOKENPÔ")
console.log(`=====================================`);
console.log();

let jogador = prompt("Digite o nome do jogador: ");
let pontosJogador = 0;
let pontosPC = 0;
let jogoEmpatado = 0;
let rodadas = 0;
let elementos = ['PEDRA', 'PAPEL', 'TESOURA'];

// while (jogador.length < 2){
//     console.log("![ALERTA]! Nome de jogador não é válido, insira novamente! ");
//     jogador = prompt("Digite o nome do jogador: ");
// }



for (let i of elementos){
    console.log(i);
}


// let escolhaJogador = prompt(`\n[0] - PEDRA\n[1] - PAPEL\n[2] - TESOURA\n\nEscolha o número da jogada: `);



