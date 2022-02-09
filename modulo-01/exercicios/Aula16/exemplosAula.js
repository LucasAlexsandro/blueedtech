const prompt = require("prompt-sync")();
console.clear();
console.log();


function pneuFurado(){
    console.log('O penu do seu carro furou')
    let trocarpneu = prompt("Você tem a habilitade de trocar o pneu? ");
    if(trocarpneu == 's'){
        console.log("Você trocou o pneu com sucesso");
    }else {
        console.log("Você não conseguiu trocar o pneu e não concluiu seu objetivo");
    }
}

console.log("Digite sua escolha");
console.log("0: ir trabalhar");
let escolha = +prompt();

if(escolha == 0){
    let aleatorio = Math.floor(Math.random() * 10);
    console.log("Você foi trabalhar");
    console.log(aleatorio);
    if(aleatorio == 1){
        pneuFurado();
    }else {
        console.log("Você chegou ao trabalho sem mais problemas");
    }
}

