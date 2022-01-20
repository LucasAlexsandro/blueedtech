//Medias Aluno 

let nota1 = +prompt('Digite a primeira nota: ');
let nota2 = +prompt('Digite a segunda nota: ');
let nota3 = +prompt('Digite a terceira nota: ');
let nota4 = +prompt('Digite a quarta nota: ');

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`Sua média foi de: ${media}`);

if(media >= 7 && media <= 10) {
    console.log('Aprovado');
}
else if(media >= 5 && media < 7){
    console.log('Em recuperação');
}
else if(media < 5){
    console.log('Reprovado');
}
else {
    console.log('Houve algum erro');
}