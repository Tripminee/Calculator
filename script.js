const normalButton = document.querySelectorAll(".btn");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const processDisplay = document.querySelector(".process-box");
const resultDisplay = document.querySelector(".result-box");
const plusButton = document.getElementsById("#plus");
const minusButton = document.getElementById("#minus");
const timesButton = document.getElementById("#times");
const divideButton = document.getElementById("#divide");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNum);
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
timesButton.addEventListener('click', times);
divideButton.addEventListener('click', divides);

let re = false
let firstNum = ''
let secondNum = ''

window.addEventListener('keydown', function(e) {
    if (resultDisplay.textContent === '0') {
        reset()
    }
    if (e.key >= '0' && e.key <= '9') {
        resultDisplay.textContent += e.key
    }
});

normalButton.forEach(button => 
    button.addEventListener('click', function(e) {
        if(resultDisplay.textContent === '0' || re) {
            reset()
            resultDisplay.textContent += button.textContent
        } else {
            resultDisplay.textContent += button.textContent
        }
    })
);

function clear() {
    processDisplay.textContent = ''
    resultDisplay.textContent = '0'
}

function reset() {
    processDisplay.textContent = ''
    resultDisplay.textContent = ''
};

function deleteNum() {
    resultDisplay.textContent = processDisplay.textContent.toString()
    .slice(0, -1)
};