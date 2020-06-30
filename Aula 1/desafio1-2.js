// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const empresa = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereco: {
    rua: 'Rua Guilherme Gambala',
    numero: '260'
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
  nome: 'André',
  idade: 29,
  tecnologias: [
    { nome: 'React Js', especialidade: 'Web' },
    { nome: 'React Native', especialidade: 'Web/Mobile' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia 
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}!`)