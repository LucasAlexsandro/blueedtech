//Fazendo o require do prompt
const prompt = require("prompt-sync")();

//Iniciando a História

console.log(`Um astronalta que viajou para o espaço em busca de um novo planeta habitável para a população da terra`);

// Desenvolvendo Perguntas

let pergunta1 = prompt("A decolagem da nave foi bem sucedida? ");
let pergunta2 = prompt("A decolagem da nave foi bem sucedida? ");
let pergunta3 = prompt("A decolagem da nave foi bem sucedida? ");
let pergunta4 = prompt("Conseguiu achar um planeta hábitavel? ");
let pergunta5 = prompt("Conseguiu transmitir a mensagem final informando se o planeta é habitável ou não? ");

let contadorSim = 0;
let contadorNao = 0;

// Definindo Lógida das Perguntas

if(pergunta1 && pergunta2 && pergunta3 && pergunta4 && pergunta5 == 'sim' || 'nao'){
    //Continua código
    if(pergunta1 == "sim"){
        contadorSim++;
    }else{
        contadorNao++;
    }
    if(pergunta2 == "sim"){
        contadorSim++;
    }else{
        contadorNao++;
    }
    if(pergunta3 == "sim"){
        contadorSim++;
    }else{
        contadorNao++;
    }
    if(pergunta4 == "sim"){
        contadorSim++;
    }else{
        contadorNao++;
    }
    if(pergunta5 == "sim"){ 
        contadorSim++;
    }else{
        contadorNao++;
    }
}else {
    console.log("Você não inseriu todas as respostas com SIM ou NÃO");
}

console.log();
console.log(`Você informou ${contadorSim} respostas SIM`);
console.log(`Você informou ${contadorNao} respostas NÃO`);
console.log();

//Exibindo informação final de acordo com a resposta informada

if(contadorSim == 0){
    console.log("Você falhou miseravelmente.");
}else if(contadorSim == 1 || 2){
    console.log("Você falha, mas ainda consegue fugir da situação.");
}else if(contadorSim == 3){
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
}else if(contadorSim == 4){
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
}else if(contadorSim == 5){
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
}else {
    console.log('Algum dado foi inserido incorretamente!');
}

