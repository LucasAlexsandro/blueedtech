console.clear();
console.log();
const prompt = require("prompt-sync")();

// /============================== DEFININDO INICIO DO CODIGO =====================================/

// MENU INICIAL

console.log();

let nomePersonagem = prompt('Qual o nome do seu Personagem? ');
let idadePersonagem = +prompt('Qual a idade do seu Personagem? ');

// DEFININDO INIMIGOS
let monstros = {

    //Monstro  de dano Baixo
    monstroFacil: {
        nome: 'Grifo',
        level: 1,
        dano: 10,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

    // Monstro de Dano Médio
    monstroMedio: {
        nome: 'Estrige',
        level: 3,
        dano: 20,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },
    // Monstro de Maior Dano
    monstroDificil: {
        nome: 'Monster 3',
        level: 5,
        dano: 30,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

    // INIMIGOS SEM SEREM MONSTROS

    inimigoFacil: {
        nome: 'Monster 3',
        level: 5,
        dano: 30,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

    inimigoMedio: {
        nome: 'Monster 3',
        level: 5,
        dano: 30,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

    inimigoDificil: {
        nome: 'Monster 3',
        level: 5,
        dano: 30,
        frase: ["HAHAHA VOCÊ É FRACO!", "NÃO CONSEGUE ME VENCER", "TOMA ESSA"],
        vida: 100,

        //Funções Monstros
        aumentaVida: function (valor) {
            if (this.vida >= 100) {
                console.log("Vida no máximo!");
            } else {
                this.vida = this.vida + valor;
            }
        },
        retiraVida: function (valor) {
            this.vida = this.vida - valor;
        }
    },

}

// DEFININDO O PERSONAGEM

let personagem = {
    nome: nomePersonagem,
    idade: idadePersonagem,
    dano: 30,
    level: 0,
    coins: 0,
    fome: 0,
    espada: "Luz das Cinzas",
    missoesFinalizadas: 0,
    reinoInicial: [],
    vida: 100,
    status: function () {
        console.log(`#################### STATUS ####################`);
        console.log(`O nome do seu personagem é: ${this.nome}`);
        console.log(`A idade é: ${this.idade}`);
        console.log(`O level é: ${this.level}`);
        console.log(`A força: ${this.forca}`);
        console.log(`Quantidade de Coins do personagem: ${this.coins}`);
        console.log(`Quantidade de XP: ${this.xp}`);
        console.log(`################################################`);
    },
    // Retira a vida do personagem
    retiraVida: function (valor) {
        if (this.vida < 1) {
            console.log("Você Morreu!");
        } else {
            this.vida = this.vida - valor;
        }
    },
    // Aumenta a Vida
    aumentaVida: function (valor) {
        if (this.vida > 100) {
            console.log("Sua vida está totalmente cheia!");
        } else {
            this.vida = this.vida + valor;
        }
    },
    // Escolhe o reino
    escolhaReino: function (valor) {
        this.reinoInicial = valor;
    },
    //Aumenta a Fome
    aumentaFome: function (valor) {
        if (this.fome > 100) {
            console.log("Você morreu, Fim de Jogo!!!!")
        } else {
            this.fome = +valor;
        }
    },
    //Aumenta o Dano do Personagem
    aumentaDano: function (valor) {
        this.dano = this.dano = valor;

        if (this.dano >= 100) {
            console.log("Seu dano está no máximo!")
        }
    },
    // Diminui a FOME
    diminuiFome: function (valor) {
        if (this.fome < 0) {
            console.log("Você não está com fome!");
        } else {
            this.fome = -valor;
        }
    },
    aumentaLevel: function (valor) {
        this.level = this.level + valor;
        this.vida = this.vida + 20;
    }
}

// DEFININDO O TEMPO INICIAL DO JOGO
let tempoJogo = {
    horario: 7,
    dia: 1,

    alteraTempo: function (valor) {
        this.horario = this.horario + valor;

        if (this.horario >= 24) {
            this.resto = this.horario - 24;
            this.horario = 0;
            this.dia++;
        }
    },
    informaTempo: function () {
        console.log("O horário do jogo é: " + tempoJogo.horario + ' Hrs');
        console.log("O dia do jogo é: " + tempoJogo.dia);
    }

}

// FUNCTIONS----------------------------------------------------------------------------------------------------------

// DEFININDO MERCADO DO JOGO
function mercador() {
    console.log("-------------------------- MERCADOR --------------------------------")
    console.log();
    console.log(`Você encontrou um mercador no caminho, 
                 deseja comprar uma espada mais forte? 
                 [SIM] ou [NAO]`);

    let mercador = prompt("--> ");

    while (mercador == 'sim') {
        console.log(`
            -------------- ESPADAS --------------
            1 - Espada Flamejante - [100 COINS] - [DANO +15]
            2 - Espada Justiceira - [200 COINS] - [DANO +20]
            3 - Espada Da Luz     - [300 COINS] - [DANO +25]
            4 - Espada da Morte   - [400 COINS] - [DANO +30]

        `);
        console.log(`
            -------------- VIDA -----------------
            5 - 30 VIDA - [30 COINS]
            6 - 50 VIDA - [50 COINS]
            7 - 75 VIDA - [75 COINS]
            8 - 100 VIDA - [100 COINS]

    `);

        let compra = +prompt("Informe o número do item escolhido! ");

        switch (compra) {
            case 1:
                console.log("Validando compra...");
                if (personagem.coins < 100) {
                    console.log("Você não tem saldo suficiente!");
                } else {
                    console.log("Compra realizada com sucesso!");
                    personagem.coins = personagem.coins - 100;
                    personagem.dano = personagem.dano + 15;
                    console.log(personagem.coins);
                }
                break;
            case 2:
                console.log("Validando compra...");
                if (personagem.coins < 200) {
                    console.log("Você não tem saldo suficiente!");
                } else {
                    console.log("Compra realizada com sucesso!");
                    personagem.coins = personagem.coins - 200;
                    personagem.dano = personagem.dano + 20;
                    console.log(personagem.coins);
                }
                break;
            case 3:
                console.log("Validando compra...");
                if (personagem.coins < 300) {
                    console.log("Você não tem saldo suficiente!");
                } else {
                    console.log("Compra realizada com sucesso!");
                    personagem.coins = personagem.coins - 300;
                    personagem.dano = personagem.dano + 25;
                    console.log(personagem.coins);
                }
                break;
            case 4:
                console.log("Validando compra...");
                if (personagem.coins < 400) {
                    console.log("Você não tem saldo suficiente!");
                } else {
                    console.log("Compra realizada com sucesso!");
                    personagem.coins = personagem.coins - 400;
                    personagem.dano = personagem.dano + 30;
                    console.log(personagem.coins);
                }
                break;
            case 5:
                console.log("Validando compra...");
                if (personagem.coins < 30) {
                    console.log("Você não tem saldo suficiente!");
                } else {
                    console.log("Compra realizada com sucesso!");
                    personagem.coins = personagem.coins - 100;
                    console.log(personagem.coins);
                }
                break;
            case 6:
                console.log("Compra 1");
                break;
            case 7:
                console.log("Compra 1");
                break;
            case 8:
                console.log("Compra 1");
                break;
            default:
                console.log("O item informado não existe no mercado.")
        }
        console.log("Deseja comprar mais algo? ")
        mercador = prompt("--> ");
    }
}

// DEFININDO MISSÕES

function missao1() {
    console.log("***** MISSÃO INICIAL *****")
    console.log();
    console.log(`Você recebeu a missão de matar um monstro que está atormentando a vila no reino de ${personagem.reino}`);
    console.log();
    console.log("Você está rastreando o monstro...");
    console.log(`O monstro ${monstros.monstroFacil.nome} está rodeando você!`);
    console.log(`Ele faz um primeiro ataque, mas você acaba esquivando...`);
    console.log("Deseja atacar? [SIM] - [NAO]")
    let ataque = prompt("---> ");

    while (ataque != 'sim' && ataque != 'nao' && ataque != 's' && ataque != 'n') {
        console.log("Opção inválida, digite [SIM] ou [NÃO]");
        ataque = prompt("---> ");
    }

    // Definindo inicio do combate e o loop
    if (ataque == 'sim') {
        let batalha = 'sim';
        console.log("Batalha iniciada!");
        while (batalha == 'sim') {
            // Começando o Combate
            console.log("Em combate...")
            console.log("Atacar? [SIM] - [NAO] ");
            ataque = prompt("---> ");
            if (ataque == 'sim') {
                console.log(`Você atacou o ${monstros.monstroFacil.nome}`);
                monstros.monstroFacil.retiraVida(personagem.dano);
                console.log(`A vida do ${monstros.monstroFacil.nome} é ${monstros.monstroFacil.vida}`);
            }
            if (ataque == 'nao') {
                console.log(`A batalha está em adamento e você não poderá sair pois o ${monstros.monstroFacil.nome} irá te perseguir!`);
                console.log(`O ${monstros.monstroFacil.nome} te atacou!`);
                personagem.retiraVida(monstros.monstroFacil.dano);
                console.log(`Você está com ${personagem.vida} de vida!`);
            }
            if (personagem.vida <= 0) {
                console.log(`Batalha encerrada! O ${monstros.monstroFacil.nome} Venceu!!!`);
                batalha = 'nao';
            } else if (monstros.monstroFacil.vida <= 0) {
                console.log(`Batalha encerrada! O ${personagem.nome} Venceu!!!`);
                console.log(`Seu level agora é ${personagem.level}`)
                console.log(`Você recebeu ${personagem.coins} coins por ter completado a missão!`);
                personagem.status();
                batalha = 'nao';
            }
        }
    }
    else {
        console.log("Você perdeu muitos pontos iniciais com o reino");
    }
}

// MISSÃO 2 DA FAZENDA 
function missao2(valor) {
    console.log("***** MISSÃO SECUNDÁRIA *****")
    console.log();
    console.log("Indo até o pantano...");
    console.log("Rastreando o monstro...");
    console.log("Você encontrou o monstro!!!!");
    console.log();
    console.log(`O monstro ${monstros.monstroMedio.nome} está rodeando você!`);
    console.log(`Ele faz um primeiro ataque, e te acerta`);
    personagem.retiraVida(20);
    console.log("Deseja atacar? [SIM] - [NAO]")
    let ataque = prompt("---> ");

    while (ataque != 'sim' && ataque != 'nao' && ataque != 's' && ataque != 'n') {
        console.log("Opção inválida, digite [SIM] ou [NÃO]");
        ataque = prompt("---> ");
    }

    // Definindo inicio do combate e o loop
    if (ataque == 'sim') {
        let batalha = 'sim';
        console.log("Batalha iniciada!");
        while (batalha == 'sim') {
            // Começando o Combate
            console.log("Em combate...")
            console.log("Atacar? [SIM] - [NAO] ");
            ataque = prompt("---> ");
            if (ataque == 'sim') {
                console.log(`Você atacou o ${monstros.monstroMedio.nome}`);
                monstros.monstroMedio.retiraVida(personagem.dano);
                console.log(`A vida do ${monstros.monstroMedio.nome} é ${monstros.monstroMedio.vida}`);
            }
            if (ataque == 'nao') {
                console.log(`A batalha está em adamento e você não poderá sair pois o ${monstros.monstroMedio.nome} irá te perseguir!`);
                console.log(`O ${monstros.monstroMedio.nome} te atacou!`);
                personagem.retiraVida(monstros.monstroMedio.dano);
                console.log(`Você está com ${personagem.vida} de vida!`);
            }
            if (personagem.vida <= 0) {
                console.log(`Batalha encerrada! O ${monstros.monstroMedio.nome} Venceu!!!`);
                batalha = 'nao';
            } else if (monstros.monstroMedio.vida <= 0) {
                console.log(`Batalha encerrada! O ${personagem.nome} Venceu!!!`);
                console.log(`Seu level agora é ${personagem.level}`)
                console.log(`Você recebeu ${personagem.coins} coins por ter completado a missão!`);
                personagem.status();
                batalha = 'nao';
            }
        }
    }
    else {
        console.log("Você perdeu muitos pontos iniciais com o reino");
    }
}

function missao3(valor) {

}

function missao4(valor) {

}

function missao5(valor) {

}

// INICIANDO O GAME


inicioJogo = true;

do {
    // INICIANDO TESTOS INICIAIS DO JOGO

    let confirmaAcao = 'n';

    do {
        console.log(`
            Olá ${personagem.nome} bem vindo ao game RPG
            --------------------------------------------
            O objetivo do game é você realizar missões para 
            os habitantes em algum reino de sua escolha, 
            lembre-se que dependendo do reino o seu ganho
            ao concluir uma missão pode ser maior, mas com
            certeza os desafios também serão!
        `)

        confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")

    } while (confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");

    console.clear();
    console.log();

    // ESCOLHENDO O REINO
    let reinos = ['TEMERIA', 'TESTE 1', 'TESTE 2'];
    console.log("Escolha o reino para iniciar suas missões!");
    for (reino of reinos) {
        console.log(reino);
    }
    personagem.reinoInicial.push();

    // DEFININDO MISSÃO INICIAL DO REINO ESCOLHIDO

    confirmaAcao = 'n';

    do {
        console.log(`
            Olá ${personagem.nome} Bem vindo ao Reino de ${personagem.reinoInicial}
            --------------------------------------------
            Você recebeu uma missão inicial do reino para
            mostrar o seu valor! 
            ---------------------------------------------
            ${tempoJogo.informaTempo()}
        `)


        confirmaAcao = prompt("Digite [SIM] para confirmar a mensagem: ")

    } while (confirmaAcao != 'sim' && confirmaAcao != 'SIM' && confirmaAcao != "s");

    console.log();
    console.clear();

    // PRIMEIRA MISSÃO DO JOGO - OBRIGATÓRIA
    missao1();
    tempoJogo.alteraTempo(10);
    tempoJogo.informaTempo();
    personagem.aumentaFome(20);

    // JORNADA ATÉ OUTRA CIDADE
    console.log("------------------------------------------------------------------")
    console.log();
    console.log("Você está a caminho da próxima cidade!")
    tempoJogo.alteraTempo(3);
    tempoJogo.informaTempo();
    console.log("No caminho...")
    tempoJogo.alteraTempo(4);
    tempoJogo.informaTempo();
    console.log(`
            Você está passando por uma fazenda 
            e um cidadão te ofereceu uma missão
            para matar um monstro que fica em um
            pantano proximo de sua fazenda e ele está
            matando os fazendeiros, você aceita fazer essa missão secundária?
            [SIM] ou [NAO]
      `)

    let aceitaMissao = prompt("--> ");

    if (aceitaMissao == 'sim' || aceitaMissao == 's') {
        missao2();
    } else {
        console.log(`
            Você decidiu continuar sua jornada sendo assim
            Você não ganhou os COINS oferecidos pelos fazendeiros
            nem os pontos para subir de level.
          `)

    }

    tempoJogo.alteraTempo(7);
    tempoJogo.informaTempo();

    // SEGUNDA MISSÃO - VARIADAS
    console.log(`
        VOCÊ CHEGOU A CIDADE DE ALABASTA
        NESTA CIDADE VOCÊ PODE ESCOLHER 
        TRÊS MISSÕES DISPONÍVEIS E TAMBÉM
        COMPRAR NOVAS ARMAS!!!
        [1] - MISSÃO FACIL - 
      `)
    // TERCEIRA MISSÃO QUE VEM AO JOGADOR ACEITAR A SEGUNDA MISSÃO - SÓ APARECE CASO ELE ACEITE A SEGUNDA

    // QUARTA MISSÃO DEPOIS DE UMA LONGA JORNADA

    // PERGUNTANDO SE O JOGADOR DESEJA JOGAR NOVAMENTE!;
    console.log("------------------------------------------------------------------")
    console.log("Deseja jogar novamente? [SIM] ou [NAO]");
    inicioJogo = prompt('--> ')

}
while (inicioJogo == 'sim')