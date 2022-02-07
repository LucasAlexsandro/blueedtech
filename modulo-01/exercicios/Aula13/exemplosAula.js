const prompt = require("prompt-sync")();

// Ideia de acontecimento aleatório para o jogo
// function chuva(){
//     console.log("Está chovendo!");
// }

// let escolha = +prompt("Escolha sua ação - 1 ir trabalhar: ");
// let aleatorio = 0;

// while(true){
//     if(escolha == 1){
//         console.log('Você foi trabalhar');
//         aleatorio = Math.trunc(Math.random() * 100);
//         console.log(aleatorio);
//         if(aleatorio <= 10){
//             chuva();
//         }
//         escolha = +prompt("Escolha sua ação - 1 ir trabalhar: ");
//     }else{
//         break;
//     }
// }

// return 

// function calculaIdade(ano){
//     let idade = 2022 - ano;
//     if(idade >= 2000){
//         console.log("Achamos o Highlander!!!");
//         let dados = [];
//         let nome = prompt("Digite seu nome: ");
//         dados.push(nome);
//         let idade = prompt("Digite sua idade: ");
//         dados.push(idade);
//         let cidade = prompt("Digite sua cidade: ");
//         dados.push(cidade);
//         let altura = +prompt("Digite sua altura: ");
//         dados.push(altura);

//         return dados;
//     } else if (idade >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }

// function highlander(ano){
//     let idade = 2022 - ano;
//     if(idade >= 2000){
//         console.log("Achamos o Highlander!!!");
//         let dados = [];
//         let nome = prompt("Digite seu nome: ");
//         dados.push(nome);
//         let idade = prompt("Digite sua idade: ");
//         dados.push(idade);
//         let cidade = prompt("Digite sua cidade: ");
//         dados.push(cidade);
//         let altura = +prompt("Digite sua altura: ");
//         dados.push(altura);

//         return dados;
//     }
// }

// let year = +prompt("Digite seu ano de nascimento: ")
// // let age = calculaIdade(year);

// let verifica = highlander(year);
// console.log(verifica);


//RELOGIO


// let hora = 6;
// let minuto = 0;
// let tempo = 0;

// while(hora < 10){
//     console.log(`São ${hora}:${minuto}`);
//     let tempo = +prompt("Quantos minutos quer add: ");
//     minuto += tempo;
//     if(minuto >= 60){
//         minuto = minuto - 60;
//         hora++;
//     }
// }