function toggleLight() {
    let bulbObj = document.getElementById("img-bulb");
    let bOnOff = bulbObj.getAttribute('data-onoff');

    console.log(bOnOff);

    if(bOnOff == "off"){
        bulbObj.src = "./img/pic_bulbon.gif"
        bulbObj.setAttribute('data-onoff', "on");
    }else{
        bulbObj.src = "./img/pic_bulboff.gif"
        bulbObj.setAttribute('data-onoff', "off");
    }
}

function calBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let squreHeight = (height/100) * (height/100);
    let bmi = weight/squreHeight
    let classification = '';

    if(bmi <18.50)
        classification = 'Underweight';
    else if(bmi >18.50 && bmi< 24.99)
        classification = 'Normal range';
    else
        classification = 'Overweight';

    document.getElementById("result").innerHTML =  `Your BMI: ${bmi.toFixed(2)}<br> Classification: ${classification}`;
    
}