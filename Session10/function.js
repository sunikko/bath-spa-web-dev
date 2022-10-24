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