/*
    Faça um Programa que leia 20 números
    inteiros e armazene-os num array. Armazene os 
    números pares no array PAR e os números IMPARES
     no array IMPAR. Imprima os três vetores.
*/

const prompt = require("prompt-sync")();


let num;
let todos = [];
let pares = [];
let impares = [];
let contador = 1;

while (contador < 20){
    num = +prompt(`Digite o ${contador}º número: `);
    todos.push(num);
    contador++;
    if (num % 2 == 0){
        pares.push(num);
    } else {
        impares.push(num);
    }
}

console.log('Todos os numeros: ');
console.log(todos)
console.log('Pares: ');
console.log(pares);
console.log('Impares: ');
console.log(impares);
