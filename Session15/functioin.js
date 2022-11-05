// const plus = document.getElementById("plus");
const input = document.getElementById("input");
const inputplus = document.getElementById("input-plus");
let input_A = 0.0;
let input_B = 0.0;

// plus.addEventListener("click", () => {
    
// });
function inputClear(btnText){
    input.value = '';
    inputplus.value = '';
}
function inputPlus(btnText){
    input_A = parseFloat(input.value);
    console.log(input_A);
    inputplus.value += input_A;
    inputplus.value += btnText;
    input.value = '';
}

function inputMinus(btnText){

}

function inputMultiply(btnText){

}

function inputDivide(btnText){

}

function inputResult(btnText){
    input_B = parseFloat(input.value);
    inputplus.value += input_B;
    inputplus.value += btnText;
    console.log(input_A + input_B);
    input.value = input_A + input_B;
}

const calculationMap = {
    clear(btnText){
        inputClear(btnText);
    },
    plus(btnText){
        inputPlus(btnText);
    },
    minus(btnText){
        inputDivide(btnText);
    },
    multiply(btnText){
        inputMultiply(btnText);
    },
    result(btnText){
        inputResult(btnText);
    }
}

const operatorMap = {
    'C' : "clear",
    "+" : "plus",
    "-" : "minus",
    "*" : "multiply",
    "/" : "divide",
    "=" : "result"
}

function executeInput(elem){
    var btnText = elem.textContent || elem.innerText;
    console.log(btnText);    
    if(isNaN(btnText) && '.' != btnText){
        calculationMap[operatorMap[btnText]](btnText);
    }else{
        input.value += btnText;
    }
}