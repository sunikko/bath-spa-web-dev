const input = document.getElementById("input");
const inputplus = document.getElementById("input-plus");
let input_A = 0.0;
let input_B = 0.0;
let input_operator = '';

const inputClear = (btnText) => {
    input.value = '';
    inputplus.value = '';
}
const inputPlus = (btnText) => {
    input_A = parseFloat(input.value);
    console.log(input_A);
    inputplus.value = input_A + btnText;
    input.value = '';
    input_operator = btnText;
}
const inputMinus = (btnText) => {
    input_A = parseFloat(input.value);
    console.log(input_A);
    inputplus.value = input_A + btnText;
    input.value = '';
    input_operator = btnText;
}
const inputMultiply = (btnText) => {

}
const inputDivide = (btnText) => {

}
const inputResult = (btnText) => {
    input_B = parseFloat(input.value);
    inputplus.value += (input_B + btnText);
    console.log(input_A + input_B);
    switch(input_operator){
        case '+':
            input.value = input_A + input_B;
            break;
        case '-':
            input.value = (input_A - input_B).toPrecision(6);; //Math.round
            break;
        case '*':
            input.value = input_A * input_B;
            break;
        case '/':
        input.value = input_A / input_B;
        break;
    }
}

const calculationMap = {
    clear(btnText){
        inputClear(btnText);
    },
    plus(btnText){
        inputPlus(btnText);
    },
    minus(btnText){
        alert("-");
        inputMinus(btnText);
    },
    multiply(btnText){
        inputMultiply(btnText);
    },
    divide(btnText){
        inputDivide(btnText);
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

const executeInput = (elem) => {
    var btnText = elem.textContent || elem.innerText;
    console.log(btnText);    
    if(isNaN(btnText) && '.' != btnText){
        //alert(calculationMap['minus']);
        calculationMap[operatorMap[btnText]](btnText);
    }else{
        input.value += btnText;
    }
}

/*
//second try
function addInput(elem){
    var btnText = elem.textContent || elem.innerText;
    console.log(btnText);    
    switch(btnText){
        case 'C':
            input.value = '';
            inputplus.value = '';
            break;
        case '+':
            input_A = parseFloat(input.value);
            console.log(input_A);
            inputplus.value += input_A;
            inputplus.value += btnText;
            input.value = '';
            break;
        case '=':
            input_B = parseFloat(input.value);
            inputplus.value += input_B;
            inputplus.value += btnText;
            console.log(input_A + input_B);
            input.value = input_A + input_B;
            break;
        default:
            input.value += btnText;
    }
}

//first try
const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
    
 });
*/