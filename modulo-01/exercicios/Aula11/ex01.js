const prompt = require("prompt-sync")();

// function va_tomar_banho(){
//     console.log("Tomando banho....");
// }

// function verifica_sujeira(){
//     let sujo = prompt("Você está sujo? ")
//     if (sujo == 's'){
//         va_tomar_banho();
//     }
// }

// let pessoas = +prompt("Quantas pessoas estão em casa? ");

// for(let i = 0; i < pessoas; i++){
//     verifica_sujeira();
// }


function saudacao(ano, nome = 'Aluno(a)'){
	let idade = 2022 - ano;
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade ' + idade);
    } else {
        console.log('Você é menor de idade ' + idade);
    }
    console.log();
}

let nome = prompt('Qual o seu nome? ');
let nasc = prompt('Qual o seu ano de nascimento? ')

saudacao(nasc);