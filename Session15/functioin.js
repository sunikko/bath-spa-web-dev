// const plus = document.getElementById("plus");
const input = document.getElementById("input");
const inputplus = document.getElementById("input-plus");
let input_A = 0.0;
let input_B = 0.0;

// plus.addEventListener("click", () => {
    
// });


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