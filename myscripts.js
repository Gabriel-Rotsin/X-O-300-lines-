var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

a1.addEventListener("click", showXOa1);
a2.addEventListener("click", showXOa2);
a3.addEventListener("click", showXOa3);

b1.addEventListener("click", showXOb1);
b2.addEventListener("click", showXOb2);
b3.addEventListener("click", showXOb3);

c1.addEventListener("click", showXOc1);
c2.addEventListener("click", showXOc2);
c3.addEventListener("click", showXOc3);

function showXOa1() {
    createXa1();
    createOa1();
    a1.removeEventListener("click", showXOa1);
}

function createXa1() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    a1.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassa1);
}

function changetoXclassa1() {
    a1.className = "x-style";
}

function changetoOclassa1() {
    a1.className = "o-style";
}

function createOa1() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    a1.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassa1);
}


function showXOa2() {
    createXa2();
    createOa2();
    a2.removeEventListener("click", showXOa2);
}

function createXa2() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    a2.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassa2);
}

function changetoXclassa2() {
    a2.className = "x-style";
}

function changetoOclassa2() {
    a2.className = "o-style";
}

function createOa2() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    a2.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassa2);
}



function showXOa3() {
    createXa3();
    createOa3();
    a3.removeEventListener("click", showXOa3);
}

function createXa3() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    a3.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassa3);
}

function changetoXclassa3() {
    a3.className = "x-style";
}

function changetoOclassa3() {
    a3.className = "o-style";
}

function createOa3() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    a3.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassa3);
}


function showXOb1() {
    createXb1();
    createOb1();
    b1.removeEventListener("click", showXOb1);
}

function createXb1() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    b1.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassb1);
}

function changetoXclassb1() {
    b1.className = "x-style";
}

function changetoOclassb1() {
    b1.className = "o-style";
}

function createOb1() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    b1.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassb1);
}


function showXOb2() {
    createXb2();
    createOb2();
    b2.removeEventListener("click", showXOb2);
}

function createXb2() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    b2.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassb2);
}

function changetoXclassb2() {
    b2.className = "x-style";
}

function changetoOclassb2() {
    b2.className = "o-style";
}

function createOb2() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    b2.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassb2);
}



function showXOb3() {
    createXb3();
    createOb3();
    b3.removeEventListener("click", showXOb3);
}

function createXb3() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    b3.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassb3);
}

function changetoXclassb3() {
    b3.className = "x-style";
}

function changetoOclassb3() {
    b3.className = "o-style";
}

function createOb3() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    b3.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassb3);
}



function showXOc1() {
    createXc1();
    createOc1();
    c1.removeEventListener("click", showXOc1);
}

function createXc1() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    c1.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassc1);
}

function changetoXclassc1() {
    c1.className = "x-style";
}

function changetoOclassc1() {
    c1.className = "o-style";
}

function createOc1() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    c1.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassc1);
}


function showXOc2() {
    createXc2();
    createOc2();
    c2.removeEventListener("click", showXOc2);
}

function createXc2() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    c2.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassc2);
}

function changetoXclassc2() {
    c2.className = "x-style";
}

function changetoOclassc2() {
    c2.className = "o-style";
}

function createOc2() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    c2.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassc2);
}



function showXOc3() {
    createXc3();
    createOc3();
    c3.removeEventListener("click", showXOc3);
}

function createXc3() {
    newButtonX = document.createElement("button");
    newButtonX.className = "new_button";
    newButtonX.innerText = "X";
    c3.appendChild(newButtonX);
    newButtonX.addEventListener("click", changetoXclassc3);
}

function changetoXclassc3() {
    c3.className = "x-style";
}

function changetoOclassc3() {
    c3.className = "o-style";
}

function createOc3() {
    newButtonO = document.createElement("button");
    newButtonO.className = "new_button_right";
    newButtonO.innerText = "O";
    c3.appendChild(newButtonO);
    newButtonO.addEventListener("click", changetoOclassc3);
}