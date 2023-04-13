/*Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor*/


const numberFirst = 10
const numberSecond = 11
const numberThird = 12

if (numberFirst > numberSecond && numberFirst > numberThird){
    console.log ('numberFirst é o maior número')
    }
else if (numberSecond > numberThird){
    console.log ('numberSeccond é maior número')
}
else{
    console.log ('numberthird é maior número')
}

if (numberFirst < numberSecond && numberFirst < numberThird){
    console.log ('numberFirst é o MENOR número')
    }
else if (numberSecond < numberThird){
    console.log ('numberSeccond é MENOR número')
}
else{
    console.log ('numberthird é MENOR número')
}