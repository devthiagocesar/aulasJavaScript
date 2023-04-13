/*Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
- Todos os números são impares =&gt; TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares =&gt; 
TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem =&gt; 
Há números pares e ímpares.*/

const numberOne = 11
const numberTwo = 33
const numberThree = 35
const numberFour = 41

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberTwo % 2 === 0){
    console.log ('Todos números são Pares')
}
    else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberTwo % 2 !== 0) {
        console.log ('Todos números são Impares')
    } else {
    console.log ('São Pares e impares'
    )
}
