let number1 = document.getElementById('1')
let number2 = document.getElementById('2')
let number3 = document.getElementById('3')
let number4 = document.getElementById('4')
let number5 = document.getElementById('5')
let number6 = document.getElementById('6')
let number7 = document.getElementById('7')
let number8 = document.getElementById('8')
let number9 = document.getElementById('9')
let number0 = document.getElementById('zero')
let ac = document.getElementById('ac')
let sqrt = document.getElementById('sqrt')
let divide = document.getElementById('divide')
let percent = document.getElementById('percent')
let multuply = document.getElementById('umnozhit')
let plus = document.getElementById('pribavit')
let minus = document.getElementById('otnyat')
let equal = document.getElementById('ravno')
let deleteSmt = document.getElementById('delete')
let dott = document.getElementById('dott')

let result = document.getElementById('result')
let input = document.getElementById('input')

let firstOperand = ''
let secondOperand = ''
let sign = ''
let finalResult = ''
let helper = ''

let allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let allSigns = ['√', '/', '%', '*', '+', '-']

document.querySelector('.buttons__grid').onclick = function(click) {
    if(!click.target.classList.contains('button')) {
        return
    }

    if (click.target.classList.contains('ac')) {
        firstOperand = ''
        secondOperand = ''
        sign = ''
        input.innerHTML = 0
        result.innerHTML = 0
        finalResult = ''
    }

    let clickAnyButton = click.target.textContent

    if (allNumbers.includes(clickAnyButton)) {
        if(secondOperand === '' && sign === '') {
            firstOperand += clickAnyButton
            input.innerHTML = firstOperand
        } else if(finalResult !== '') {
            firstOperand = finalResult
            finalResult = ''
            if(finalResult === '') {
                secondOperand = ''
            }
            secondOperand += clickAnyButton
            input.innerHTML = secondOperand
        } else {
            secondOperand += clickAnyButton
            input.innerHTML = secondOperand
        }
    }

    if(allSigns.includes(clickAnyButton)) {
        sign = clickAnyButton
        input.innerHTML = sign
    }

    if(click.target.classList.contains('equal')) {
        if(secondOperand === '') {
            secondOperand = firstOperand
        }
        switch(sign) {
            case '+':
                finalResult = Number(firstOperand) + Number(secondOperand)
                result.innerHTML = finalResult
                break
            case '-':
                finalResult = Number(firstOperand) - Number(secondOperand)
                result.innerHTML = finalResult
                break
            case '*':
                finalResult = Number(firstOperand) * Number(secondOperand)
                result.innerHTML = finalResult
                break
            case '/':
                if (secondOperand === '0') {
                    result.innerHTML = 'На ноль делить нельзя'
                    firstOperand = ''
                    secondOperand = ''
                    finalResult = ''
                    return
                } else {
                    finalResult = Number(firstOperand) / Number(secondOperand)
                    result.innerHTML = finalResult
                    break
                }
            case '√':
                finalResult = Math.sqrt(Number(firstOperand))
                result.innerHTML = finalResult
                break
        }
        input.innerHTML = 0
    }


    console.log(firstOperand, secondOperand, sign, finalResult)
}