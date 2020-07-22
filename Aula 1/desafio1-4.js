// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// Atualiza as transações do usuário
createTransaction({type: 'credit', value: 50.5})
createTransaction({type: 'credit', value: 80})
createTransaction({type: 'debit', value: 40})
createTransaction({type: 'debit', value: 30})

// Atualiza o balance
updateBalance()

// Retorna o maior valor de credit ou debit
// const credit = user.transactions[0].type === 'credit'

const credit = getHigherTransactionByType('credit')

console.log(credit)

function createTransaction(transaction) {
  user.transactions.push(transaction)
}

function updateBalance() {
  for(let transaction of user.transactions){
    if(transaction.type === 'credit') {
      user.balance += transaction.value // += é a mesma coisa que ter user.balance = user.balance + transaction.value;
    } else {
      user.balance -= transaction.value
    }
  }
}

// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit
// function getHigherTransactionByType() {
//   for(transaction of user.transactions) {
//     if(transaction.type === 'credit') {
//       console.log(Math.max(transaction.value))
//     }
//   }
// }

function getHigherTransactionByType(type) {
  let higherValue = 0;
  let higherTransaction;

  for(transaction of user.transactions) {
    if(transaction.type === type && transaction.value > higherValue) {
      higherValue += transaction.value; 
      higherTransaction = transaction.value;
    }
  }
  return higherTransaction;
}