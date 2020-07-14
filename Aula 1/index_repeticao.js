const classA = [
  {
    name: 'André',
    grade: 9.8
  },
  {
    name: 'Diego',
    grade: 10
  },
  {
    name: 'Fulano',
    grade: 2
  }
]

const classB = [
  {
    name: 'Marcos',
    grade: 8
  },
  {
    name: 'Fabiano',
    grade: 9
  },
  {
    name: 'Maria',
    grade: 2
  },
  {
    name: 'Carina',
    grade: 10
  }
]

function calculateAverage(students) {
  let sum = 0

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.length

  return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`A média da ${turma} foi de ${average}. Parabéns!`)
  } else {
    console.log(`A média da ${turma} é menor que 5.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`O aluno ${student.name} está reprovado!`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

sendMessage(average1, 'turmaA')
sendMessage(average2, 'turmaB')

studentsFlunked(classA)
studentsFlunked(classB)