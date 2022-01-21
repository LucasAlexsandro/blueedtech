/*
    1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário 
    aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará 
    os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste 
    segundo o seguinte critério, baseado no salário atual: 

    Salários até R$ 280,00 (incluindo): aumento de 20%. 
    Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
    Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
    Salários de R$ 1500,00 em diante: aumento de 5%.

    Após o aumento ser realizado, informe na tela:

    O salário antes do reajuste.
    O percentual de aumento aplicado.
    O valor do aumento.
    O novo salário, após o aumento.
*/
const prompt = require("prompt-sync")();

console.log("#########################################");
let salario = Number.parseFloat(prompt("Digite o seu salário: "));
console.log("#########################################");
let aumentoSalarial = 0;


console.log();

if (salario <= 280)
{   
    console.log("#########################################");
    console.log(`SEU SALÁRIO ATUAL ERA DE: R$ ` + salario.toFixed(2));
    aumentoSalarial = (salario * 20 / 100);
    console.log(`O AUMENTO APLICADO FOI DE 20% QUE FOI NO TOTAL DE: R$ ` + aumentoSalarial.toFixed(2))
    salario = salario + aumentoSalarial;
    console.log(`# ATUALIZAÇÃO SALARIAL #\nSeu salário agora é de R$ ` + salario.toFixed(2));
    console.log("#########################################");
}
else if (salario >= 280 && salario <= 700)
{
    console.log("#########################################");
    console.log(`SEU SALÁRIO ATUAL ERA DE: R$` + salario);
    aumentoSalarial = (salario * 15 / 100);
    console.log(`O AUMENTO APLICADO FOI DE 15% QUE FOI NO TOTAL DE: R$ ` + aumentoSalarial.toFixed(2));
    salario = salario + aumentoSalarial;
    console.log(`# ATUALIZAÇÃO SALARIAL #\nSeu salário agora é de R$ ` + salario.toFixed(2));
    console.log("#########################################");
}
else if (salario > 700 && salario <= 1500)
{
    console.log("#########################################");
    console.log(`SEU SALÁRIO ATUAL ERA DE: R$ ` + salario);
    aumentoSalarial = (salario * 10 / 100);
    console.log(`O AUMENTO APLICADO FOI DE 10% QUE FOI NO TOTAL DE: R$ ` + aumentoSalarial.toFixed(2));
    salario = salario + aumentoSalarial;
    console.log(`# ATUALIZAÇÃO SALARIAL #\nSeu salário agora é de R$ ` + salario.toFixed(2));
    console.log("#########################################");
}
else if (salario > 1500)
{
    console.log("#########################################");
    console.log(`SEU SALÁRIO ATUAL ERA DE: R$ ` + salario);
    aumentoSalarial = (salario * 5 / 100);
    console.log(`O AUMENTO APLICADO FOI DE 5% QUE FOI NO TOTAL DE: R$ ` + aumentoSalarial.toFixed(2));
    salario = salario + aumentoSalarial;
    console.log(`# ATUALIZAÇÃO SALARIAL #\nSeu salário agora é de R$ ` + salario.toFixed(2));
    console.log("#########################################");
}
else 
{
    console.log("[ERRO] - Algum dado pode ter sido inserido incorretamente");
}
