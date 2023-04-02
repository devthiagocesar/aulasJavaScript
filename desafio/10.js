/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, 
os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. 
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, 
imprime true. João e Maria, imprime false.*/

const Maria = {
    nome: "Maria",
    idade: 35,
    cidade: "São Paulo",
    profissao: "Engenheiro",
    hobby: "Jogar tênis"
  }
  
  const João = {
    nome: "João",
    idade: 27,
    cidade: "Rio de Janeiro",
    profissao: "Advogada",
    hobby: "Viajar"
  }

  console.log (Maria.nome === João)