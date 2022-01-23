
/*

    2- Faça um programa que leia e valide as seguintes informações:
    Nome: maior que 3 caracteres;
    Idade: entre 0 e 150;
    Salário: maior que zero;
    Estado Civil: 's', 'c', 'v', 'd';

*/

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
while(nome.length <= 3)
{
    console.log("Nome invalido, precisa ter mais de 3 caracteres");
    nome = prompt("Digite seu nome corretamente!");
}

let idade = prompt("Digite sua idade: ");
while(idade <= 0 || idade >= 150)
{
    console.log("Idade inválida")
    idade = +prompt("Digite sua idade corretamente!");
}

let salario = prompt("Digite seu Salário: ");
while(salario < 0)
{
    console.log("Salário invalido");
    salario = +prompt("Digite seu salário corretamente!");
}

let estado = prompt("Digite seu Estado: ").toLocaleLowerCase();
while(estado != 's' || estado != 'c' || estado != 'v');
{
    console.log("Estado inválido!");
    estado = prompt("Digite o estado corretamente!").toLocaleLowerCase();
}