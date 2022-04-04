class Calculator {
    constructor(previousInputText, currentInputText) {
        this.currentInputText = currentInputText;
        this.previousInputText = previousInputText;
        this.clear()
    }
    clear(){
        this.currentInput = "";
        this.previousInput = "";
        this.operation = undefined;
    }

    delete(){

    }
    appendNumber(number){
        this.currentInput = this.currentInput.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute(){

    }

    updateDisplay() {
       this.currentInputText.innerText = this.currentInput
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operations]');
const deleteButton = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-all-clear]');
const previousInputText = document.querySelector('[data-previous-input]');
const currentInputText = document.querySelector('[data-current-input]');

const calculator = new Calculator(previousInputText, currentInputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    });
});