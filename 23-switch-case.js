/*CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE
*/

const temperature = 36

switch (temperature) {
    case 30:
        console.log ('A pessoa está com a temperatura MUITO abaixo do normal')
    break

    case 33:
        console.log ('A pessoa está com a temperatura abaixo do normal')
    break

    case 36:
        console.log ('A pessoa está com a temperatura normal')
    break

    case 38:
            console.log ('A pessoa está MUITO ALTO do normal')
    break

    default:
        console.log ('Temperatura não encontrada')
        break
}

/*

const note = 6

switch (note) {
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('You went through average')
        break;

    case 6:
    case 5:
    case 4:
        console.log('You are in recovery')
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('disapproved')
        break;
    default:
        console.log('unidentified')
        break;
}

*/