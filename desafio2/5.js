/*Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" 
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, 
a pessoa deve ser maior de idade e brasileira para ser aprovada.
Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.*/


const personal1 = {
   name: "Thiago",
   age: 37,
   sex: "male",
   profession: "Developer",
   nationality: "Brazilian"

}
const personal2 = {
   name: "Marcelão",
   age: 40,
   sex: "male",
   profession: "Support analyst",
   nationality: "Brazilian"

}

const personal3 = {
   name: "Pajé",
   age: 38,
   sex: "male",
   profession: "Developer",
   nationality: "Brazilian"

}

const personal4 = {
   name: "Jogador",
   age: 48,
   sex: "male",
   profession: "Computer technician",
   nationality: "Germany"

}

const personal5 = {
   name: "Irmão",
   age: 17,
   sex: "male",
   profession: "Computer technician",
   nationality: "Brazilian"

}


if (personal1.age >= 18 && personal1.nationality==="Brazilian"){
   console.log ("Personal1 passou no processo")
} else{
   console.log ("Vc NÃO passou no processo")
}
if (personal2.age >= 18 && personal2.nationality==="Brazilian"){
   console.log ("Personal2 passou no processo")
} else{
   console.log ("Vc NÃO passou no processo")
}

if (personal3.age >= 18 && personal3.nationality==="Brazilian"){
   console.log ("Personal3 passou no processo")
} else{
   console.log ("Vc NÃO passou no processo")
}

if (personal4.age >= 18 && personal4.nationality==="Brazilian"){
   console.log ("Personal4 passou no processo")
} else{
   console.log ("Personal4 NÃO passou no processo")
}

if (personal5.age >= 18 && personal5.nationality==="Brazilian"){
   console.log ("Personal5 passou no processo")
} else{
   console.log ("Personal5 NÃO passou no processo")
}