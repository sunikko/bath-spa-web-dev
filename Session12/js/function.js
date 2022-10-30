let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let step6a = document.getElementById("step6-1");
let step6b = document.getElementById("step6-2");

let stepBtn1 = document.getElementById("stepBtn1");
let stepBtn2 = document.getElementById("stepBtn2");
let stepBtn3a = document.getElementById("stepBtn3-1");
let stepBtn3b = document.getElementById("stepBtn3-2");
let stepBtn4a = document.getElementById("stepBtn4-1");
let stepBtn4b = document.getElementById("stepBtn4-2");
let stepBtn5a = document.getElementById("stepBtn5-1");
let stepBtn5b = document.getElementById("stepBtn5-2");
let stepBtn6a = document.getElementById("stepBtn6-1");
let stepBtn6b = document.getElementById("stepBtn6-2");

let stepBtnBack2 = document.getElementById("stepBtn2-bk");
let stepBtnBack3 = document.getElementById("stepBtn3-bk");
let stepBtnBack4 = document.getElementById("stepBtn4-bk");
let stepBtnBack5 = document.getElementById("stepBtn5-bk");
let stepBtnBack6a = document.getElementById("stepBtn6-1-bk");
let stepBtnBack6b = document.getElementById("stepBtn6-2-bk");


window.addEventListener("load", () => {
    step1.style.display = 'block';
});

stepBtn1.addEventListener("click", () => {
    step1.style.display = 'none';
    step2.style.display = 'block';
});

stepBtn2.addEventListener("click", () => {
    step2.style.display = 'none';
    step3.style.display = 'block';
});

stepBtnBack2.addEventListener("click", () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
});

stepBtn3a.addEventListener("click", () => {
    step3.style.display = 'none';
    step4.style.display = 'block';
});
stepBtn3b.addEventListener("click", () => {
    step3.style.display = 'none';
    step4.style.display = 'block';
});
stepBtnBack3.addEventListener("click", () => {
    step3.style.display = 'none';
    step2.style.display = 'block';
});

stepBtn4a.addEventListener("click", () => {
    alert("Correct!! Good job!");
    step4.style.display = 'none';
    step5.style.display = 'block';
});
stepBtn4b.addEventListener("click", () => {
    alert("Ooops! Would you try again?");
});
stepBtnBack4.addEventListener("click", () => {
    step4.style.display = 'none';
    step3.style.display = 'block';
});

stepBtn5a.addEventListener("click", () => {
    step5.style.display = 'none';
    step6a.style.display = 'block';
});
stepBtn5b.addEventListener("click", () => {
    step5.style.display = 'none';
    step6b.style.display = 'block';
});
stepBtnBack5.addEventListener("click", () => {
    step5.style.display = 'none';
    step4.style.display = 'block';
});

stepBtnBack6a.addEventListener("click", () => {
    step6a.style.display = 'none';
    step5.style.display = 'block';
});
stepBtnBack6b.addEventListener("click", () => {
    step6b.style.display = 'none';
    step5.style.display = 'block';
});
stepBtn6a.addEventListener("click", () => {
    step6a.style.display = 'none';
    step1.style.display = 'block';
});
stepBtn6b.addEventListener("click", () => {
    step6b.style.display = 'none';
    step1.style.display = 'block';
});