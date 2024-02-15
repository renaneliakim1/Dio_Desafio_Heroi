let nomeHeroi = prompt('Digite o nome de seu heroi');
let nivelXP = prompt('Digite a pontuação do heroi');



if( nivelXP >= 10001){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Radiante.');
}else if(nivelXP >= 9000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Imortal.');
}else if(nivelXP >= 8000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Ascendente.');
} else if(nivelXP >= 7000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Platina.');
} else if(nivelXP >= 5000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Ouro.');
} else if(nivelXP >= 2000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Prata.');
}else if(nivelXP >= 1000){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Bronze.');
}else if(nivelXP >= 1){
    console.log( 'O heroi ' + nomeHeroi + ' com pontuação ' + nivelXP + ' esta no nivel Ferro.');
}else{
    console.log('Pontuação invalida');
}

/* # 1️⃣ Desafio Classificador de nível de Herói
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */