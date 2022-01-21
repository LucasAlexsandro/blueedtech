/*
    2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar”
    em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual
    foi o número escolhido pelo computador. O programa deverá escrever na tela se 
    ousuário venceu ou perdeu.
*/

const prompt = require("prompt-sync")();

console.log("##### JOGO DA ADIVINHAÇÃO #####");
let resposta = +prompt("Digite o número entre 0 e 10: ");

let numeroCorreto = Math.floor(Math.random() * 10);

if(resposta == numeroCorreto){
    console.log("################");
    console.log("# VOCÊ ACERTOU #");
    console.log("################");
}
else {
    console.log("#######################################")
    console.log("#          VOCÊ ERROU                 #")
    console.log("#######################################")
    console.log(`O NÚMERO CORRETO ERA ${numeroCorreto} #`)
    console.log("#######################################")
}