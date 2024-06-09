let firstOperand = "";
let secondOperand = "";
let currentOperation = "";
let clickableButtons = true;
let operatorPresent = false;
let isCalculated = false;

//DOM contennt 
const currentCalculation = document.getElementById("current_calculation");
const outputCalculation = document.getElementById("output_calculation");

const btn0 = document.getElementById("btn_0");
const btn1 = document.getElementById("btn_1");
const btn2 = document.getElementById("btn_2");
const btn3 = document.getElementById("btn_3");
const btn4 = document.getElementById("btn_4");
const btn5 = document.getElementById("btn_5");
const btn6 = document.getElementById("btn_6");
const btn7 = document.getElementById("btn_7");
const btn8 = document.getElementById("btn_8");
const btn9 = document.getElementById("btn_9");

const clrBtn = document.getElementById("clear_btn");
const delBtn = document.getElementById("delete_btn");
const plusBtn = document.getElementById("plus_btn");
const minusBtn = document.getElementById("minus_btn");
const multBtn = document.getElementById("multiplication_btn");
const divBtn = document.getElementById("divide_button");
const dotBtn = document.getElementById("dot_btn");
const equalsBtn = document.getElementById("equals_btn");

//Event Listeners for calculations
btn0.addEventListener("click", ()=> updateVariables(btn0.textContent));
btn1.addEventListener("click", ()=> updateVariables(btn1.textContent));
btn2.addEventListener("click", ()=> updateVariables(btn2.textContent));
btn3.addEventListener("click", ()=> updateVariables(btn3.textContent));
btn4.addEventListener("click", ()=> updateVariables(btn4.textContent));
btn5.addEventListener("click", ()=> updateVariables(btn5.textContent));
btn6.addEventListener("click", ()=> updateVariables(btn6.textContent));
btn7.addEventListener("click", ()=> updateVariables(btn7.textContent));
btn8.addEventListener("click", ()=> updateVariables(btn8.textContent));
btn9.addEventListener("click", ()=> updateVariables(btn9.textContent));

clrBtn.addEventListener("click", ()=> clearScreen());
delBtn.addEventListener("click", ()=> deleteButton());
dotBtn.addEventListener("click", ()=> updateVariables(dotBtn.textContent));
plusBtn.addEventListener("click", ()=> updateOperators(plusBtn.textContent));
minusBtn.addEventListener("click", ()=> updateOperators(minusBtn.textContent));
multBtn.addEventListener("click", ()=> updateOperators("*"));
divBtn.addEventListener("click", ()=> updateOperators(divBtn.textContent));
equalsBtn.addEventListener("click", ()=> updateScreenValue());

/**
 * Adds two numbers together.
 * @param {*} firstVariable 
 * @param {*} secondVariable 
 * @returns sum of two variables
 */
function addition(firstVariable = 0, secondVariable = 0){
    let number = firstVariable + secondVariable;
    return Math.round(number * 1000) / 1000;
}

/**
 * Subtraction of two numbers.
 * @param {*} firstVariable 
 * @param {*} secondVariable 
 * @returns subtracted value
 */
function subtraction(firstVariable = 0, secondVariable = 0){
    let number = firstVariable - secondVariable;
    return Math.round(number * 1000) / 1000;
}

/**
 * Multiplies 2 numbers together.
 * @param {*} firstVariable 
 * @param {*} secondVariable 
 * @returns multiplied value
 */
function mutiplication(firstVariable = 0, secondVariable = 0){
    let number = firstVariable * secondVariable
    return Math.round(number * 1000) / 1000;
}

/**
 * Divides firstNumber over secondNumber
 * @param {*} firstVariable 
 * @param {*} secondVariable 
 * @returns Divided result.
 */
function division(firstVariable = 0,secondVariable = 1){
    let number = firstVariable / secondVariable;
    return  Math.round(number * 1000) / 1000;  
}

/**
 * Does an calculation based on the operand used.
 * @param {*} firstVariable 
 * @param {*} operator 
 * @param {*} secondVariable 
 * @returns result of operation
 */
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

/**
 * Udates all the varibales to be used globally and constants.
 * @param {*} number 
 */
function updateVariables(number = ""){
        if(firstOperand === "" || !operatorPresent){
            if(firstOperand.includes(".") && number === ".") return;
            firstOperand += number;
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
        // console.log("First value is " + firstOperand);
        // console.log("screen value is: " + screenValue.textContent);
        } else if (!operatorPresent){
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
        } else {
            // currentCalculation.textContent=0;
            if(secondOperand.includes(".") && number === ".") return;
            secondOperand += number;
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
        // console.log("Second value is " + firstOperand);
        // console.log("screen value is: " + screenValue.textContent);
        }
        console.log("Final First Value is " + firstOperand);
        console.log("Final Second Value is " + secondOperand);
        console.log("Current operation used is " + currentOperation);
}

/**
 * Updates the hlobal operator based on certain conditions.
 * @param {*} operator 
 */
function updateOperators(operator){

    if(isCalculated){
        setNextCalculation();
    }

    if(currentOperation == ''){
        currentOperation = operator;
        operatorPresent = true;
        updateVariables();
    }
}

/**
 * Updates the screenValue on the calculator based 
 * on calculations and result present.
 */
function updateScreenValue(){
    let result = operate(parseFloat(firstOperand), currentOperation, parseFloat(secondOperand));
    console.log(result);
    if (secondOperand === "0"){
        currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand} = `;
        outputCalculation.textContent = 'ERROR';
    } else if (currentOperation == ""){
        currentCalculation.textContent = `${firstOperand}`;
        outputCalculation.textContent = `${firstOperand}`;
    } else {
        currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand} = `;
        outputCalculation.textContent = `${result}`;
    }
    isCalculated = true;
} 

/**
 * Used for setting the global varaibles and constants based
 * on one calculation being done.
 */
function setNextCalculation(){
    firstOperand = outputCalculation.textContent;
    secondOperand = "";
    currentOperation = "";
    clickableButtons = true;
    operatorPresent = false;
    currentCalculation.textContent = firstOperand;
    outputCalculation.textContent = "";
    isCalculated = false
}

/**
 * Used to reset all global variables and constants
 */
function clearScreen(){
    firstOperand = ""
    secondOperand = "";
    currentOperation = "";
    clickableButtons = true;
    operatorPresent = false;
    isCalculated = false;
    currentCalculation.textContent = "";
    outputCalculation.textContent = "";
}

/**
 * Used ot delete values on screen.
 * Used  as a backspace.
 */
function deleteButton(){
    isCalculated = false;
        if (secondOperand != "") {
            secondOperand = secondOperand.slice(0,-1);
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
        } else if (currentOperation != "") {
            currentOperation = currentOperation.slice(0,-1);
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
            operatorPresent = false;
        } else {
            firstOperand = firstOperand.slice(0,-1);
            currentCalculation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
        }
}