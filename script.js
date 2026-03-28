let scn = document.getElementById("calcsc");
scn.textContent = "";
// spacial keys
let plusbtn = document.getElementById("plus");
let minusbtn = document.getElementById("minus");
let bybtn = document.getElementById("by");
let delbtn = document.getElementById("del");
let equalbtn = document.getElementById("equal");
let overbtn = document.getElementById("over");
//math vars
let firstNum = 0;
let op = "";
// num keys
document.getElementById("one").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("two").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("three").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("four").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("five").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("six").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("seven").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("eight").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("nine").onclick = function () {
    scn.textContent += `${this.value}`;
};
document.getElementById("zero").onclick = function () {
    scn.textContent += `${this.value}`;
};
// math functions
equalbtn.onclick = function () {
    let secNum = parseInt(scn.textContent);
    let result = 0;
    if (op === "+") {
        result = firstNum + secNum;
    } else if (op === "-") {
        result = firstNum - secNum;
    } else if (op === "÷") {
        result = firstNum / secNum;
    } else if (op === "×") {
        result = firstNum * secNum;
    } else if (scn.textContent === "69") {
        result = "I Want To Have A Sex With You🫦🤤";
    } else if (scn.textContent === "1810") {
        result = "I Love You Rozy🌹❤️";
    } else if (scn.textContent === "6969") {
        result = "You Have Fucking Sexy Pussy 👅🫦";
    } else if (scn.textContent === "6") {
        result = "This is not a six this is sex";
    } 
    scn.textContent = result;
};
// delbtn
delbtn.onclick = function () {
    scn.textContent = "";
    firstNum = 0;
    op = "";
};
plusbtn.onclick = function () {
    firstNum = parseInt(scn.textContent);
    op = "+";
    scn.textContent = "";
};
bybtn.onclick = function () {
    firstNum = parseInt(scn.textContent);
    op = "×";
    scn.textContent = "";
};
overbtn.onclick = function () {
    firstNum = parseInt(scn.textContent);
    op = "÷";
    scn.textContent = "";
};
minusbtn.onclick = function () {
    firstNum = parseInt(scn.textContent);
    op = "-";
    scn.textContent = "";
};
