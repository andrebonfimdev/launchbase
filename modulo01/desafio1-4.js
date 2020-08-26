// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// Atualiza as transações do usuário
createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'credit', value: 80 })
createTransaction({ type: 'debit', value: 40 })
createTransaction({ type: 'debit', value: 30 })

// Enviar as transações para o array transaction de user
function createTransaction(transaction) {
  user.transactions.push(transaction)
}

// Atualizar o Balance
function updateBalance() {
  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      user.balance += transaction.value // += é a mesma coisa que ter user.balance = user.balance + transaction.value;
    } else {
      user.balance -= transaction.value
    }
  }
}

updateBalance()
console.log(`O saldo atual é de: ${user.balance}`)

// Retornar maior valor
function getHigherTransactionByType(type) {
  let higherValue = 0
  let higherTransaction

  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > higherValue) {
      higherValue += transaction.value
      higherTransaction = transaction.value
    }
  }
  return higherTransaction;
}

const highCredit = getHigherTransactionByType('credit')
const highDebit = getHigherTransactionByType('debit')

console.log(`O maior valor de crédito é: ${highCredit}`)
console.log(`O maior valor de débito é: ${highDebit}`)

// Retornar o valor médio de todas as transações
function getAverageTransactionValue() {
  let sum = 0

  for (let transaction of user.transactions) {
    sum += transaction.value

  }
  const result = sum / user.transactions.length
  const media = result.toFixed(2)

  return media
}

const media = getAverageTransactionValue()

console.log(`A média de todas as transações é: ${media}`)

// Apresenta o total de transações para credit e para debit
function getTransactionsCount() {
  let totalCredit = 0
  let totalDebit = 0

  for (let transaction of user.transactions) {
    if(transaction.type === 'credit') {
      totalCredit ++
    } else {
      totalDebit ++
    }
  }
  return {'Total de Crédito': totalCredit, 'Total de Débito': totalDebit}
}

const total = getTransactionsCount()
console.table(total)