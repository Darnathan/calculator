
//class to call the calculator functions
class Calculator {
    //takes the users input and when user hits a operant saves that input inot previous iput
    constructor(previousInputText, currentInputText) {
        this.currentInputText = currentInputText;
        this.previousInputText = previousInputText;
        this.clear()
    }
    //clears the console (input)
    clear(){
        this.currentInput = "";
        this.previousInput = "";
        this.operation = undefined;
    }
    //deletes the previous added number
    delete(){
        //does not delete if currentInput is an answer
        if (this.currentInput.includes('=')) return
        this.currentInput = this.currentInput.toString().slice(0, -1)
        
    }
    //adds so that there can be multiple numbers, also converts the numbers to string
    appendNumber(number){
        if (number === '.' && this.currentInput.includes('.')) return
        if (this.currentInput.includes('=')) return
        this.currentInput = this.currentInput.toString() + number.toString();
        
    }
    //adds the pressed operation to the console
    chooseOperation(operation) {
        if (this.currentInput === "") return
        if (this.previousInput !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousInput = this.currentInput
        this.currentInput = ''
    }
    //Does the maths
    compute(){
        let computation
        const prev = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        let output = prev + " " +`${this.operation}`+ " " + current + " =";
        
        this.currentInput = computation
        this.previousInput = output
        this.operation = undefined
    }
    //Updates the display 
    updateDisplay() {
       this.currentInputText.innerText = this.currentInput
       this.previousInputText.innerText = this.previousInput
       
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operation]');
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    });
});

allClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})