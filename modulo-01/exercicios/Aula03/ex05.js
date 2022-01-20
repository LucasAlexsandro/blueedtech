
/*
    Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
    Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
    Se A = B + C , apresente a mensagem: TRIANGULO RETANGULO;
    Se A > B + C , apresente a mensagem: TRIANGULO OBTUSANGULO;
    Se A < B + C , apresente a mensagem: TRIANGULO ACUTANGULO;
    Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
    Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;
*/

const prompt = require("prompt-sync")();

let A = +prompt("Digite o valor paara o lado 1: ");
let B = +prompt("Digite o valor paara o lado 2: ");
let C = +prompt("Digite o valor paara o lado 3: ");
let X = 0;

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("------------------");
console.log();

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("------------------");
console.log();

if (B < C)
{
    X = B;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = C;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = X; 
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("------------------");
console.log();

if (A >= (B + C))
{
    console.log("NÃO FORMA TRIANGULO");
}
else
{
    if ( (A*A) == (B*B) + (C*C) )
    {
        console.log("TRIANGULO RETANGULO");
    }
    if ( (A*A) > (B*B) + (C*C) )
    {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if ( (A*A) < (B*B) + (C*C) )
    {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A == B && B == C)
    {
        console.log("TRIANGULO EQUILATERO");
    }
    if ((A == B && A != C) || (B == C && B != A))
    {
        console.log("TRIANGULO ISOSCELES")
    }
}


console.log();