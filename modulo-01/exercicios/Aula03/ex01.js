const prompt = require("prompt-sync")();

// Maior número

const num1 = +prompt('Digite o primeiro número: ');
const num2 = +prompt('Digite o segundo numero: ');

if (num1 > num2) {
    console.log(`Valor ${num1} é maior que ${num2}`);
} else if (num2 > num1) {
    console.log(`Valor ${num2} é maior que ${num1}`);
} else {
    console.log('Os números são iguais!');
}