const prompt = require("prompt-sync")();
console.clear();
console.log();

// SORTEANDO UM ITEM ALEATORIO DO OBJETO, PODE SER USADO PARA DEFINIR O INIMIGO
// let noticia = [
//     {
//         importancia: 1, 
//         noticia: 'O lucas acordou'
//     },
//     {
//         importancia: 2, 
//         noticia: 'Uma guerra aconteceu'
//     },
//     {
//         importancia: 3, 
//         noticia: 'O cristiano afundou a coca'
//     }
// ];

// let aleatorio = Math.trunc(Math.random() * 2);
// let noticia_atual = noticia[aleatorio]

// console.log(noticia_atual.noticia);
// if(noticia_atual.importancia == 1){
//     console.log("Não acontece muita coisa");
// } else if(noticia_atual.importancia == 2){
//     console.log("Uma zika");
// } else if(noticia_atual.importancia == 3){
//     console.log('Meu deus');
// }


// let alunos = [
//     {
//         nome: 'Lucas',
//         idade: 22,
//         cidade: 'Mossoró'
//     },
//     {
//         nome: 'Andreza',
//         idade: 20,
//         cidade: 'CG'
//     }
// ];



const pessoa = {
    nome: 'Lucas',
    idade: 22,
    cidade: 'Mossoró'
};

pessoa.idade = 23;
pessoa.emprego = 'Desenvolvedor';
pessoa.interesses = ['Desenvolvimento', 'Software', 'Netflix', 'Google'];

//ITERANDO SOMENTE SOBRE A PROPRIEDADE
for(let i of pessoa.interesses){
    console.log(i);
}

console.log(pessoa);

