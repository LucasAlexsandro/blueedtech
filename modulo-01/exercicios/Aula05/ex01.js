
/*
    1 - Faça um programa que leia um nome de usuário 
    e a sua senha e não aceite a senha igual ao 
    nome do usuário, mostrando uma mensagem de erro 
    e voltando a pedir as informações.
*/

const prompt = require("prompt-sync")();


console.log("Digite o nome do usuario: ");
let nomeUsuario = prompt()
console.log("Digite a senha do usuario: ");
let senhaUsuario = prompt();

let tentativasLogin = 0;


while (nomeUsuario == senhaUsuario)
{
    console.log("Dados inválidos!");
    tentativasLogin++;
    console.log()
    console.log("Digite o nome do usuario: ");
    nomeUsuario = prompt()
    console.log("Digite a senha do usuario: ");
    senhaUsuario = prompt();
}