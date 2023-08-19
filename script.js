const normalButton = document.querySelectorAll(".btn");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const processDisplay = document.querySelector(".process-box");
const resultDisplay = document.querySelector(".result-box");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const timesButton = document.getElementById("times");
const divideButton = document.getElementById("divide");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNum);
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
timesButton.addEventListener('click', times);
divideButton.addEventListener('click', divide);
equalsButton.addEventListener('click', calc);

let re = false;
let a = ''
let b = ''
let operator = ''

window.addEventListener('keydown', function(e) {
    if (e.key >= '0' && e.key <= '9') {
        keyNumber(e)
    }
    if (e.key === '.') {
        dot()
    }
    if (e.key === 'Backspace') {
        deleteNum()
    }
    if (e.key === 'Delete') {
        clear()
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        operatorForCal(e)
    }
    if (e.key === 'Enter' || e.key === 'Return') {52
        calculate()
    }
});

normalButton.forEach(button => 
    button.addEventListener('click', function(e) {
        if(resultDisplay.textContent === '0') {
            reset()
        }
        resultDisplay.textContent += button.textContent
    })
);

function keyNumber(e) {
    if (resultDisplay.textContent === '0' || re) {
        re = false
        reset()
    }
    resultDisplay.textContent += e.key
};

function clear() {
    processDisplay.textContent = ''
    resultDisplay.textContent = '0'
    a = ''
    b = ''
    operator = ''
};

function reset() {
    resultDisplay.textContent = ''

};

function deleteNum() {
    resultDisplay.textContent = resultDisplay.textContent.toString()
    .slice(0, -1)
    if (resultDisplay.textContent === '') {
        resultDisplay.textContent = '0'
    }
    processDisplay.textContent = processDisplay.textContent.toString()
    .slice(0, -1)
};

function dot() {
    if (resultDisplay.textContent === '') {
        resultDisplay.textContent = '0'
    }
    if (!resultDisplay.textContent.includes('.')) {
        resultDisplay.textContent += '.';
    }
};

function operatorForCal(e) {
    if (operator !== '') {
        calculate(a, b, operator)
        
    }
    a = resultDisplay.textContent
    operator = e.key
    processDisplay.textContent = `${a} ${operator}`
    re = true
}

function calculate() {
    b = resultDisplay.textContent
    processDisplay.textContent = `${a} ${operator} ${b} =`
    resultDisplay.textContent = result(a, b, operator)
    operator = ''
};

function result(a, b, operator) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            if (b === 0) {
                return null
            } else {
            return a / b
            }
    }
};

function plus(e) {
    if (resultDisplay.textContent !== '') {
    a = resultDisplay.textContent.replace(/\s/g, '')
    operator = '+'
    processDisplay.textContent = `${resultDisplay.textContent} ${operator}`
    reset()
    }
};

function minus(e) {
    processDisplay.textContent = `${resultDisplay.textContent} ${operator}`
    operator = '-'
    a = resultDisplay.textContent
    reset()
};

function times(e) {
    processDisplay.textContent = `${resultDisplay.textContent} ${operator}`
    operator = '*'
    a = resultDisplay.textContent
    reset()
};

function divide(e) {
    processDisplay.textContent = `${resultDisplay.textContent} ${operator}`
    operator = '/'
    a = resultDisplay.textContent
    reset()
};

function calc(e) {
    b = resultDisplay.textContent.replace(/\s/g, '')
    resultDisplay.textContent = result(a, b, operator)
    processDisplay.textContent = `${a} ${operator} ${b} =`
}