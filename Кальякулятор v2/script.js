// 1. Формируем калькулятор при помощи массива
const allButtons = ['AC', '√', '/', '%', '7', '8', '9', '*', '4', '5', '6', '+', '1', '2', '3', '-', '0', '.', '='];
allButtons.map(el => document.getElementById('buttons').insertAdjacentHTML('beforeend', `<button value='${el}'>${el}</button>`));
Array.from(document.getElementById('buttons').children).forEach(el => el.classList.add('button'));
// Конец

// 2. Вводим необходимые для работы переменные
let a = '';
let b = '';
let sign = '';
let allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let allSigns = ['√', '/', '%', '*', '+', '-'];
let result = '';
// Конец

// 3. Вся логика калькулятора
document.getElementById('buttons').onclick = function (click) {
    if (!click.target.classList.contains('button')) {
        return
    };

    // Логика операнд и знаков
    if (b === '' && sign === '' && allNumbers.includes(click.target.textContent)) {
        a += click.target.textContent
        document.getElementById('result').innerHTML = a
    } else if (a !== '' && allSigns.includes(click.target.textContent)) {
        sign = click.target.textContent
        document.getElementById('result').innerHTML = sign
    } else if (a !== '' && sign !== '' && result === '' && allNumbers.includes(click.target.textContent)) {
        b += click.target.textContent
        document.getElementById('result').innerHTML = b
    } else if (result !== '' && allNumbers.includes(click.target.textContent)) {
        a = result
        result = ''
        if (result === '') {
            b = ''
            b += click.target.textContent
            document.getElementById('result').innerHTML = b
        }
    };

    // AC - сброс введённых параметров
    if (click.target.textContent === 'AC') {
        document.getElementById('result').innerHTML = ''
        a = ''
        b = ''
        sign = ''
        result = ''
    };

    // Счёт
    if (click.target.textContent === '=') {
        switch (sign) {
            case '+':
                document.getElementById('result').innerHTML = Number(a) + Number(b)
                result = Number(a) + Number(b)
                break
            case '-':
                document.getElementById('result').innerHTML = Number(a) - Number(b)
                result = Number(a) - Number(b)
                break
            case '*':
                document.getElementById('result').innerHTML = Number(a) * Number(b)
                result = Number(a) * Number(b)
                break
            case '/':
                if (b === '0') {
                    document.getElementById('result').innerHTML = 'На ноль делить нельзя'
                    a = ''
                    b = ''
                    sign = ''
                } else {
                    document.getElementById('result').innerHTML = Number(a) / Number(b)
                    result = Number(a) / Number(b)
                }
                break
            case '√':
                document.getElementById('result').innerHTML = Math.sqrt(a)
                result = Number(a) * Number(b)
                break
        }
    }
    console.log(a, sign, b, result)
}