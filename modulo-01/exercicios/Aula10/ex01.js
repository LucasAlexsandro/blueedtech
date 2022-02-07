const prompt = require("prompt-sync")();

let lista = [2, 80, 15, 3, 50, 419];
let maior = 0;

for (let i of lista){
    if(i > maior){
        maior = i;
    }
}

console.log(maior);