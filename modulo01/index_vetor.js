// Criar um programa que calcula a média
// das notas entre os alunos
// e envia mensagem de cálculo da média.

/*const aluno1 = "André"
const notaAluno01 = 9.8
const aluno2 = 'Diego'
const notaAluno02 = 10
const aluno3 = 'Fulano'
const notaAluno03 = 2*/ // Modo normal

//const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3 // Modo normal

// const aluno01 = {
//   nome: 'André',
//   nota: 9.8
// }

// const aluno01 = {
//   nome: 'Diego',
//   nota: 10
// }

// const aluno01 = {
//   nome: 'Fulano',
//   nota: 2
// } // Modo com objeto

// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

const alunos = [
  {
    nome: 'André',
    nota: 9.8
  },
  {
    nome: 'Diego',
    nota: 10
  },
  {
    nome: 'Fulano',
    nota: 2
  }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// Se a média for maior que 5 parabenizar a turma
if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns!`)
} else {
  console.log('A média é menor que 5.')
}

console.log(media)


