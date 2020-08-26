/* OPERADORES DE COMPARAÇÃO */

/*==============================
console.log( 5 > 4) // true
console.log( 5 < 4) // false
console.log( 5 >= 4) // true
console.log( 4 <= 4) // true
console.log( 4 == '4') // true // conteúdo igual 
console.log( 4 === '4') // false // tipo e conteúdo igual 
console.log( 4 != '5') // true // conteúdo diferente
console.log( 4 !== '5') // true // tipo e conteúdo diferente
==============================*/

// DESAFIOS
const idade = 20
/* // Verificar se a pessoal é maior igual de 18
if(idade >= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear a entrada')
}
// Se a pessoa tiver 17 anos avisar para voltar 
// quando fizer 18 anos
if(idade === 17) {
  console.log('Voltar quando fizer 18')
} */

if(!(idade >= 18) || idade === 17) {
  console.log('Bloquear a entrada')
} else {
  console.log('Deixar entrar')
}

/* OPERADORES LÓGICOS */
/*
  && "E" As duas condições devem ser verdadeiras
     para que a condição final seja verdadeira.
  || "OU" Uma das condições deve ser verdadeira
     para que a condição final seja verdadeira 
  !  "NÃO" Nega uma condição
*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 == 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 > 4)) // false
