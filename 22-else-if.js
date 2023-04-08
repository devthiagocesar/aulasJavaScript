/*CONTROLE DE FLUXO - CONDICIONAIS - IF ELSE

if = SE
else = se não
else if = mais se..
*/

const temperature = 41
if (temperature >= 36 && temperature <=39){
    console.log ('Temperatura saudável')
}
else if (temperature >=40){
    console.log ('Procure MÉDICO URGENTE')
} 
else if (temperature <=36) {
    console.log ('Temperatura muito baixa, procure um médico')
}
