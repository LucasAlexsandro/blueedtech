const prompt = require("prompt-sync")();
console.clear();
console.log();

/*
    Crie um sistema de cadastro de funcionários que
    deve criar um objeto novo para cada funcionário 
    cadastrado com as informações: nome, cargo e salário.
    Ele deve armazenar todos esses objetos em uma lista. 
    Ao final de cada cadastro ele deve perguntar se deseja 
    cadastrar um novo funcionário e recomeçar o processo, e caso 
    não haja mais funcionários para cadastrar, ele deve chamar uma 
    função que deve apresentar a quantidade de funcionários com cada 
    cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
*/

let adicionar = 'sim';
let listaDeFuncionarios = [];
let professores = [];
let alunos = [];
let qtprofessores = 0;
let qtalunos = 0;

while(adicionar == 'sim'){
    let funcionario = {};
    funcionario.nome = prompt("Qual o nome do funcionário? ");
    funcionario.cargo = prompt("Qual cargo do funcionário: ");
    funcionario.salario = prompt("Qual salário? ");
    
    listaDeFuncionarios.push(funcionario);

    adicionar = prompt("Deseja adicionar outro funcionário?: ")

    if(funcionario.cargo == 'professor'){
        qtprofessores++;
        professores.push(funcionario.nome);
    } else if (funcionario.cargo == 'aluno'){
        qtalunos++;
        alunos.push(funcionario.nome)
    }

    console.log("Quantidade de professores: ", qtprofessores);
    console.log("Quantidade de alunos: ", qtalunos);
    
}

contaFuncionario(listaDeFuncionarios);
