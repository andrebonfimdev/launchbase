// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const nome = 'André'
const peso = 60
const altura = 1.65
const imc = peso / (altura * altura)

if(imc >= 25) {
  console.log(`${nome} você está acima do peso`)
} else {
  console.log(`${nome} você não está acima do peso`)
}

// Crie um programa para calcular a aposentadoria de uma pessoa.

const nome2 = 'Antônio'
const sexo = 'M'
const idade = 59
const contribuicao = 43
const mediaContrib = idade + contribuicao

if ((sexo == 'M' && mediaContrib >= 95) || (sexo == 'F' && mediaContrib >= 85)) {
    console.log(`${nome2}, você pode se aposentar!`)
  } else {
    console.log(`${nome2}, você ainda não pode se aposentar!`)
  }