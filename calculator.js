let firstOperand = ''
let secondOperand = ''
let currentOperation = null

function addition(firstVariable = 0, secondVariable = 0){
    return firstVariable + secondVariable;
}

function subtraction(firstVariable = 0, secondVariable = 0){
    return firstVariable - secondVariable; 
}

function mutiplication(firstVariable = 0, secondVariable = 0){
    return firstVariable * secondVariable;
}

function division(firstVariable = 0,secondVariable = 1){
    return firstVariable / secondVariable;   
}

function operate(firstVariable, operator, secondVariable){
    let result = 0;
    switch(operator){
        case "+":
            result = addition(firstVariable,secondVariable);
            break;
        case "-":
            result = subtraction(firstVariable, secondVariable);
            break;
        case "/":
            result = division(firstVariable, secondVariable);
            break;
        case "*":
            result = mutiplication(firstVariable, secondVariable);
            break;   
    }
    return result;
}