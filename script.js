alert('Desafio - Exercício 01')

let numberOne = prompt('Informe o primeiro número:')
let numberTwo = prompt('Informe o segundo número:')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A substração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if((sum % 2) == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(numberOne == numberTwo) {
  alert(`Os números inseridos são iguais!`)
} else {
  alert('Os número inseridos são diferentes!')
}