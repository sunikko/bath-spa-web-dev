const input = document.getElementById("input");
const inputplus = document.getElementById("input-plus");
let input_A = 0.0;
let input_B = 0.0;
let input_operator = '';

const inputClear = (btnText) => {
    input.value = '';
    inputplus.value = '';
}
const inputCalculator = (btnText) => {
    input_A = parseFloat(input.value);
    console.log(input_A);
    inputplus.value = input_A + btnText;
    input.value = '';
    input_operator = btnText;
}
const inputResult = (btnText) => {
    input_B = parseFloat(input.value);
    inputplus.value += (input_B + btnText);
    console.log(input_A + input_B);
    switch(input_operator){
        case '+':
            input.value = (input_A + input_B).toPrecision(6);
            break;
        case '-':
            input.value = (input_A - input_B).toPrecision(6); //Math.round
            break;
        case '*':
            input.value = (input_A * input_B).toPrecision(6);
            break;
        case '/':
            input.value = (input_A / input_B).toPrecision(6);
            break;
    }
}

const calculationMap = {
    clear(btnText){
        inputClear(btnText);
    },
    plus(btnText){
        inputCalculator(btnText);
    },
    minus(btnText){
        inputCalculator(btnText);
    },
    multiply(btnText){
        inputCalculator(btnText);
    },
    divide(btnText){
        inputCalculator(btnText);
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
        calculationMap[operatorMap[btnText]](btnText);
    }else{
        input.value += btnText;
    }
}


const btn = document.getElementsByClassName("btn");

for(let i=0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        executeInput(btn[i]); 
    });
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