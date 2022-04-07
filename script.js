
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
        this.previousInput = this.currentInput + " " + operation
        this.currentInput = ""
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
        //prints out the full calculation
        let output = prev + " " +`${this.operation}`+ " " + current + " =";
        if(computation === Infinity){
            this.currentInput = "Sneaky ;)"
        } else {
            this.currentInput = computation
        }
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

document.addEventListener('keydown', (e) => {
    console.log(e.code)
    if (e.code === "Numpad1") {
        calculator.appendNumber(1)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad2") {
        calculator.appendNumber(2)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad3") {
        calculator.appendNumber(3)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad4") {
        calculator.appendNumber(4)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad5") {
        calculator.appendNumber(5)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad6") {
        calculator.appendNumber(6)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad7") {
        calculator.appendNumber(7)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad8") {
        calculator.appendNumber(8)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad9") {
        calculator.appendNumber(9)
        calculator.updateDisplay()
    }
    if (e.code === "Numpad0") {
        calculator.appendNumber(0)
        calculator.updateDisplay()
    }
    if (e.code === "NumpadDecimal" || e.code === "Period") {
        calculator.appendNumber(".")
        calculator.updateDisplay()
    }
    if (e.code === "NumpadAdd") {
        calculator.chooseOperation("+");
        calculator.updateDisplay()
    }
    if (e.code === "NumpadSubtract") {
        calculator.chooseOperation("-");
        calculator.updateDisplay()
    }
    if (e.code === "NumpadMultiply") {
        calculator.chooseOperation("x");
        calculator.updateDisplay()
    }
    if (e.code === "NumpadDivide") {
        calculator.chooseOperation("÷");
        calculator.updateDisplay()
    }
    if (e.code === "NumpadEnter" || e.code === "Enter") {
        calculator.compute()
        calculator.updateDisplay()
    }
    if (e.code === "Backspace") {
        calculator.delete();
        calculator.updateDisplay();
    }
    if (e.code === "Escape") {
        calculator.clear();
        calculator.updateDisplay();
    }
    return
});


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
});