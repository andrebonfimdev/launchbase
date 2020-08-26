// Crie um programa que armazena um array de usuários

const usuarios = [
  { nome: "André", tecnologias: ["ReactJS", "React Native"] },
  { nome: "Maria", tecnologias: ["HTML", "CSS"] },
  { nome: "João", tecnologias: ["CSS", "Node.js"] }
];

//for ( let i = 0; i < usuarios.length; i++) {
    //console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
  //}

// Verificar se usuário trabalha com CSS
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}

function checaSeUsuarioUsaCSS(usuario) {
  return usuario.tecnologias.includes('CSS')
}

// Crie um programa que calcula a soma de receitas e despesas de usuários 
// e no fim retorna o saldo (receitas - despesas).

const users = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas, despesas) {
  const receita = somaNumeros(receitas)
  const despesa = somaNumeros(despesas)
  let resultado = receita - despesa
  return resultado
}

function somaNumeros(numeros) {
  let soma = 0
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
  }
  return soma
}



// Percorrendo array de users e retornando receitas e despesas
for (let i = 0; i < users.length; i++) {
  let receitas = users[i].receitas
  let despesas = users[i].despesas

  const resultado = calculaSaldo(receitas, despesas)

  if (resultado > 0) {
    console.log(`${users[i].nome} possui saldo POSITIVO de ${resultado}`)
  } else {
    console.log(`${users[i].nome} possui saldo NEGATIVO de ${resultado}`)
  }
}
