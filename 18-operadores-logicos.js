/*Operadores lógicos

&& -> E // FILHO OBEDIENTE
    true && true = true
    true && false = false
    false && false = false

|| -> OU //FILHO ESPERTINHO
true || true = true
true || false = true
false || false = false

-> Negação // FILHO DO CONTRA / REBELDE
!true = false
!false = true
*/

console.log (!true)

/*METODO "E &&" EXEMPLO

o que é necessário para alguém fazer uma transferência bancária?
- Ter saldo em conta
- Minha conta não esteja bloqueada
- A conta destino precisa estar correta
*/

/*
METODO "OU ||"

o que é necessário para um celular desbloquear a tela?
- digitar a senha correta
- Fazer o reconhecimento por digital
- Fazer o reconhecimento facial
*/

console.log ( !(!(true && true && true) && !(false && true || true)))




