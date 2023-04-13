/*Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar
um número aleat´roio entre 1 e 10. e verifca se a pessoa ganhou ou não. Em caso ter ganhado, mostra o prêmio, se não ganhou,
mostra outra mensagem*/

// gerando um número aleatório entre 1 e 10 (o número "ganhador")
const numeroGanhador = Math.floor(Math.random() * 10) + 1;

// gerando outro número aleatório entre 1 e 10 (o número escolhido pelo jogador)
const numeroEscolhido = Math.floor(Math.random() * 10) + 1;

// verificando se o jogador ganhou ou não
if (numeroEscolhido === numeroGanhador) {
  // se o jogador ganhou, mostra o prêmio
  console.log(`Parabéns, você ganhou! O prêmio é um carro.`);
} else {
  // se o jogador não ganhou, mostra outra mensagem
  console.log(`Que pena, você não ganhou. Tente novamente.`);
}

