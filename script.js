let result = 0;
let firstNumber;
let secondNumber;
let operator;
let input = '';

function add(x, y) {
    return x+y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x , y) {
    return x*y;
}
function divide(x, y) {
    return x/y;
}
function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x, y);
            break;
    }
}

let display = document.querySelector('.displayInput');

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('number')) {
            if (display.textContent == '0') {
                display.textContent = '';
            }
            input += e.target.textContent;
            display.textContent =input;
        }
        if (e.target.classList.contains('operator')) {
            secondNumber = input;
            input = '';
            if (firstNumber) {
                let result = operate(operator, Number(firstNumber), Number(secondNumber));
                display.textContent = result;
                firstNumber = result;
                secondNumber = '';
                operator = e.target.textContent;
            }
            else {
                firstNumber = display.textContent;
                secondNumber = '';
                operator = e.target.textContent;
                display.textContent = '0';
            }
        }
        if (e.target.classList.contains('equal')) {
            secondNumber = display.textContent;
            let result = operate(operator, Number(firstNumber), Number(secondNumber));
             display.textContent = result;
            firstNumber = result;
            secondNumber = '';
             operator = '';
             
            
        }
        if (e.target.classList.contains('clear')) {
            display.textContent = '0';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            input = '';
        }

    })
});